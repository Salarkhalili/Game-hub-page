import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

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
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
