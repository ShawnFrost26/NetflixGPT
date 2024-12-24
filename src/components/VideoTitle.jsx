const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[25%] px-6 sm:pt-[35%] md:px-24 absolute text-white bg-gradient-to-r from-black w-full aspect-video">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className=" text-xs md:inline-block md:py-6 md:text-lg md:w-1/3">{overview}</p>
      <div className="">
        <button className="hidden md:inline-block text-black py-1 md:py-4 px-2 md:px-16 md:text-xl md:font-bold rounded-md bg-white hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 text-white p-4 px-12 text-lg mx-2 bg-opacity-50 rounded-md hover:bg-opacity-70">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
