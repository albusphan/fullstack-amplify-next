import { useState } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  forwardRef,
  IconButton,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";
import { IoEyeOff, IoEye } from "react-icons/io5";

interface PasswordInputProps extends InputProps {
  errorMessage?: string;
}

export const PasswordInput = forwardRef<PasswordInputProps, "input">(
  ({ errorMessage, ...rest }, ref) => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    return (
      <FormControl id="password" isRequired isInvalid={!!errorMessage}>
        <FormLabel>Password</FormLabel>
        <InputGroup size="lg">
          <Input
            pr="12"
            type={show ? "text" : "password"}
            ref={ref}
            {...rest}
          />
          <InputRightElement>
            <IconButton
              size="sm"
              onClick={handleClick}
              aria-label="toggle-password-button"
              variant="ghost"
              icon={show ? <IoEye /> : <IoEyeOff />}
            />
          </InputRightElement>
        </InputGroup>

        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      </FormControl>
    );
  }
);
