"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CiShoppingCart } from "react-icons/ci";
import { BsSkipBackward } from "react-icons/bs";
import { useGSAP } from "@gsap/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BiChevronLeft } from "react-icons/bi";

const overlayVariants = {
  initial: { y: "100%", opacity: "100%" },
  hover: { y: "0%", opacity: "100%" },
};

const Products = () => {
  const wrapperRef = useRef(null)
  const text = useRef(null);
  const text2 = useRef(null);

  useGSAP(() => {
    gsap.set(".line", { scaleX: 0, transformOrigin: "left center" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: text.current,
        start: "top bottom-=300px",
        end: "bottom top+=200px",
        toggleActions: "play none none reverse",

      },
    });

    tl.to(text2.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
    })
      .to(text.current, {
        color: "var(--primary)",
        scale: 1.2,
        xPercent: -20,
        ease: "power1.inOut",
        duration: 0.4,
      }, "-=0.1")
      .to(".line", {
        opacity: 1,
        color: "var(--primary)",
        scaleX: 1,
        duration: 0.8,

      })
  });

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top bottom-=300px",
        end: "bottom top+=200px",
        toggleActions: "play none none reverse",

      },
    });

    tl.fromTo(
      ".background",
      { backgroundColor: "#fff", color: "#000" },
      { backgroundColor: "#000", color: "#fff", duration: 0.5, ease: "sine.inOut" },
    );
  });

  return (
    <section className="w-screen min-h-dvh overflow-hidden py-16 space-y-8 text-black bg-white relative background">
      {/* Heading */}
      <div className="px-7.5 flex items-center justify-center">
        <div className="lg:text-[2.5vw] max-sm:text-[5vw] fontRanade tracking-tighter uppercase Chillax space-x-2 flex">
          <span ref={text2}>Our</span>
          <div ref={text} className="relative">
            BestSellers
            <p className="border line"></p>
          </div>
        </div>
      </div>

      {/* Marquee1 - Our BestSeller  */}
      <Swiper
        spaceBetween={20}
        navigation={{ nextEl: ".button-next", prevEl: ".button-prev" }}
        pagination={{
          el: '.swiper-pagination',
          type: 'progressbar',
        }}
        slidesPerView={3}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 24 },
          690: { slidesPerView: 2, spaceBetween: 10 },
          1200: { slidesPerView: 4, spaceBetween: 20 },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-[90%] m-auto flex overflow-visible scale-[0.95]"
        style={
          {
            '--swiper-pagination-color': '#e3b44f',
            '--swiper-pagination-progressbar-bg-color': 'rgba(255, 255, 255, 0)',
          } as CSSProperties
        }
      >


        {[1, 2, 3, 4, 5, 6, 7].map((idx) => (
          <SwiperSlide key={idx} >
            <motion.div
              initial="initial"
              animate="initial"
              whileHover="hover"

              className="relative max-w-72 h-96 overflow-hidden cursor-pointer max-sm:ml-14 max-sm:mt-6"
            >
              <Image
                src={"/Img/img1.png"}
                alt="/"
                fill
                className="object-cover w-full h-full "
              />

              <motion.div
                variants={overlayVariants}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-73 h-[25vh] grid grid-cols-3 bg-white absolute bottom-0 left-1/2 transform -translate-x-1/2 p-4"
              >
                <div className=" col-span-2 space-y-2">
                  <div className="text-2xl fontRanade text-primary">Ase Oke</div>
                  <div className="text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>
                <div className="flex items-end justify-end text-primary">N200,000</div>
              </motion.div>



            </motion.div>
          </SwiperSlide>
        ))}

        <div className="swiper-pagination mt-0"></div>

        <div className="absolute left-10 top-1/2 transform -translate-y-1/2 z-50">
          <BiChevronLeft className="text-black text-4xl bg-white rounded-full p-2  button-prev" />
        </div>
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 z-50">
          <BiChevronLeft className="text-black text-4xl rotate-180 rounded-full p-2 bg-white button-next" />
        </div>

      </Swiper>

      {/* Image Grid */}
      < div className="w-full h-[120vh] grid grid-cols-2 pt-16 max-sm:grid-rows-2 max-sm:grid-cols-1 lg:px-16 " >
        <div className=" w-full h-full relative md:rounded-2xl overflow-hidden scale-[0.95] max-sm:scale-[1] group">
          {" "}
          <Image
            src={"/img/img1.jpg"}
            alt="/"
            fill
            className="object-cover object-top w-full h-full"
          />
          <div className="fontRanade uppercase absolute bottom-10 transform translate-x-1/2 text-white z-30 w-fit text-center">
            {" "}
            <h1 className="text-3xl">Yoffi Collection</h1>
            <button className="cursor-pointer hover:scale-110 transition-all duration-300 text-sm group hover:text-primary">
              Shop the Collection
              <p className="border scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left"></p>
            </button>
          </div>
          <div className="absolute w-full h-full inset-0  group-hover:bg-black/80 z-10 transition-all duration-500"></div>
        </div>
        <div className=" w-full h-full relative md:rounded-2xl overflow-hidden scale-[0.95] max-sm:scale-[1] group">
          {" "}
          <Image
            src={"/img/img4.jpg"}
            alt="/"
            fill
            className="object-cover object-top w-full h-full"
          />
          <div className="fontRanade uppercase absolute bottom-10 transform translate-x-1/2 max-sm:left-0 text-white z-30 w-fit text-center">
            {" "}
            <h1 className="text-3xl">Yoffi Collection</h1>
            <button className="cursor-pointer hover:scale-110 transition-all duration-300 text-sm group hover:text-primary">
              Shop the Collection
              <p className="border scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left"></p>
            </button>
          </div>
          <div className="absolute w-full h-full inset-0  group-hover:bg-black/80 z-10 transition-all duration-500"></div>
        </div>
      </div>

      {/* Fascinator Section */}
      <div className="flex flex-col items-center justify-center gap-8 w-full mb-16 py-4" ref={wrapperRef}>
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
          className="w-[90%] m-auto flex h-full"
        >
          {[1, 2, 3, 4].map((idx) => (
            <SwiperSlide key={idx} >
              <div className="place-items-center group rounded-3xl border border-neutral-300 p-4 hover:scale-[1] scale-[0.9] transition-all duration-300 cursor-pointer hover:border-primary hover:bg-primary">
                <div className="relative w-52 h-52">
                  <Image
                    src={"/img/img9.PNG"}
                    alt="Product"
                    fill
                    className="w-full object-cover h-full"
                  />
                </div>
                <h1 className="font-sans text-lg mt-2">Product Name</h1>
                <div className="text-center font-sans ">
                  <span className="text-sm scale-1 hover:scale-[1.2] transition-all duration-300 cursor-pointer hover:text-primary">View in Shop</span>
                  <p className="border scale-x-0 group-hover:scale-x-100 transition-all duration-500 origin-left"></p>
                </div>
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
          className="w-full h-auto filter grayscale-100 max-sm:hidden overflow-hidden"
        ></video>

        <video
          src="/videos/vid1.mp4"
          autoPlay
          loop
          muted
          className="w-full h-auto filter grayscale-100 md:hidden overflow-hidden"
        ></video>

        <div className="absolute w-full h-fit bottom-0 right-0 flex items-end justify-end py-12 overflow-x-hidden max-sm:overflow-x-scroll">
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
    </section >
  );
};

export default Products;
