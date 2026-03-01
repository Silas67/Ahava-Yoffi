"use client";
import React from "react";

export default function HeaderBlur({
    height = "120px",
    blurStrength = 20,
    zIndex = 50,
}) {
    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height,
                pointerEvents: "none",
                zIndex,
                backdropFilter: `blur(${blurStrength}px)`,
                WebkitBackdropFilter: `blur(${blurStrength}px)`,
                maskImage: `
          linear-gradient(
            to bottom,
            black 0%,
            rgba(0,0,0,0.8) 40%,
            rgba(0,0,0,0.4) 70%,
            transparent 100%
          )
        `,
                WebkitMaskImage: `
          linear-gradient(
            to bottom,
            black 0%,
            rgba(0,0,0,0.8) 40%,
            rgba(0,0,0,0.4) 70%,
            transparent 100%
          )
        `,
            }}
        />
    );
}