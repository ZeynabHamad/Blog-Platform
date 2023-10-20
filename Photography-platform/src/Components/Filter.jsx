/* eslint-disable react/prop-types */
const Filter = ({ location }) => {
  const changeLocation = (e) => {
    location(e.target.value);
  };

  return (
    <select
      className="cursor-pointer shadow-inner md:w-32 md:pl-2 rounded w-44 h-10 pl-4 items-center outline-none bg-font md:mr-0 mx-auto my-4"
      onChange={changeLocation}
    >
      <option value="all">All</option>
      <option value="erbil">Erbil</option>
      <option value="sulaymani">Sulaymani</option>
      <option value="duhok">Duhok</option>
      <option value="kirkuk">Kirkuk</option>
    </select>
  );
};
export default Filter;
