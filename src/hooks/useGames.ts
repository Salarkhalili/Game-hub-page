import { useState, useEffect } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";

//این اینترفیس رو اکسپورت کردیم تا ازش در کامپوننتای دیگه هم استفاده کینم و اونجا ایمپورتشون کنیم مثل گیم کارد
export interface Game {
  id: number;
  name: string;
  background_image: string; //add in part 11 1:30
  //   parent_platforms: platform[]; //!wrong interface!   watch part 12  2:02
  parent_platforms: { platform: platform }[];
  metacritic: number; //!part 13
}

export interface platform {
  id: number;
  name: string;
  slug: string;
}

interface FetchGamesResponses {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGame] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoding] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoding(true);
    apiClient
      .get<FetchGamesResponses>("/games", { signal: controller.signal })
      .then((res) => {
        setGame(res.data.results);
        setIsLoding(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoding(false);
      });
    return () => controller.abort();
  }, []);
  return { games, error, isLoading };
};

export default useGames;
