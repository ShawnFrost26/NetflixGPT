import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, movieName }) => {
  if (!posterPath) return null;
  return (
    <div className="w-48 pr-2">
      <img src={IMG_CDN_URL + posterPath} alt={movieName} />
    </div>
  );
};

export default MovieCard;
