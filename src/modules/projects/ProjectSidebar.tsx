import { Flex, Image, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import {
  informationFields,
  layoutFields,
  avatarFields,
  logoAndBgEndFields,
  colorFields,
  textFields,
  fontFields,
} from "./constants";

const projectSidebarList = [
  {
    name: "Information",
    href: "information",
    icon: "/icons/project/information.svg",
    fields: informationFields,
  },
  {
    name: "Layout",
    href: "layout",
    icon: "/icons/project/layout.svg",
    fields: layoutFields,
  },
  {
    name: "2D Avatar",
    href: "2d-avatar",
    icon: "/icons/project/avatar.svg",
    fields: avatarFields,
  },
  {
    name: "Logo and Background",
    href: "logo-and-background",
    icon: "/icons/project/background.svg",
    fields: logoAndBgEndFields,
  },
  {
    name: "Color",
    href: "color",
    icon: "/icons/project/color.svg",
    fields: colorFields,
  },
  {
    name: "Text",
    href: "text",
    icon: "/icons/project/text.svg",
    fields: textFields,
  },
  {
    name: "Font",
    href: "font",
    icon: "/icons/project/font.svg",
    fields: fontFields,
  },
];
export const ProjectSidebar = () => {
  const router = useRouter();

  const step = router.query.step;

  return (
    <VStack w="100%" align="flex-start">
      {projectSidebarList.map(({ href, icon, name }) => {
        const isActive = step === href;

        return (
          <NextLink
            key={name}
            href={{
              pathname: router.pathname,
              query: { step: href, id: router.query.id },
            }}
          >
            <Flex
              w="100%"
              cursor="pointer"
              borderRadius="8px"
              bg={isActive ? "gray.200" : "none"}
              _hover={{
                bg: "gray.100",
              }}
              px="3"
              py="3"
            >
              <Image mr="3" src={icon} alt={`icon-${href}`} />
              <Text fontWeight={isActive ? "bold" : "normal"}>{name}</Text>
            </Flex>
          </NextLink>
        );
      })}
    </VStack>
  );
};
