import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  //   console.log("MovieCard", movies);
  if (!movies) return;

  return (
    <div className="px-6">
      <h1 className="text-lg md:text-xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div></div>
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              movieName={movie.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
