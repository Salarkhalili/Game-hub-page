import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
interface props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: props) => {
  // Games
  // Action Games
  // Xbox Acrion Games
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  }  Games`;
  return (
    <Heading marginY={2} fontSize="4xl" as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
