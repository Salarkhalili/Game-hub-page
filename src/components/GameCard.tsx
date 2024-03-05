import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import { CriticScore } from "./CriticScore";
import getCropedImageUrl from "./Image-url";
import Emoji from "./Emoji";

//ما باید داده های گیم رو به این کارد بدیم تا روی خودش نمایش بده پس از پراپس استفاده میکنیم
interface props {
  game: Game;
}

const GameCard = ({ game }: props) => {
  return (
    <Card>
      <Image src={getCropedImageUrl(game.background_image)} />
      <CardBody>
        {/* {game.parent_platforms.map( platform => <Text>{platform.platform.name}</Text>)}
        {game.parent_platforms.map(({ platform }) => (
          <Text>{platform.name}</Text>
        ))} */}{" "}
        {/* //!up statements send in PlatformIconsList */}
        <HStack justifyContent="space-between" mb={2}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
