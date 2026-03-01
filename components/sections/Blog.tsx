"use client";

import Slider from "react-slick";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Blog = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    speed: 500,
    centerMode: true,
    centerPadding: "10px",
    focusOnChange: true,
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
        },
      },
    ],
  };

  const settings2 = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    speed: 500,
    centerMode: true,
    centerPadding: "10px",
    focusOnChange: true,
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
        },
      },
    ],
  };

  return (
    <section className="space-y-8 py-16 font-sans bg-white text-black ">
      {/* Blog Section */}
      <div className="flex items-center w-full justify-center flex-col gap-2">
        <h6>Fashion Blog</h6>
        <h1 className="uppercase text-4xl tracking-wider fontRanade">
          Journal
        </h1>
      </div>

      <Slider {...settings2}>
        {["/img/img1.jpg", "/img/img2.jpg", "/img/img3.jpg"].map((item, i) => (
          <div key={item}>
            <div className="w-full h-100 mb-4 relative">
              <Image
                src={item}
                alt={`Blog Post ${item}`}
                fill
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex items-center justify-center flex-col px-8 text-center">
              <h3 className=" text-xs uppercase text-gray-500">
                September 12, 2026
              </h3>
              <h1 className="text-neutral-800 uppercase text-xl my-2">
                How to Dress for the Office?
              </h1>
              <p className="text-neutral-600 line-clamp-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus optio sequi et velit culpa soluta ut numquam?
                Exercitationem nam et, pariatur, animi similique quo minima illo
                accusantium accusamus, sint fugit.
              </p>
              <button
                type="button"
                className="group mt-4"
              >
                Read More
                <p className="border scale-x-0 group-hover:scale-x-100 transition-all duration-500 origin-left"></p>
              </button>
            </div>
          </div>
        ))}
      </Slider>

      {/* Testimonials */}
      <div className="w-full h-[70vh] bg-neutral-100 place-content-center mb-16">
        <Slider {...settings}>
          {[1, 2, 3].map((src, i) => (
            <div
              key={i}
              className="relative w-full h-full flex items-center justify-center gap-12 flex-col"
            >
              <div className="w-full flex items-center justify-center">
                <div className=" w-28 h-28 relative">
                  <Image
                    src={"/img/logo1.png"}
                    className="object-cover w-full h-full"
                    alt="Logo Image"
                    width={100}
                    height={50}
                  />
                </div>
              </div>

              <p className="text-lg mb-8 text-center text-neutral-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </p>
            </div>
          ))}
        </Slider>
      </div>

      {/* Social */}
      <div className="flex items-center justify-center flex-col space-y-8">
        <div className="flex items-center w-full justify-center flex-col gap-2">
          <h6>Join us</h6>
          <h1 className="uppercase text-4xl tracking-wider fontRanade">
            @Ahavayoffihome
          </h1>
        </div>
        <div className="w-full h-[70vh] max-sm:h-[45vh]">
          <Marquee pauseOnHover pauseOnClick speed={100}>
            <div className="flex h-full items-center w-full">
              {[
                "/img/img1.jpg",
                "/img/img2.jpg",
                "/img/img3.jpg",
                "/img/img4.jpg",
                "/img/img5.jpg",
              ].map((src, idx) => (
                <div
                  key={src}
                  className="mr-2 relative min-w-100 h-100 shrink-0 flex items-center justify-center "
                >
                  <Image
                    src={src}
                    alt={`Logo ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
        <button
          type="button"
          className="group"
        >
          Follow Us
          <p className="border scale-x-0 group-hover:scale-x-100 transition-all duration-500 origin-left"></p>
        </button>
      </div>
    </section>
  );
};

export default Blog;
