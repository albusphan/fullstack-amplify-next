import { GetServerSidePropsContext } from "next";

import { AuthLayout } from "../src/layouts";
import { checkUnAuth } from "../src/utils";
import { SignUpForm } from "../src/modules/auth";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function SignUp() {
  return (
    <AuthLayout title="Sign Up | 361/DXR" image="/auth-register.jpeg">
      <Box px="12" w="100%" maxW="600px">
        <Heading size="lg" pb="2">
          Get started
        </Heading>
        <Text color="gray.400" pb="6" fontSize="lg" fontWeight="500">
          Access templates for multiple AR products.
        </Text>
        <SignUpForm />
      </Box>
    </AuthLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return await checkUnAuth(context);
}
