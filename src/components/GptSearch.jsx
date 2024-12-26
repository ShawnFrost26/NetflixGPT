import { useState } from "react";
import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <div className="fixed -z-10">
        <img className="h-screen object-cover md:h-full"
        src={BG_URL} alt="background-image" />
      </div>
      <div className="">
        <GptSearchBar loading={loading} setLoading={setLoading}/>
        <GptMovieSuggestions loading={loading}/>
      </div>
    </div>
  );
};

export default GptSearch;
