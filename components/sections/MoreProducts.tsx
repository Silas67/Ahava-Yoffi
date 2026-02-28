"use client";
import React from "react";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
import { BsSkipBackward } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const MoreProducts = () => {

  return (
    <section className="w-full h-fit bg-white z-30 relative m-auto text-black">
      {/* Fascinator Section */}
      <div className="flex flex-col items-center justify-center gap-8 w-full mb-16 py-4">
        <h2 className="text-2xl mb-4 Chillax uppercase w-full text-center fontRanade tracking-tighter">
          Curated From the House
        </h2>


        <Swiper
          spaceBetween={20}
          navigation={{ nextEl: ".button-next", prevEl: ".button-prev" }}
          slidesPerView={3}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 24 },
            690: { slidesPerView: 2, spaceBetween: 10 },
            1200: { slidesPerView: 4, spaceBetween: 20 },
          }}
          modules={[Navigation]}
          className="w-[90%] m-auto flex overflow-visible scale-[0.95]"

        >
          {[1, 2, 3, 4].map((idx) => (
            <SwiperSlide key={idx} className="place-items-center group">
              <div className="relative w-52 h-52">
                <Image
                  src={"/img/img7.jpg"}
                  alt="Product"
                  fill
                  className="w-full object-cover h-full"
                />
              </div>
              <div className="text-center mt-8 text-black font-sans ">
                <span>Product Name</span>
                <p className="border scale-x-0 group-hover:scale-x-100 transition-all duration-500 origin-left"></p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Video Products Section */}
      <div className="w-screen h-fit shadow-inner relative">
        <video
          src="/videos/Fashion.mp4"
          autoPlay
          loop
          muted
          className="w-full h-auto filter grayscale-100 max-sm:hidden"
        ></video>

        <video
          src="/videos/vid1.mp4"
          autoPlay
          loop
          muted
          className="w-full h-auto filter grayscale-100 md:hidden"
        ></video>

        <div className="absolute w-full h-fit bottom-0 right-0 flex items-end justify-end py-12 overflow-x-scroll">
          <div className="flex gap-8 w-full max-sm:pl-24 lg:justify-end px-8">
            {[1, 2, 3].map((idx) => (
              <div
                key={idx}
                className="bg-black  text-white w-[20em] shadow p-4 flex items-end justify-between shrink-0 scale-[0.9]"
              >
                <div className="flex items-end gap-4">
                  <div className="relative w-20 h-24 ">
                    <Image
                      src={"/img/img2.jpg"}
                      alt="/"
                      className="object-cover w-full h-full"
                      fill
                    />
                  </div>

                  <div>
                    <h6 className="uppercase font-sans text-primary">
                      AHAVA YOFFI
                    </h6>
                    <h1 className="font-sans text-xs"> Product Name</h1>
                    <h2 className="font-sans text-xs">$200.00</h2>
                  </div>
                </div>


                <div className="grid grid-rows-2 gap-2 ">
                  <div className="p-2 border border-neutral-400 hover:bg-neutral-700 hover:text-white transition-all duration-500">
                    <CiShoppingCart />
                  </div>

                  <div className="p-2 border border-neutral-400  hover:bg-neutral-700 hover:text-white transition-all duration-500">
                    <BsSkipBackward />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


    </section>
  );
};

export default MoreProducts;
