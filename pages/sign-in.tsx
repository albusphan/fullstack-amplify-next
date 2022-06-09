import { AuthLayout } from "../src/layouts";
import { SignInForm } from "../src/modules/auth";
import { useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { NewPasswordForm } from "@/modules/auth/NewPasswordForm";

export default function SignIn() {
  const [step, setStep] = useState("init");

  return (
    <AuthLayout title="Sign In | 361/DXR" image="/auth-login.jpeg">
      <Box px="12" w="100%" maxW="600px">
        <Heading size="lg" pb="2">
          Welcome to the 361/DRX CMS
        </Heading>
        <Text color="gray.400" pb="6" fontSize="lg" fontWeight="500">
          Enter your details below.
        </Text>
        {step === "init" && <SignInForm setStep={setStep} />}
        {step === "newPasswordRequired" && (
          <NewPasswordForm setStep={setStep} />
        )}
      </Box>
    </AuthLayout>
  );
}
