/* eslint-disable react/no-unescaped-entities */
function Contact() {
  return (
    <div className="container mx-auto px-4 py-8 font-poppins w-11/12 mt-5 mb-10">
      <h1 className="text-5xl font-normal leading-10 mb-4">
        SEND US YOUR REQUEST!
      </h1>
      <p className="text-2xl font-medium leading-9 text-contact-us-gray mb-9">
        Do you have a question, concern, idea, feedback, or problem? We'd be
        happy to help!
      </p>

      <div className="flex flex-wrap">
        <form className="pl-0 mb-4 w-6/12">
          <div className="mb-6">
            <label
              className="flex flex-col font-normal text-xl leading-8 mb-3"
              htmlFor="full_name"
            >
              Full Name:
              <input
                className="h-16 shadow appearance-none border rounded-xl w-full py-2 px-3 text-textbox-gray pl-8"
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
                className="h-16 shadow appearance-none border rounded-xl w-full py-2 px-3 text-textbox-gray pl-8"
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
          <div className="flex items-center justify-between">
            <button
              className="h-16 w-56 text-2xl font-normal bg-button-blue text-black py-2 px-4 rounded-md"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="flex justify-center items-center w-6/12">
          <div className="flex flex-col justify-center bg-light-blue rounded-3xl w-3/5 h-72 pl-10">
            <h1 className="text-2xl font-normal leading-9 mb-2">Find Us At:</h1>
            <p className="text-contact-us-gray font-light leading-9 text-2xl">
              Nergiz Plaza
            </p>
            <p className="text-contact-us-gray font-light leading-9 text-2xl">
              3rd Floor
            </p>
            <p className="text-contact-us-gray font-light leading-9 text-2xl">
              Bakhtiyari Street 40m
            </p>
            <p className="text-contact-us-gray font-light leading-9 text-2xl">
              Erbil, Iraq
            </p>
            <p className="text-contact-us-gray font-light leading-9 text-2xl">
              44001
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
