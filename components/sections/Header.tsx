"use client";
import React from "react";
import Image from "next/image";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import HeaderBlur from "../common/HeaderBlur";

export const navbar = [
  { label: "Clothing", href: "/" },
  { label: "Hats", href: "/" },
  { label: "Sale", href: "/" },
];

const Header = () => {

  return (
    <div className="relative">
      <HeaderBlur blurStrength={12} zIndex={20} />
      <div
        className={`w-full  top-0 fixed left-0 h-[10vh] flex items-center justify-evenly px-5 py-5 text-sm z-40 transition-all duration-200 `}
      >

        <nav className="flex items-center px-2 py-0.5 w-full justify-between max-w-7xl mx-auto">
          <div className="w-8 relative h-8">
            <Image
              src={"/Logo1.png"}
              alt="Logo"
              fill
              className={`w-full h-full object-cover `}
            />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4 text-2xl text-white">
              <div>
                <CiSearch />
              </div>
              <div>
                <CiUser />
              </div>
              <div className="relative">
                <CiShoppingCart />
                <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  0
                </div>
              </div>
            </div>

            <button
              type="button"
              className="w-fit h-10 bg-transparent border border-white text-white magnet hover:scale-95 transition-all ease-in-out duration-300 hover:bg-primary  hover:text-white flex px-4 items-center gap-2  justify-between hover:border-primary/50"
            >
              Menu
              <HiOutlineMenuAlt4 />
            </button>
          </div>
        </nav>
      </div>
    </div>

  );
};
export default Header;
