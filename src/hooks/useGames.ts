import { GameQuery } from "../App";

import useData from "./usedata";

//این اینترفیس رو اکسپورت کردیم تا ازش در کامپوننتای دیگه هم استفاده کینم و اونجا ایمپورتشون کنیم مثل گیم کارد
export interface Game {
  id: number;
  name: string;
  background_image: string; //add in part 11 1:30
  //   parent_platforms: platform[]; //!wrong interface!   watch part 12  2:02
  parent_platforms: { platform: platform }[];
  metacritic: number; //!part 13
  rating_top: number; //!part35  ما با این کار داریم چون اعدادش صحیح هستش اما پایینی مقادیر اعشاری هم دارن فعلا کاری باش نداریم
  rating: number; //!35
}

export interface platform {
  id: number;
  name: string;
  slug: string;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );

export default useGames;
