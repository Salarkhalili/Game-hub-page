import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: props) => {
  return (
    //برای افقی سازی محتوای درون نو بار استفاده میشه HStack
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
