import { useUser } from "@/hooks/useUser";
import {
  Avatar,
  AvatarProps,
  forwardRef,
  SkeletonCircle,
} from "@chakra-ui/react";

export const UserAvatar = forwardRef<AvatarProps, "img">((props, ref) => {
  const { attributes, loading } = useUser();

  if (loading) return <SkeletonCircle size="12" />;

  return (
    <Avatar
      name={attributes.name}
      color="white"
      bg="black"
      {...props}
      ref={ref}
    />
  );
});
