"use client";
import React from "react";
import Image from "next/image";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const heroRef = React.useRef(null);
  const stickyLayerRef = React.useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: stickyLayerRef.current,
        pinSpacing: false,
      },
      defaults: {
        ease: "power4.inOut",
      }
    })

    tl.to(".heading", {
      scale: 1
    })



  });

  useGSAP(() => {
    gsap.fromTo(
      heroRef.current,
      {
        borderRadius: "0 0 0% 0% / 0 0 0px 0px"
      },
      {
        borderRadius: "0 0 50% 50% / 0 0 110px 110px",
        duration: 1.5,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top+=400px",
          scrub: true,

        }
      }
    )
  })


  return (
    <div
      ref={heroRef}
      className="relative w-screen h-[150vh] max-sm:h-[120vh] overflow-hidden text-white"
      style={{
        borderBottomLeftRadius: "50% 100px",
        borderBottomRightRadius: "50% 120px",
      }}
    >
      {/* Image */}
      <div className="w-full h-full absolute inset-0">
        <Image
          src={"/img/Hero2.jpg"}
          alt="Hero Image"
          fill
          className="w-full h-full object-cover brightness-75"
        />
      </div>

      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl max-sm:text-4xl tracking-wide uppercase font-serif heading">

      </h1>

      <div
        ref={stickyLayerRef}
        className="w-full sticky top-0 h-screen"
      >

        <h1 className="absolute top-1/2 left-50 max-sm:left-10 text-lg tracking-wide uppercase font-sans cursor-pointer ">
          Less Noise.
        </h1>

        <h1 className="absolute top-1/2 right-50 max-sm:right-10 text-lg tracking-wide uppercase font-sans cursor-pointer">
          More Power.
        </h1>

        <div className="absolute bottom-26 left-1/2 translate-x-[-50%] text-2xl tracking-wide uppercase text-center ">
          Made to be{" "}
          <span className="bg-white  px-2 font-black italic py-1 max-sm:px-4 max-sm:py-2 max-sm:text-4xl max-sm:leading-18 mix-blend-overlay overflow-hidden  text-primary ">
            noticed
          </span>
        </div>

        <button
          type="button"
          className="w-28 h-10 bg-white text-black magnet hover:scale-95 transition-all ease-in-out duration-300 hover:bg-primary  hover:text-white absolute bottom-10 left-1/2 translate-x-[-50%] max-sm:w-40 max-sm:h-12 max-sm:text-lg max-sm:translate-x-[-50%] group px-4"
        >
          Shop Now
          <p className="border scale-x-0 group-hover:scale-x-100 transition-all duration-500 origin-left"></p>
        </button>
      </div>
    </div >
  );
};
