import Image from "next/image";
import React from "react";
import { images } from "../constants";

const GetApp = () => {
  return (
    <section className="mb-[80px]">
      <div className="container">
        <div className="flex flex-col-reverse md:grid grid-cols-1 md:grid-cols-2 gap-[30px] lg:gap-[120px]">
          <div className="flex flex-col items-start justify-center">
            <h2 className="font-semibold text-[30px] sm:text-[38px] lg:text-[48px] leading-[140%] mt-5 sm:mt-0 mb-[40px] sm:mb-[70px]">
              Browse and buy your{" "}
              <span className="text-brown">favorite guitars</span> with Rhythm.
            </h2>
            <div className="flex items-center space-x-6">
              <button className="flex items-center justify-center">
                <Image src={images.googlePlay} alt="google play" />
              </button>
              <button className="flex items-center justify-center">
                <Image src={images.appStore} alt="app store" />
              </button>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute top-[15%] sm:top-[23%] right-0 w-full h-[350px] bg-brown rounded-[200%]" />
            <div className="flex items-center justify-center w-full h-full">
              <Image
                src={images.phoneApp}
                alt="img"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetApp;
