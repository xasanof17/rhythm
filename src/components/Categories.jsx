import Image from "next/image";
import React from "react";
import { images } from "../constants";

const cards = [
  { img: images.designBg, title: "iT", href: "/" },
  { img: images.itBg, title: "SMM", href: "/" },
  { img: images.smmBg, title: "Design", href: "/" },
  { img: images.netfoto, title: "Collections", href: "/" },
];

const Categories = () => {
  return (
    <section className="mb-[100px] sm:mb-[220px]">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-semibold text-[20px] xs:text-[25px] sm:text-[34px] md:text-[44px] leading-10 mb-[80px]">
            Choose based on <span className="text-brown">Categories</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[70px] w-full">
            {cards.map((card, i) => (
              <div className="relative flex items-center justify-center md:block" key={i}>
                {/* <div className="w-full h-full "> */}
                  <Image src={card.img} alt="img" className="rounded-[20px] "/>
                {/* </div> */}
                <p className="font-semibold text-lg text-white absolute bottom-5 left-[40%] md:left-[26%]">
                  {card.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
