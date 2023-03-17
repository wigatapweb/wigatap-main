
const Intro = () => {
  return (
    <div>
      <section>
        {/* <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="svg absolute hidden lg:block h-[560px] w-full -z-10 overflow-hidden"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="hsl(217, 102%, 99%)" offset="0%"></stop>
              <stop stopColor="hsl(217,88%, 93%)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient-0)"
            d="M 0.351 264.418 C 0.351 264.418 33.396 268.165 47.112 270.128 C 265.033 301.319 477.487 325.608 614.827 237.124 C 713.575 173.504 692.613 144.116 805.776 87.876 C 942.649 19.853 1317.845 20.149 1440.003 23.965 C 1466.069 24.779 1440.135 24.024 1440.135 24.024 L 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L 0.351 264.418 Z"
          ></path>
        </svg> */}

        <div className="pt-4 lg:mt-8 lg:mb-12 md:px-12 text-gray-800 text-center lg:text-left">
          <div className="container mx-auto xl:px-32">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div className="lg:mt-0">
                <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight mb-2">We aim to empower students in communities with limited resources</h1>
              </div>
              <div className="mb-12 lg:mb-0">
                <img
                  src="/donation-2.jpg"
                  className="w-full rounded-lg shadow-lg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Intro

// import React, { useState } from "react";

// const images = [
//   {
//     src: "donation-1.jpg",
//     caption: "Caption Text",
//   },
//   {
//     src: "donation-2.jpg",
//     caption: "Caption Two",
//   },
//   {
//     src: "donation-4.jpg",
//     caption: "Caption Three",
//   },
// ];

// const Slideshow = () => {
//   const [currentSlide, setCurrentSlide] = useState(1);

//   const nextSlide = () => {
//     setCurrentSlide((currentSlide + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide(
//       currentSlide === 1 ? images.length : currentSlide - 1
//     );
//   };

//   const setSlide = (n: React.SetStateAction<number>) => {
//     setCurrentSlide(n);
//   };

//   return (
//     <div className="max-w-3xl mx-auto">
//       <div className="relative">
//         {images.map((image, i) => (
//           <div
//             key={i}
//             className={`${
//               currentSlide === i + 1 ? "block" : "hidden"
//             } absolute w-full`}
//           >
//             <div className="absolute inset-0 flex items-center justify-center">
//               <img src={image.src} alt={`Slide ${i + 1}`} />
//             </div>
//             <div className="absolute inset-x-0 bottom-0">
//               <div className="flex justify-center">
//                 {images.map((_, j) => (
//                   <button
//                     key={j}
//                     onClick={() => setSlide(j + 1)}
//                     className={`${
//                       currentSlide === j + 1 ? "active" : ""
//                     } w-3 h-3 mx-2 rounded-full bg-gray-400 focus:outline-none`}
//                   ></button>
//                 ))}
//               </div>
//               <div className="px-4 py-2 bg-black bg-opacity-50 text-white text-center">
//                 {image.caption}
//               </div>
//             </div>
//           </div>
//         ))}
//         <button
//           onClick={prevSlide}
//           className="absolute top-1/2 left-0 -ml-6 text-white font-bold text-xl focus:outline-none"
//         >
//           &#10094;
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute top-1/2 right-0 -mr-6 text-white font-bold text-xl focus:outline-none"
//         >
//           &#10095;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Slideshow;
