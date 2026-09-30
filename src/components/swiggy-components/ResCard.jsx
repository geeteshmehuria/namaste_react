const ResCard = (props) => {
  const { resName, rating, location, imgUrl } = props;
  return (
    <>
      <div className="bg-gray-100 border border-solid border-gray-300 p-2 m-2 rounded-lg w-50">
        <img src={imgUrl} alt="logo" width={200} className="rounded-lg mb-2" />
        <h2 className="font-bold mb-2">Res Name : {resName} </h2>
        <p className="font-bold mb-2">Rating : {rating}</p>
        <p className="font-bold mb-2">Location : {location}</p>
      </div>
    </>
  );
};
export default ResCard;
