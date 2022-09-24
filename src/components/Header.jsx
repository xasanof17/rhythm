import Image from "next/image";
import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { images } from "../constants";

const Header = () => {
  return (
    <section className="my-[100px] lg:my-[150px] sm:relative">
      <div className="container">
        <div className="flex flex-col justify-center items-start">
          <h1 className="font-semibold text-[35px] xs:text-[40px] sm:text-[56px] leading-[67px] text-black max-w-xl w-full mb-4">
            Browse top quality <span className="text-brown">Guitars</span>{" "}
            online
          </h1>
          <p className="font-medium text-md text-gray max-w-md w-full mb-8">
            Explore 50k+ latest collections of branded guitars online with
            Rhythm.
          </p>
          <div className="flex items-center justify-center space-x-8">
            <button className="py-5 px-12 bg-brown rounded-[40px] text-white text-lg font-semibold">
              Get the App
            </button>
            <button className="flex items-center justify-center">
              <FaGooglePlay className="text-gray text-[30px]" />
            </button>
            <button className="flex items-center justify-center">
              <FaApple className="text-gray text-[30px]" />
            </button>
          </div>
        </div>
        <div className="absolute top-[-100%] right-0 hidden sm:block z-[-1]">
          <Image src={images.guitar} alt="guitar" className="imgborder" />
        </div>
      </div>
    </section>
  );
};

export default Header;
