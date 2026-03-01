"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { BsChevronDown } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

const LEFT_IMAGES = [
  "/img/img1.jpg",
  "/img/img2.jpg",
  "/img/img3.jpg",
  "/img/img2.jpg",
  "/img/img1.jpg",
];

const RIGHT_IMAGES = [
  "/img/img1.jpg",
  "/img/img1.jpg",
  "/img/img1.jpg",
  "/img/img1.jpg",
  "/img/img1.jpg",
];

const SCROLL_TRIGGER_CONFIG = {
  start: "top top",
  end: "bottom top",
  scrub: 1,
  pin: true,
} as const;

interface ImageColumnProps {
  images: string[];
  columnRef: React.RefObject<HTMLDivElement>;
  className?: string;
}

const ImageColumn = ({ images, columnRef, className }: ImageColumnProps) => (
  <div className="w-1/2 flex flex-col items-center justify-center">
    <div ref={columnRef} className={`space-y-10 ${className ?? ""}`}>
      {images.map((src, idx) => (
        <Image
          key={idx}
          src={src}
          alt=""
          width={100}
          height={100}
          className="polaroid"
        />
      ))}
    </div>
  </div>
);

const Poster = () => {
  const wrapperRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const trigger = {
      trigger: wrapperRef.current,
      ...SCROLL_TRIGGER_CONFIG,
    };

    const tl = gsap.timeline({ scrollTrigger: trigger });

    tl.to(leftRef.current, { yPercent: 300, ease: "none" }, 0).to(
      rightRef.current,
      { yPercent: -300, ease: "none" },
      0
    );
  }, { scope: wrapperRef });

  return (
    <section
      ref={wrapperRef}
      className="overflow-hidden text-white bg-black h-screen flex items-start justify-center"
    >
      <ImageColumn images={LEFT_IMAGES} columnRef={leftRef} />

      <div className="w-full flex flex-col items-center font-sans gap-4 text-center justify-center py-36">
        <h6 className="text-primary GeneralSans">Discover the best deal</h6>
        <h1 className="text-[6vw] uppercase fontRanade font-light leading-20 tracking-tighter max-sm:leading-tight">
          Sale up to{" "}
          <span className="fontMelo font-bold text-red-500 font-serif text-[7vw]">
            50%
          </span>{" "}
          <span className="block">For All</span> Collections
        </h1>

        <div className="flex flex-col items-center justify-center cursor-pointer">
          <button className="py-4 px-6 bg-white font-sans text-black hover:bg-primary hover:text-white hover:scale-[0.95] transition-all duration-500 text-sm">
            Check Now
          </button>
          <BsChevronDown className="text-4xl animate-bounce mt-2" />
        </div>
      </div>

      <ImageColumn images={RIGHT_IMAGES} columnRef={rightRef} />
    </section>
  );
};

export default Poster;