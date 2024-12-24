import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);


  const getTopRatedMovies = async () => {
    //fetch data from tmdb api and update store
    const url = "https://api.themoviedb.org/3/movie/top_rated?page=1";

    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    // console.log("top rated:::",json.results);
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
   !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
