/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import Back from "../Components/Back";
import { data } from "../Components/Data";

const Details = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    let blogg = data.find((blog) => blog.id === parseInt(id));
    if (blogg) {
      setBlog(blogg);
    }
  }, [id]);

  return (
    <section id="details" className="w-full ">
      <Back />
      {blog.id ? (
        <div className="container mx-auto flex px-5 py-10 md:py-0 md:flex-row flex-col items-center font-mono">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {blog.name}
            </h1>
            <p className="mb-8 leading-relaxed">{blog.description}</p>
            <span className="text-bg-navbar text-sm">To Contac: </span>
            <a href={`tel:${blog.phoneNo}`} className="hover:text-bg-footer">
              {blog.phoneNo}
            </a>
            <div className="flex flex-row">
              <span>{blog.insta}</span>
              <a
                href={`https://instagram.com/${blog.insta}?igshid=OGQ5ZDc2ODk2ZA==`}
                target="_blank"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1.5em"
                  width="2em"
                >
                  <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" />
                </svg>
              </a>
            </div>

            <div className="mx-auto">
              <Link to={`/details/${blog.id}/photos`}>
                <span className="inline-flex bg-bg-footer text-font hover:scale-110 duration-200 hover:shadow-inner border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  See My Work
                </span>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={blog.image}
            />
          </div>
        </div>
      ) : (
        <div className="w-full mx-auto flex flex-col text-center my-20 justify-center items-center">
          <span className="text-xl font-semibold">
            There is No Photographer with that ID
          </span>
          <svg
            viewBox="0 0 21 21"
            fill="currentColor"
            height="5em"
            width="5em"
            className="mt-4"
          >
            <g fill="none" fillRule="evenodd" transform="translate(2 2)">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.5 16.5a8 8 0 100-16 8 8 0 000 16z"
              />
              <path
                fill="currentColor"
                d="M7 6 A1 1 0 0 1 6 7 A1 1 0 0 1 5 6 A1 1 0 0 1 7 6 z"
              />
              <path
                fill="currentColor"
                d="M12 6 A1 1 0 0 1 11 7 A1 1 0 0 1 10 6 A1 1 0 0 1 12 6 z"
              />
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.5 11.5c.603-1.333 1.603-2 3-2s2.397.667 3 2"
              />
            </g>
          </svg>
        </div>
      )}
    </section>
  );
};
export default Details;
