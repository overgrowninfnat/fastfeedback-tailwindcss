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

export default function AddSiteModal({ isOpen, onClose }) {
  const initialRef = useRef();
  const { handleSubmit, register, errors } = useForm();
  const toast = useToast();

  const onSubmit = (values) => {
    createSite(values).then(() => {
      onClose();
      toast({
        title: 'Site created',
        description: "We've successfully add your website",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    });
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
                  required: 'Required',
                }))
              }
              placeholder='My Site'
              name='name'
            />
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
          <Button onClick={onClose}>Cancel</Button>
          <Button type='submit' bg='#82e8ed' _hover={{ bg: '#a8fbff' }} ml={3}>
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
