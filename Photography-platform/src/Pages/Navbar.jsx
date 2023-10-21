/* eslint-disable react/prop-types */

import icone from "../Images/Logo.svg";

function Navbar({ setSearch }) {
  return (
    <>
      <div className="navbar-container opacity-95">
        <header className=" body-font font-mono font-bold bg-bg-navbar ">
          <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center text-font">
            <a className="flex title-font font-black items-center text-gray-900 mb-4 md:mb-0">
              <img src={icone} className="w-24 h-24 p-0 " />
              <span className="ml-3 text-3xl cursor-pointer">
                Photographers
              </span>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center cursor-pointer">
              <a href="/" className="mr-5 hover:text-gray-900 cursor">
                Home
              </a>
              <a href="#about" className="mr-5  hover:text-gray-900">
                About As
              </a>
              <a href="#contact" className="mr-5 hover:text-gray-900">
                Contact
              </a>
            </nav>

            <input
              type="text"
              placeholder="Search..."
              className="inline-flex items-center focus:text-bg-navbar border-0 py-1 px-3 focus:outline-none  rounded mt-4 md:mt-0"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </header>
      </div>
    </>
  );
}

export default Navbar;
