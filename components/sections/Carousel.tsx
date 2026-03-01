"use client";
import React from "react";
import Slider from "react-slick";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const Carousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    focusOnSelect: false,
    dots: true,
    speed: 500,
    centerMode: true,
    centerPadding: "150px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px",
        },
      },
    ],
  };
  return (
    <section className="space-y-8 border-b border-gray-200 bg-white py-16">
      <div className="flex items-center flex-col justify-center text-neutral-700">
        <h6>Tik Tok</h6>
        <h1 className="uppercase text-4xl tracking-wider fontRanade text-neutral-800">
          Inspiration
        </h1>
      </div>

      <div className="w-full mx-auto">
        <Slider {...settings}>
          {[
            "/img/img1.jpg",
            "/img/img2.jpg",
            "/img/img3.jpg",
            "/img/img2.jpg",
            "/img/img2.jpg",
            "/img/img2.jpg",
          ].map((src, i) => (
            <div key={i} className="relative lg:max-w-96 h-100">
              <Image
                src={src}
                alt=""
                width={100}
                height={100}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="mt-28 mb-16 w-full h-[20vh] flex flex-col items-center justify-center">
        <Marquee pauseOnHover pauseOnClick speed={100}>
          <div className="flex gap-6 h-full items-center w-full">
            {[
              "/img/logo1.png",
              "/img/logo2.png",
              "/img/logo3.png",
              "/img/logo4.png",
              "/img/logo5.png",
            ].map((src, idx) => (
              <div
                key={src}
                className="mr-8 relative min-w-48 h-fit shrink-0 flex items-center justify-center "
              >
                <Image
                  src={src}
                  alt={`Logo ${idx + 1}`}
                  width={100}
                  height={50}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Carousel;
