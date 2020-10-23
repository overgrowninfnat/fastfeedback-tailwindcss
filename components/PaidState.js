import { useDisclosure } from '@chakra-ui/core';
import AddSiteModal from './AddSiteModal';
import MainBox from './MainBox';
import SitesTable from './SitesTable';

export default function PaidState({ sites }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {sites.length ? (
        <SitesTable sites={sites} />
      ) : (
        <MainBox>
          <p className='text-sm md:text-2xl lg:text-3xl font-extrabold'>
            You haven't added any sites.
          </p>
          <p className='text-sm font-hairline md:font-light lg:text-md'>
            Welcome <span>👋🏻</span> Let's get started.
          </p>
          <button
            onClick={onOpen}
            className='mt-6 bg-black hover:bg-gray-800 text-white font-bold px-4 py-2 rounded-md shadow-xs hover:shadow-lg transition duration-500'
          >
            Add your first site
          </button>

          <AddSiteModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        </MainBox>
      )}
    </>
  );
}
