import { useState, useEffect } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";

//این اینترفیس رو اکسپورت کردیم تا ازش در کامپوننتای دیگه هم استفاده کینم و اونجا ایمپورتشون کنیم مثل گیم کارد
export interface Game {
  id: number;
  name: string;
  background_image: string; //add in part 11 1:30
}

interface FetchGamesResponses {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGame] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponses>("/games", { signal: controller.signal })
      .then((res) => setGame(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);
  return { games, error };
};

export default useGames;
