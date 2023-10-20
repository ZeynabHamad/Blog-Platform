import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { data } from "../Components/Data";

import Back from "../Components/Back";
import user1 from "../Images/1.png";
import user2 from "../Images/2.png";
import user3 from "../Images/3.png";
import user4 from "../Images/4.png";
import user5 from "../Images/5.png";
import user6 from "../Images/6.png";

const Photos = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    let blogg = data.find((blog) => blog.id === parseInt(id));
    if (blogg) {
      setBlog(blogg);
    }
  }, [id]);

  return (
    <section className="text-gray-600 body-font">
      <Back />
      {blog.id ? (
        <div className="container px-5 py-0 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              {blog.name}
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Location: {blog.location}
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className=" inset-0 w-full h-full object-cover object-center"
                  src={user1}
                />
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className=" inset-0 w-full h-full object-cover object-center"
                  src={user2}
                />
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className=" inset-0 w-full h-full object-cover object-center"
                  src={user3}
                />
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className=" inset-0 w-full h-full object-cover object-center"
                  src={user4}
                />
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className=" inset-0 w-full h-full object-cover object-center"
                  src={user5}
                />
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className=" inset-0 w-full h-full object-cover object-center"
                  src={user6}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};
export default Photos;

// <section class="text-gray-600 body-font">
//   <div class="container px-5 py-24 mx-auto">
//     <div class="flex flex-col text-center w-full mb-20">
//       <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
//       <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
//     </div>
//     <div class="flex flex-wrap -m-4">
//       <div class="lg:w-1/3 sm:w-1/2 p-4">
//         <div class="flex relative">
//           <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360">
//           <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
//             <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
//             <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
//             <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
//           </div>
//         </div>
//       </div>
//       <div class="lg:w-1/3 sm:w-1/2 p-4">
//         <div class="flex relative">
//           <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/601x361">
//           <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
//             <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
//             <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
//             <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
//           </div>
//         </div>
//       </div>
//       <div class="lg:w-1/3 sm:w-1/2 p-4">
//         <div class="flex relative">
//           <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/603x363">
//           <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
//             <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
//             <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
//             <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
//           </div>
//         </div>
//       </div>
//       <div class="lg:w-1/3 sm:w-1/2 p-4">
//         <div class="flex relative">
//           <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/602x362">
//           <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
//             <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
//             <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
//             <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
//           </div>
//         </div>
//       </div>
//       <div class="lg:w-1/3 sm:w-1/2 p-4">
//         <div class="flex relative">
//           <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/605x365">
//           <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
//             <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
//             <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
//             <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
//           </div>
//         </div>
//       </div>
//       <div class="lg:w-1/3 sm:w-1/2 p-4">
//         <div class="flex relative">
//           <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/606x366">
//           <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
//             <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
//             <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
//             <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
