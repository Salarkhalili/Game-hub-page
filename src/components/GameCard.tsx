import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import { CriticScore } from "./CriticScore";

//ما باید داده های گیم رو به این کارد بدیم تا روی خودش نمایش بده پس از پراپس استفاده میکنیم
interface props {
  game: Game;
}

const GameCard = ({ game }: props) => {
  return (
    <Card borderRadius="10" overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        {/* {game.parent_platforms.map( platform => <Text>{platform.platform.name}</Text>)}
        {game.parent_platforms.map(({ platform }) => (
          <Text>{platform.name}</Text>
        ))} */}{" "}
        {/* //!up statements send in PlatformIconsList */}
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
