function ResultSkeletons() {
  return (
    <div className="flex flex-col lg:flex-row w-full mt-10">
      <div className='flex flex-row lg:flex-col lg:mr-4'>
        {[...Array(3)].map((_, index) => (
          <div key={index} className="w-28 h-18 lg:w-44 lg:h-36 p-6 m-2 bg-white animate-pulse rounded-md mx-auto shadow-lg">
            <div className="flex flex-col items-center h-full">
              <div className="flex flex-col justify-center">
              <div className="w-24 lg:w-12 bg-gray-300 h-10 mb-3" />
                <div className="w-2/3 lg:w-36 bg-gray-300 h-6 rounded-md mb-1" />
                <div className="w-3/4 lg:w-24 bg-gray-300 h-4 rounded-md " />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full lg:w-full h-64 lg:h-96 p-6 m-2 bg-white animate-pulse rounded-md mx-auto shadow-lg">
          <div className="w-full lg:w-full h-44 lg:h-80 bg-gray-300 mb-3" />
          <div className="w-fulllg:w-full h-5 bg-gray-300 mb-3" />
      </div>
    </div>
  );
}

export default ResultSkeletons;
