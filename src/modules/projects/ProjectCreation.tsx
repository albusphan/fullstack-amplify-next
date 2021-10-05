import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { IoAdd } from "react-icons/io5";
import { Information } from "./steps/Information";

export const ProjectCreation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button zIndex={0} leftIcon={<IoAdd />} onClick={onOpen}>
        New Project
      </Button>
      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <ModalCloseButton />
            Create new project
          </ModalHeader>
          <ModalBody>
            <Information
              defaultValues={{
                projectType: "2d",
              }}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
