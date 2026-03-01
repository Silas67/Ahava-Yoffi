"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Intro = () => {
  const overlayRef = useRef(null);
  const blueRef = useRef(null);
  const maskRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({});

    tl.fromTo(
      blueRef.current,
      {
        scale: 0.1,
      },
      { scale: 100, duration: 2, ease: "power4.inOut" },
    );

    tl.fromTo(
      maskRef.current,
      {
        scale: 0,
      },
      { scale: 100, duration: 2, ease: "power4.inOut" },
      "-=1.0",
    );
  });
  return (
    <div
      ref={overlayRef}
      className="absolute inset-0 pointer-events-none bg-transparent h-screen w-full flex items-center justify-center "
    >
      <div
        className="absolute bg-amber-300 w-16 h-16 scale-[0.1] -skew-6 transform"
        ref={blueRef}
      />
      <div
        className="absolute bg-white origin-center overflow-hidden scale-[0.1] w-16 h-16 -skew-6"
        ref={maskRef}
      ></div>
    </div>
  );
};

export default Intro;
