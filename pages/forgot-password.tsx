import { Box, Button, Heading, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { IoArrowBack } from "react-icons/io5";

import { AuthLayout } from "../src/layouts";
import { ForgotPasswordForm } from "../src/modules/auth";
import { ROUTES } from "../src/routes";

export default function ForgotPassword() {
  return (
    <AuthLayout title="Forgot Password | 361/DXR">
      <Box px="12" w="100%" maxW="600px">
        <Button
          variant="ghost"
          mb="10"
          p="0"
          _hover={{
            background: "none",
          }}
          leftIcon={<IoArrowBack />}
        >
          <NextLink href={ROUTES.signIn}>Back To Sign In</NextLink>
        </Button>
        <Heading size="lg" pb="2">
          Forgot your password?
        </Heading>
        <Text color="gray.400" pb="6" fontSize="lg" fontWeight="500">
          Please enter the email address associated with your account and We
          will email you a link to reset your password.
        </Text>
        <ForgotPasswordForm />
      </Box>
    </AuthLayout>
  );
}
