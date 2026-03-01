import React from "react";
import Image from "next/image";

const ProductAd = () => {
  return (
    <section className="w-full h-fit">
      <div className="w-full h-[80vh] overflow-hidden flex">
        {/* Image */}
        <div className=" w-full h-full relative shadow-inner flex-1/2">
          {" "}
          <Image
            src={"/img/Img1.png"}
            alt="/"
            fill
            className="object-cover w-full h-full"
          />
          <div className="font-sans absolute bottom-10 left-10 text-white z-30 w-full space-y-4">
            {" "}
            <p className=" text-sm">Most-loved collections</p>
            <h1 className="text-7xl max-sm:text-5xl fontRanade uppercase leading-22.5 max-sm:leading-tight">
              Cosy & <span className="block">Comfort</span>
            </h1>
            <button className="cursor-pointer transition-all duration-300 text-sm py-4 px-6 bg-white text-black hover:bg-primary hover:text-white hover:scale-[0.95]">
              Discover Now
            </button>
          </div>
          <div className="absolute w-full h-full inset-0 bg-black/20 z-10"></div>
        </div>

        {/* Video */}
        <div className="w-full h-full flex-1/2 max-sm:hidden">
          <video
            src="/videos/vid1.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          ></video>
        </div>
      </div>
    </section>
  );
};

export default ProductAd;
