"use client";
import Blog from "@/components/sections/Blog";
import Carousel from "@/components/sections/Carousel";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Newsletter from "@/components/sections/Newsletter";
import Poster from "@/components/sections/Poster";
import ProductAd from "@/components/sections/ProductAd";
import Products from "@/components/sections/Products";
import { motion } from "framer-motion";
import useLenis from "@/components/common/useLenis";
import { useState, useEffect } from "react";

export default function Home() {
  useLenis();
  const [isIntroVisible, setIsIntroVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsIntroVisible(false);
    }, 0); // Animation duration
    return () => clearTimeout(timer);
  }, [isIntroVisible]);

  return (
    <motion.main
      initial={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "anticipate" }}
      className={`lg:w-full sm:w-screen overflow-hidden grid relative`}
    >
      <div className="lg:w-full sm:w-svw overflow-hidden relative ">
        <header>
          <Header />
        </header>
        <main>
          <Hero />
          <Products />
          <Poster />
          <ProductAd />
          <Carousel />
          <Blog />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </motion.main>
  );
}
