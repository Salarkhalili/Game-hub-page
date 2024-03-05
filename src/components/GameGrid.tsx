import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

import { GameQuery } from "../App";

interface props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  // if (error) return <Text>{error}</Text>;
  return (
    <>
      //!we can instead of this use a if function and delete <></>
      {error && <Text>{error}</Text>}
      {/* <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul> */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding="15px"
      >
        {/* <SimpleGrid columns={2} spacing={10}> */}
        {/* بصوزت هارد ورد ستون هارو بهش دادیم که تو همه دیوایس ها یکسانه و این خوب نیست */}
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
