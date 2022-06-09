import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { PasswordInput } from "./PasswordInput";

type FormFields = {
  username: string;
  email: string;
  password: string;
  phone: string;
};

export const SignUpForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormFields>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Box as="form" onSubmit={onSubmit}>
      <VStack spacing={2} mb="8">
        <FormControl isRequired>
          <FormLabel>Username</FormLabel>
          <Input
            size="lg"
            {...register("username", {
              required: "Username is required",
            })}
          />
          <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.email?.message}>
          <FormLabel>Email</FormLabel>
          <Input
            size="lg"
            {...register("email", {
              required: "Email is required",
            })}
          />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
        <PasswordInput
          id="new-password"
          autoComplete="new-password"
          {...register("password", { required: "Password is required" })}
          errorMessage={errors.password?.message}
        />
        <FormControl isRequired>
          <FormLabel>Phone</FormLabel>
          <Input
            size="lg"
            {...register("phone", {
              required: "Phone is required",
            })}
          />
          <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
        </FormControl>
      </VStack>

      <Button size="lg" width="100%" type="submit">
        Sign Up
      </Button>
    </Box>
  );
};
