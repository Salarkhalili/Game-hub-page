import platforms from "../data/platforms";
import useData from "./usedata";
// import useData from "./usedata";

export interface Platform {
  id: number;
  name: string;
  plug: string;
}
// const usePlatform = () => useData<Platform>("/platforms/lists/parents");
const usePlatform = () => useData<Platform>("/platforms/lists/parents");
export default usePlatform;
