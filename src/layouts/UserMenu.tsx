import { useRouter } from "next/router";
import { useState } from "react";
import {
  Button,
  Divider,
  Menu,
  MenuButton,
  MenuList,
  VStack,
} from "@chakra-ui/react";

import { UserAvatar } from "@/components/UserAvatar";
import { UserEmail } from "@/components/UserEmail";
import { useUser } from "@/hooks/useUser";
import { ROUTES } from "@/routes";

export const UserMenu = () => {
  const router = useRouter();

  const { signOut } = useUser();
  const [loading, setLoading] = useState(false);

  const onSignOut = async () => {
    setLoading(true);
    await signOut();
    router.push(ROUTES.signIn);
    setLoading(false);
  };

  return (
    <Menu>
      <MenuButton>
        <UserAvatar />
      </MenuButton>
      <MenuList>
        <VStack p="2" align="flex-start" spacing={2}>
          <UserEmail />
          <Divider />
          <Button
            isLoading={loading}
            onClick={onSignOut}
            variant="outline"
            width="100%"
          >
            Logout
          </Button>
        </VStack>
      </MenuList>
    </Menu>
  );
};
