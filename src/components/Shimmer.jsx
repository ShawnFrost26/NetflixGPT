const Shimmer = () => {
    return (
      <div className="p-4 m-4 bg-black text-white bg-opacity-90">
        <div className="flex space-x-4 overflow-x-auto animate-pulse">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="w-36 md:w-48 h-72 bg-gray-700 rounded-md flex-shrink-0"
            ></div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Shimmer;
  