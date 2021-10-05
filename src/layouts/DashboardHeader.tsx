import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { useRouter } from "next/router";

import { Sidebar } from "./Sidebar";
import { UserMenu } from "./UserMenu";
import { LanguageMenu } from "./LanguageMenu";

export const DashboardHeader = () => {
  const router = useRouter();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    onClose();
  }, [onClose, router.pathname]);

  return (
    <>
      <Flex
        position="sticky"
        zIndex={1}
        w="100%"
        p="6"
        alignItems="center"
        top={0}
        backdropFilter="blur(6px)"
      >
        <IconButton
          display={["flex", "flex", "flex", "flex", "none"]}
          ref={btnRef}
          onClick={onOpen}
          icon={<IoMenuOutline size={24} />}
          variant="ghost"
          aria-label="Menu"
        />
        <Box ml="auto" />
        <LanguageMenu />
        <UserMenu />
      </Flex>
      <Drawer
        size="xs"
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent maxW="280px">
          <DrawerBody p="0">
            <Sidebar />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
