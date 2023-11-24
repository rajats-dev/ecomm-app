import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prevState) => prevState - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prevState) => prevState + 1);
  };

  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="h-[620px] w-screen relative">
        <div
          className="h-full flex duration-700"
          style={{ transform: `translate(-${currentSlide * 100}vw)` }}
        >
          <img
            src={data[0]}
            className="w-screen h-full object-cover"
            loading="priority"
          />
          <img
            src={data[1]}
            className="w-screen h-full object-cover"
            loading="priority"
          />
          <img
            src={data[2]}
            className="w-screen h-full object-cover"
            loading="priority"
          />
          <img
            src={data[3]}
            className="w-screen h-full object-cover"
            loading="priority"
          />
        </div>
        <div className="absolute w-full flex justify-center gap-20 bottom-20 text-4xl">
          <div
            onClick={prevSlide}
            className="hover:cursor-pointer hover:bg-gray-700 active:bg-gray-900 duration-300 rounded-lg hover:text-white"
          >
            <FaArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="hover:cursor-pointer hover:bg-gray-700 active:bg-gray-900 duration-300 rounded-lg hover:text-white"
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
