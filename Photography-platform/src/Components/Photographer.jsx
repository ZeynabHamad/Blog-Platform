import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Photographer = ({ name, image, location, id }) => {
  return (
    <div className="p-4 lg:w-1/4 w-1/2 hover:scale-105 ease-in duration-200">
      <div className="h-full flex flex-col items-center text-center ">
        <img
          alt="team"
          className=" flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
          src={image}
        />
        <Link to={`/details/${id}`}>
          <div className="w-full">
            <h2 className="title-font font-black text-lg text-gray-800 hover:underline underline-offset-4 ease-in duration-200">
              {name}
            </h2>
            <h3 className="text-gray-500 mb-3">{location}</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Photographer;
