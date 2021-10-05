import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightAddon,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";

type FormData = {
  projectType: string;
  projectName: string;
  projectUrl: string;
};

type Props = {
  defaultValues?: Partial<FormData>;
};

export const Information = ({ defaultValues }: Props) => {
  const { register, control, handleSubmit } = useForm<FormData>({
    defaultValues,
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Box as="form" onSubmit={onSubmit}>
      <VStack align="flex-start" spacing="6">
        <FormControl>
          <FormLabel>Project Type</FormLabel>
          <Controller
            control={control}
            name="projectType"
            render={({ field: { onChange, value } }) => (
              <RadioGroup
                size="lg"
                colorScheme="blackAlpha"
                onChange={onChange}
                value={value}
              >
                <Stack>
                  <Radio value="2d">2D</Radio>
                  <Radio value="3d">3D</Radio>
                </Stack>
              </RadioGroup>
            )}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Project Name</FormLabel>
          <Input {...register("projectName", { required: true })} />
        </FormControl>
        <FormControl>
          <FormLabel>Project URL</FormLabel>
          <InputGroup>
            <Input {...register("projectUrl", { required: true })} />
            <InputRightAddon bg="white">
              <Text>.361drx.com</Text>
            </InputRightAddon>
          </InputGroup>
        </FormControl>
        <Button colorScheme="primary" alignSelf="flex-end" type="submit">
          Save
        </Button>
      </VStack>
    </Box>
  );
};
