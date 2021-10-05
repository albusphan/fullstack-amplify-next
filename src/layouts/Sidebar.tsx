import { Box, Text, Flex, VStack, Image } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";

import Logo from "../components/Logo";
import { UserAvatar } from "@/components/UserAvatar";
import { UserEmail } from "@/components/UserEmail";

const sidebarItems = [
  {
    title: "General",
    child: [
      {
        title: "Dashboard",
        icon: "/icons/navbar/ic_dashboard.svg",
        href: "/",
      },
    ],
  },
  {
    title: "Management",
    child: [
      {
        title: "Account",
        icon: "/icons/navbar/ic_user.svg",
        href: "/account",
      },
    ],
  },
];

export const Sidebar = () => {
  const router = useRouter();

  return (
    <Box pt="10" h="100vh" position="sticky" top="0" shadow="xl" w="280px">
      <Logo h="8" mx="5" mb="8" />
      <Flex
        alignItems="center"
        bg="blackAlpha.100"
        mx="5"
        borderRadius="8px"
        p="3"
        mb="6"
      >
        <Box mr="2">
          <UserAvatar />
        </Box>
        <UserEmail />
      </Flex>
      <VStack w="100%" spacing="2">
        {sidebarItems.map(({ title, child }) => (
          <Box w="100%" key={title}>
            <Text
              fontSize="sm"
              fontWeight="bold"
              textTransform="uppercase"
              pl="10"
              py="2"
            >
              {title}
            </Text>
            {child.map(({ title, icon, href }) => (
              <NextLink key={href} href={href} passHref>
                <Flex
                  borderRight={href === router.pathname ? "4px" : "none"}
                  bg={href === router.pathname ? "blackAlpha.200" : "none"}
                  cursor="pointer"
                  _hover={{
                    bg: "blackAlpha.100",
                  }}
                  py="3"
                  pl="10"
                  align="center"
                >
                  <Image src={icon} alt={`icon-${title}`} />
                  <Text ml="5" fontSize="lg">
                    {title}
                  </Text>
                </Flex>
              </NextLink>
            ))}
          </Box>
        ))}
      </VStack>
    </Box>
  );
};
