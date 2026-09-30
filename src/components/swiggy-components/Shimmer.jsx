const ShimmerCard = () => {
  return (
    <div className="bg-gray-100 border border-solid border-gray-200 p-2 m-2 rounded-lg w-50 animate-pulse">
      <div className="w-full h-36 bg-gray-300 rounded-lg mb-2"></div>
      <div className="h-4 bg-gray-300 rounded mb-2 w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded mb-2 w-1/2"></div>
      <div className="h-4 bg-gray-300 rounded mb-2 w-2/3"></div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="gap-4 p-4">
      <div className="flex gap-4 animate-pulse">
        <div className="h-10 w-48 bg-gray-200 rounded-lg m-2"></div>
        <div className="h-10 w-56 bg-gray-200 rounded-lg m-2"></div>
      </div>
      <div className="flex flex-wrap gap-3">
        {Array.from({ length: 100 }).map((_, index) => (
          <ShimmerCard key={index} />
        ))}
      </div>
    </div>
  );
};

export const MenuShimmer = () => {
  return (
    <div className="p-4 max-w-2xl animate-pulse">
      <div className="h-4 w-16 bg-gray-300 rounded"></div>
      <div className="w-full h-72 bg-gray-300 rounded-lg my-4"></div>
      <div className="h-7 w-2/3 bg-gray-300 rounded mb-3"></div>
      <div className="h-4 w-1/3 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 w-1/4 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 w-1/2 bg-gray-300 rounded mb-6"></div>

      <div className="h-6 w-40 bg-gray-300 rounded mb-3"></div>
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="h-4 w-1/2 bg-gray-300 rounded mb-2"></div>
      ))}
    </div>
  );
};

export default Shimmer;
