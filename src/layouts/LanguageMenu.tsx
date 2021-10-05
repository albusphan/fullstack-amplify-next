import { Image, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

export const LanguageMenu = () => {
  return (
    <Menu>
      <MenuButton>
        <Image mr="4" src="/icons/ic_flag_de.svg" alt="Germany Flag" />
      </MenuButton>
      <MenuList>
        <MenuItem>
          <Image mr="4" src="/icons/ic_flag_de.svg" alt="Germany Flag" />
          Germany
        </MenuItem>
        <MenuItem>
          <Image mr="4" src="/icons/ic_flag_en.svg" alt="England Flag" />
          English
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
