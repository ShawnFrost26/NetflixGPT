import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        //fetch data from tmdb api and update store
      const url = "https://api.themoviedb.org/3/movie/now_playing?page=1";
  
      const data = await fetch(url, API_OPTIONS);
      const json = await data.json();
      console.log(json.results);
      dispatch(addNowPlayingMovies(json.results));
    };
  
    useEffect(() => {
      getNowPlayingMovies();
    }, []);
  
}

export default useNowPlayingMovies;