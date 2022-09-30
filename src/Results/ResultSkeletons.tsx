function ResultSkeletons() {
  return (
    <div className="flex flex-col lg:flex-row w-full mt-10">
      <div className='flex flex-row lg:flex-col mr-4'>
        {[...Array(3)].map((_, index) => (
          <div key={index} className="w-44 h-36 p-6 m-2 bg-white animate-pulse rounded-md mx-auto shadow-lg">
            <div className="flex flex-col items-center h-full">
              <div className="flex flex-col justify-center">
              <div className="w-12 bg-gray-300 h-10 mb-3" />
                <div className="w-36 bg-gray-300 h-6 rounded-md mb-1" />
                <div className="w-24 bg-gray-300 h-4 rounded-md " />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-96 p-6 m-2 bg-white animate-pulse rounded-md mx-auto shadow-lg">
          <div className="w-full h-80 bg-gray-300 mb-3" />
          <div className="w-full h-5 bg-gray-300 mb-3" />
      </div>
    </div>
  );
}

export default ResultSkeletons;
