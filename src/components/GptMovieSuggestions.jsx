import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    if (movieResults) setLoading(false);
  }, [movieResults]);

  if (loading) return <Shimmer />;

  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
