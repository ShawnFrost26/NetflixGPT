import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);


  const getUpcomingMovies = async () => {
    //fetch data from tmdb api and update store
    const url = "https://api.themoviedb.org/3/movie/upcoming?page=1";

    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    // console.log("upcoming:::",json.results);
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
   !upcomingMovies && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
