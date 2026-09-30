const ResCard = (props) => {
  const { resName, rating, location, imgUrl } = props;
  return (
    <div className="bg-gray-100 border border-solid border-gray-300 p-2 m-2 rounded-lg w-50 h-80 flex flex-col justify-between hover:shadow-md transition-shadow">
      <div>
        <img
          src={imgUrl}
          alt={resName}
          loading="lazy"
          className="w-full h-40 object-cover bg-gray-200 rounded-lg mb-2"
        />
        <h2 className="font-bold text-md mb-2 line-clamp-2" title={resName}>
         {resName}
        </h2>
      </div>
      <div>
        <p className="font-bold mb-1 text-md">Rating : {rating}</p>
        <p className="font-bold text-sm text-gray-700">Location : {location}</p>
      </div>
    </div>
  );
};
export default ResCard;
