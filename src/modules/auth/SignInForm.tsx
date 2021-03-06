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

export const SignInForm = ({
  setStep,
}: {
  setStep: (step: string) => void;
}) => {
  const [serverError, setServerError] = useState<string | null>(null);

  const { handleSubmit, register, formState } = useForm<FormFields>();

  const { signIn } = useUser();

  const { errors, isSubmitting } = formState;

  const onSubmit = handleSubmit(async (data) => {
    const res = await signIn(data.email, data.password);

    if (res.message) {
      setStep(res.message);
      return;
    }
    if (res.session) {
      window.location.href = ROUTES.home;
      return;
    }
    if (res.error) {
      console.log(res.error.message);
      setServerError(res.error?.message);
    }
  });

  return (
    <VStack as="form" onSubmit={onSubmit} spacing={6}>
      {!!serverError && <Alert status="error">{serverError}</Alert>}
      <FormControl
        id={"user-email"}
        isRequired
        isInvalid={!!errors.email?.message}
      >
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
        id="password"
        label="Password"
        {...register("password", { required: "Password is required" })}
        errorMessage={errors.password?.message}
      />

      <Button colorScheme="blue" alignSelf="flex-end" variant="link">
        <NextLink href={ROUTES.forgotPassword}>Forgot Password?</NextLink>
      </Button>
      <Button isLoading={isSubmitting} size="lg" width="100%" type="submit">
        Sign In
      </Button>
    </VStack>
  );
};
