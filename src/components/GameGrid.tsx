import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponses {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGame] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponses>("/dgames")
      .then((res) => setGame(res.data.results))
      .catch((err) => setError(err.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
