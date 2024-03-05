import genres from "../data/genres";
// import useData from "./usedata";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenre = () => useData<Genre>("/genres");
//!part36  میخواهیم به جای اینکه لیست ژانرهارو از سرور بگیره یکبار ذخیره اش کنیم در برنامه خودمون و هر بار از روی اون و در لحظه بدون لودینگ بیارتشون روی صفحه پس به جای هوک از داده های دستی برای دیتا و ارور و ایزلودینگ استفاده میکنیم
const useGenre = () => ({ data: genres, isLoading: false, error: null });

export default useGenre;
