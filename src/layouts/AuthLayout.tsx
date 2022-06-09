import { Image } from "@chakra-ui/image";
import { Flex } from "@chakra-ui/layout";
import { Center, useMediaQuery } from "@chakra-ui/react";
import Logo from "../components/Logo";
import { PageHead } from "./PageHead";

type Props = {
  children: React.ReactNode;
  image?: string;
  title?: string;
};

export const AuthLayout: React.FC<Props> = ({ children, title, image }) => {
  const [isDesktop] = useMediaQuery("(min-width: 1024px)");

  return (
    <Flex h="100vh" w="100%">
      <PageHead title={title} />
      <Logo
        isLight={!!image && isDesktop}
        position="absolute"
        top="40px"
        left="40px"
      />
      {!!image && (
        <Image
          display={isDesktop ? "block" : "none"}
          src={image}
          alt="Welcome Image"
        />
      )}
      <Center w="100%">{children}</Center>
    </Flex>
  );
};
