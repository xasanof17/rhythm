import Image from "next/image";
import React from "react";
import { images } from "../constants";

const logos = [
    {img: images.logo1},
    {img: images.logo2},
    {img: images.logo3},
    {img: images.logo4},
    {img: images.logo5},
    {img: images.logo6},
    {img: images.logo7},
    {img: images.logo8},
];

const Brands = () => {
  return (
    <section className="mb-[100px] sm:mb-[200px]">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-semibold text-[22px] xs:text-[27px] sm:text-[34px] md:text-[44px] leading-10 mb-[95px]">
            Featuring the Best <span className="text-brown">Brands</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-full gap-12 sm:gap-x-[170px] sm:gap-y-[80px]">
            {logos.map((logo, i)=>(
                <div className="flex items-center justify-center " key={i}>
                    <Image src={logo.img} alt='brand'/>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
