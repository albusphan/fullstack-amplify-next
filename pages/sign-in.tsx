import { GetServerSidePropsContext } from "next";

import { AuthLayout } from "../src/layouts";
import { checkUnAuth } from "../src/utils";
import { SignInForm } from "../src/modules/auth";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function SignIn() {
  return (
    <AuthLayout title="Sign In | 361/DXR" image="/auth-login.jpeg">
      <Box px="12" w="100%" maxW="600px">
        <Heading size="lg" pb="2">
          Welcome to the 361/DRX CMS
        </Heading>
        <Text color="gray.400" pb="6" fontSize="lg" fontWeight="500">
          Enter your details below.
        </Text>
        <SignInForm />
      </Box>
    </AuthLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return await checkUnAuth(context);
}
