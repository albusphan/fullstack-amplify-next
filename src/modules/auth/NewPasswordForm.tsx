import { useForm } from "react-hook-form";
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

import { PasswordInput } from "./PasswordInput";

type FormFields = {
  password: string;
  confirmPassword: string;
  phoneNumber: string;
};

export const NewPasswordForm = ({
  setStep,
}: {
  setStep: (step: string) => void;
}) => {
  const [serverError, setServerError] = useState<string | null>(null);

  const { handleSubmit, register, formState, getValues } =
    useForm<FormFields>();

  const { handleCompleteNewPasswordChallenge } = useUser();

  const { errors, isSubmitting } = formState;

  const onSubmit = handleSubmit(async ({ password }) => {
    const res = await handleCompleteNewPasswordChallenge(password);
    if (res.message) {
      setStep(res.message);
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
      <PasswordInput
        id="password"
        label="New Password"
        {...register("password", { required: "Password is required" })}
        errorMessage={errors.password?.message}
      />
      <PasswordInput
        id="confirmPassword"
        label="Confirm Password"
        {...register("confirmPassword", {
          validate: (value) =>
            value === getValues("password") || "Passwords do not match",
        })}
        errorMessage={errors.confirmPassword?.message}
      />
      <FormControl isRequired isInvalid={!!errors.phoneNumber?.message}>
        <FormLabel>Phone number</FormLabel>
        <Input
          size="lg"
          placeholder="Phone number"
          {...register("phoneNumber", {
            required: "Phone number is required",
          })}
        />
        <FormErrorMessage>{errors.confirmPassword?.message}</FormErrorMessage>
      </FormControl>
      <Button isLoading={isSubmitting} size="lg" width="100%" type="submit">
        Update password
      </Button>
    </VStack>
  );
};
