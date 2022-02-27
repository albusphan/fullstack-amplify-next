import { GetServerSidePropsContext } from "next";

import { AuthLayout } from "../src/layouts";
import { checkUnAuth } from "../src/utils";
import { SignInForm } from "../src/modules/auth";
import { Box, Heading, Text } from "@chakra-ui/react";
import DatePicker from "@/components/DatePicker";
import { useState } from "react";

export default function SignIn() {
  const [date, setDate] = useState<Date | null>(new Date());

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
        <DatePicker selected={date} onChange={(d) => setDate(d)} />
      </Box>
    </AuthLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return await checkUnAuth(context);
}
