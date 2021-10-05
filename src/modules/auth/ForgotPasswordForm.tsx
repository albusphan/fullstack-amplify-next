import { useForm } from "react-hook-form";
import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  VStack,
} from "@chakra-ui/react";

type FormFields = {
  email: string;
};

export const ForgotPasswordForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormFields>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <VStack as="form" onSubmit={onSubmit} spacing={6}>
      <FormControl isRequired isInvalid={!!errors.email?.message}>
        <Input
          size="lg"
          placeholder="Enter your email"
          autoComplete="off"
          {...register("email", {
            required: "Email is required",
          })}
        />
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </FormControl>

      <Button size="lg" isFullWidth type="submit">
        Reset Password
      </Button>
    </VStack>
  );
};
