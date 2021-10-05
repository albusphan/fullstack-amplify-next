import { useForm } from "react-hook-form";
import NextLink from "next/link";
import { useUser } from "@/hooks/useUser";
import { useState } from "react";
import {
  Alert,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";

import { ROUTES } from "../../routes";
import { PasswordInput } from "./PasswordInput";

type FormFields = {
  email: string;
  password: string;
};

export const SignInForm = () => {
  const [serverError, setServerError] = useState<string | null>(null);

  const { handleSubmit, register, formState } = useForm<FormFields>();

  const { signIn } = useUser();

  const { errors, isSubmitting } = formState;

  const onSubmit = handleSubmit(async (data) => {
    const res = await signIn(data.email, data.password);
    if (res.session) {
      window.location.href = ROUTES.home;
      return;
    }
    if (res.error) {
      setServerError(res.error?.message);
      throw res.error;
    }
  });

  return (
    <VStack as="form" onSubmit={onSubmit} spacing={6}>
      {!!serverError && <Alert status="error">{serverError}</Alert>}
      <FormControl isRequired isInvalid={!!errors.email?.message}>
        <FormLabel>Email</FormLabel>
        <Input
          size="lg"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
          })}
        />
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </FormControl>
      <PasswordInput
        {...register("password", { required: "Password is required" })}
        errorMessage={errors.password?.message}
      />

      <Button colorScheme="blue" alignSelf="flex-end" variant="link">
        <NextLink href={ROUTES.forgotPassword}>Forgot Password?</NextLink>
      </Button>
      <Button isLoading={isSubmitting} size="lg" isFullWidth type="submit">
        Sign In
      </Button>
    </VStack>
  );
};
