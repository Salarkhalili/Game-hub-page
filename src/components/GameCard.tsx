import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

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
      </CardBody>
    </Card>
  );
};

export default GameCard;
