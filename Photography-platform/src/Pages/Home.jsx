/* eslint-disable react/prop-types */
import { useState } from "react";
import Filter from "../Components/Filter";
import Photographer from "../Components/Photographer";
import SeeMoreButton from "../Components/SeeMoreButton";

const Home = ({ data, location, maxLength }) => {
  const [showMore, setShowMore] = useState(false);

  const visiblePhotographers = showMore ? data : data.slice(0, maxLength);

  return (
    <section className="text-gray-600 body-font font-mono bg-white scroll-smooth">
      <div className="container px-5 md:py-10 pt-28 mx-auto">
        <div className="flex flex-wrap flex-col md:flex-row md:py-0 md:items-center text-center  py-2 mb-24 mt-36 md:mx-36">
          <h1 className=" text-3xl font-black font-mono title-font mb-0 text-bg-footer tracking-wider">
            PHOTOGRAPHERS
          </h1>
          <Filter location={location} />
        </div>

        <div className="flex flex-wrap -m-4">
          {visiblePhotographers.map((user, key) => (
            <Photographer
              name={user.name}
              image={user.image}
              location={user.location}
              key={key}
              id={user.id}
            />
          ))}
        </div>

        {data.length > maxLength && (
          <SeeMoreButton showMore={showMore} setShowMore={setShowMore} />
        )}
      </div>
    </section>
  );
};

export default Home;
