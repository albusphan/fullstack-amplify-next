import { GetServerSidePropsContext } from "next";
import { Box, VStack } from "@chakra-ui/react";

import { checkAuth } from "@/utils";
import { PageHead } from "@/layouts/PageHead";

export default function HomePage() {
  return (
    <Box px="6">
      <PageHead title="Dashboard || 361/DXR" />
      <VStack py="4" align="flex-start" w="100%" spacing={6}>
        <Box alignSelf="flex-end"></Box>
      </VStack>
    </Box>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return await checkAuth(context);
}
