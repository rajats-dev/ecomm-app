import React from "react";

const Banner = () => {
  const data = [
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
  ];

  return (
    <div className="w-full h-auto">
      <div>
        <div>
          <img src={data[0]} className="#" loading="priority" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
