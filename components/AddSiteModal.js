import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { createSite } from '../firebase/firestore';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from '@chakra-ui/core';
import { useAuth } from '../firebase/auth';

export default function AddSiteModal({ isOpen, onClose }) {
  const initialRef = useRef();
  const { handleSubmit, register, errors } = useForm();
  const toast = useToast();
  const {user} = useAuth()

  const onSubmit = (values) => {
    createSite(user.uid, values).then(() => {
      onClose();
      toast({
        title: 'Site created',
        description: "We've successfully added your website",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    });
  };

  const handleClose = () => {
    onClose();
    errors = {};
  };

  return (
    <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent as='form' onSubmit={handleSubmit(onSubmit)}>
        <ModalHeader>Add Site</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              ref={
                (initialRef,
                register({
                  required: 'Required, at least 2 characters long',
                  minLength: 2,
                }))
              }
              placeholder='My Site'
              name='name'
              isInvalid={errors.name != undefined}
            />
            {errors.name && (
              <p className='text-red-600 ml-2'>{errors.name.message}</p>
            )}
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Link</FormLabel>
            <Input
              ref={register({
                required: 'Required',
              })}
              name='link'
              placeholder='https://website.com'
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type='submit' bg='#82e8ed' _hover={{ bg: '#a8fbff' }} ml={3}>
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
