import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";
import { DashboardHeader } from "./DashboardHeader";

export const DashboardLayout: React.FC = ({ children }) => {
  return (
    <Flex minH="100vh" bg="gray.10">
      <Box display={["none", "none", "none", "none", "block"]}>
        <Sidebar />
      </Box>
      <Box w="100%">
        <DashboardHeader />
        {children}
      </Box>
    </Flex>
  );
};
