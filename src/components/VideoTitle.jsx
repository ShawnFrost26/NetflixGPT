const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black w-full aspect-video">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div className="">
        <button className="bg-white text-black p-4 px-16 text-xl font-bold rounded-md bg-white hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white p-4 px-12 text-lg mx-2 bg-opacity-50 rounded-md hover:bg-opacity-70">
         ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
