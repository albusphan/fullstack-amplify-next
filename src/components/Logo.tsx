import { forwardRef, Image, ImageProps } from "@chakra-ui/react";

interface Props extends ImageProps {
  isLight?: boolean;
}

const Logo = forwardRef<Props, "image">(({ isLight, ...other }, ref) => {
  return (
    <Image
      alt="logo"
      src={isLight ? "/logo-light.svg" : "/logo.svg"}
      h="40px"
      ref={ref}
      {...other}
    />
  );
});

export default Logo;
