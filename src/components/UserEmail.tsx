import { useUser } from "@/hooks/useUser";
import { Skeleton, Text, TextProps } from "@chakra-ui/react";

export const UserEmail = (props: TextProps) => {
  const { attributes, loading } = useUser();

  return (
    <Skeleton isLoaded={!loading}>
      <Text fontWeight="bold" {...props}>
        {attributes.email}
      </Text>
    </Skeleton>
  );
};
