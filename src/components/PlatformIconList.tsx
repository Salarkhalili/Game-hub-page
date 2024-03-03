import { platform } from "../hooks/useGames";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { Icon, HStack } from "@chakra-ui/react";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface props {
  platforms: platform[];
}

const PlatformIconList = ({ platforms }: props) => {
  //   const iconMap = {   we have error here so replace with :
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  //   return (
  //     /* {game.parent_platforms.map( platform => <Text>{platform.platform.name}</Text>)} */
  //     // game.parent_platforms.map(({ platform }) => <Text>{platform.name}</Text>);
  //     platforms.map((platform) => (
  //       // <Text>{platform.name}</Text>)
  //       <Icon as={iconMap[platform.slug]} />
  //     ))
  //   );
  // };
  return (
    <HStack marginY={2}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};
export default PlatformIconList;
