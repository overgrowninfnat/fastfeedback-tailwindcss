import { useRef } from 'react';
import FeedbackCard from '../../components/FeedbackCard';
import { createFeedback } from '../../firebase/firestore';
import { getAllFeedback, getAllSites } from '../../firebase/firestore-admin';
import { useAuth } from '../../firebase/auth';
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/core';

export async function getStaticPaths() {
  const sites = await getAllSites();
  const paths = sites.map((site) => ({
    params: {
      siteId: site.siteId.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const siteId = context.params.siteId;
  const feedback = await getAllFeedback(siteId);
  return {
    revalidate: 1,
    props: {
      initialFeedback: feedback,
    },
  };
}

export default function SiteFeedback({ initialFeedback }) {
  const inputEl = useRef(null);
  const { user } = useAuth();
  const router = useRouter();
  const toast = useToast();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      author: user.name,
      authorId: user.uid,
      createdAt: Date.now(),
      provider: user.provider,
      rating: 5,
      siteId: router.query.siteId,
      status: 'pending',
      text: inputEl.current.value,
    };
    createFeedback(newFeedback).then(() => {
      toast({
        title: 'Comment created',
        description: "We've successfully added your comment",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      inputEl.current.value = '';
    });
  };
  return (
    <div className='w-2/4 p-12 mt-20 mx-auto flex flex-col content-center'>
      <div className='col-span-6 sm:col-span-3 mb-6'>
        <form onSubmit={handleOnSubmit}>
          <label
            htmlFor='comment'
            className='block text-xl font-extrabold mb-4 leading-5 text-gray-800'
          >
            Comment
          </label>
          <input
            ref={inputEl}
            id='comment'
            className='mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
          />
          <input
            value='Comment Now'
            type='submit'
            className='mt-6 mb-6 cursor-pointer bg-black text-white font-bold py-2 px-4 shadow-md hover:bg-gray-800 hover:shadow-xl transition duration-500'
          />
        </form>
      </div>
      <FeedbackCard feedback={initialFeedback} />
    </div>
  );
}
