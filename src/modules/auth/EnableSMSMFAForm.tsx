import { useForm } from "react-hook-form";
import { useUser } from "@/hooks/useUser";
import { useState } from "react";
import { Alert, Button, VStack } from "@chakra-ui/react";

import { PasswordInput } from "./PasswordInput";

type FormFields = {
  password: string;
  confirmPassword: string;
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
        errorMessage={errors.password?.message}
      />
      <Button isLoading={isSubmitting} size="lg" width="100%" type="submit">
        Update password
      </Button>
    </VStack>
  );
};
