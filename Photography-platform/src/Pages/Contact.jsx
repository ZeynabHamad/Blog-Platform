/* eslint-disable react/no-unescaped-entities */
import logo from "../Images/Logo3.svg";

const Contact = () => {
  return (
    <div className="w-full mx-auto pl-24 md:py-36 py-64 font-mono w-11/12 mb-10 text-bg-navbar">
      <h1 className=" text-4xl font-black mb-4 ">SEND US YOUR REQUEST!</h1>
      <p className=" font-medium mb-9">
        Do you have a question, concern, idea, feedback, or problem? We'd be
        happy to help!
      </p>

      <div className="flex flex-wrap">
        <form className="pl-0 mb-4 w-5/12">
          <div className="mb-6">
            <label
              className=" flex flex-col font-normal text-xl leading-8 mb-3"
              htmlFor="full_name"
            >
              Full Name:
              <input
                className="h-10 shadow appearance-none border rounded-xl w-full py-2 px-3 text-textbox-gray pl-8"
                id="full_name"
                type="text"
                placeholder="Enter your full name here..."
              />
            </label>
          </div>
          <div className="mb-6">
            <label
              className="flex flex-col font-normal text-xl leading-8 mb-3"
              htmlFor="email"
            >
              Email:
              <input
                className="h-10 shadow appearance-none border rounded-xl w-full py-2 px-3 text-textbox-gray pl-8"
                id="email"
                type="email"
                placeholder="Enter your email address here..."
              />
            </label>
          </div>
          <div className="mb-6">
            <label
              className="flex flex-col font-normal text-xl leading-8 mb-3"
              htmlFor="details"
            >
              Details:
              <textarea
                className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-textbox-gray pl-8"
                id="details"
                rows="6"
                placeholder="Enter your details here..."
              />
            </label>
          </div>
          <div className="flex items-center">
            <a href="#" className="mx-auto">
              <span className="inline-flex bg-bg-navbar text-font hover:scale-110 duration-200 hover:shadow-inner border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Submit
              </span>
            </a>
          </div>
        </form>
        <div className="flex justify-center items-center w-6/12">
          <div className="flex flex-col justify-center bg-light-blue rounded-3xl w-3/5 h-72 pl-10">
            <img src={logo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
