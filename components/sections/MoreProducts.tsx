"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/navigation";
import { useGSAP } from "@gsap/react";

const MoreProducts = () => {
  const wrapperRef = useRef(null);



  return (
    <section className="w-full h-fit bg-white z-30 relative m-auto text-black" ref={wrapperRef}>

    </section>
  );
};

export default MoreProducts;
