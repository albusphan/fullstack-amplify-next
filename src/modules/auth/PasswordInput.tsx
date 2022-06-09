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
  id: string;
  errorMessage?: string;
  label?: string;
}

export const PasswordInput = forwardRef<PasswordInputProps, "input">(
  ({ errorMessage, label, id, ...rest }, ref) => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    return (
      <FormControl id={id} isRequired isInvalid={!!errorMessage}>
        <FormLabel htmlFor={id}>{label}</FormLabel>
        <InputGroup size="lg">
          <Input
            pr="12"
            type={show ? "text" : "password"}
            ref={ref}
            placeholder="Password"
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
