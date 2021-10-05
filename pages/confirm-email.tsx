import { Box, Button, Heading, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { IoArrowBack } from "react-icons/io5";

import { AuthLayout } from "../src/layouts";
import { ROUTES } from "../src/routes";

export default function ConfirmEmailPage() {
  return (
    <AuthLayout title="Verify Email | 361/DXR">
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
          Please check your email!
        </Heading>
        <Text color="gray.400" pb="6" fontSize="lg" fontWeight="500">
          We have emailed a 6-digit confirmation code to your email address,
          please enter the code in below box to verify your email.
        </Text>
      </Box>
    </AuthLayout>
  );
}
