/* eslint-disable react/prop-types */
const SeeMoreButton = ({ showMore, setShowMore }) => {
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="w-full flex justify-center items-center rounded-lg bg-red-200 my-10">
      <button
        onClick={toggleShowMore}
        className="items-center hover:scale-110 duration-300"
      >
        <span className="px-5 py-2.5 bg-bg-navbar text-font dark:bg-gray-900 rounded-md ">
          {showMore ? "See Less" : "See More"}
        </span>
      </button>
    </div>
  );
};
export default SeeMoreButton;
