/* eslint-disable react/jsx-no-undef */

import { Link } from "react-router-dom";

const Back = () => {
  return (
    <Link to="/">
      <button className="w-24 shadow-inner cursor-pointer bg-font md:ml-20 md:mt-40 mt-60 ml-10 rounded border-0 py-2">
        <svg
          viewBox="0 0 512 512"
          fill="currentColor"
          height="1.5em"
          width="2em"
          className="mx-auto"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={48}
            d="M244 400L100 256l144-144M120 256h292"
          />
        </svg>
      </button>
    </Link>
  );
};
export default Back;
