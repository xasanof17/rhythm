import Image from "next/image";
import React from "react";
import { images } from "../constants";

const icons = [
  {
    img: images.categoryicon,
    title: "Smooth Browsing",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: images.deliveryicon,
    title: "EASY Delivery",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: images.paymenticon,
    title: "SwiFT PAYMENTS",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Why = () => {
  return (
    <section className="py-[75px] sm:py-[95px] mb-[100px] md:mb-[200px] lg:mb-[240px] text-white bg-black">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-semibold text-[22px] xs:text-[27px] sm:text-[34px] md:text-[44px] leading-10 mb-[75px]">
            Why try <span className="text-brown">Rhythm?</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[100px] lg:gap-[220px]">
            {icons.map((icon, i) => (
              <div
                className="flex flex-col items-center justify-center"
                key={i}
              >
                <div className="flex items-center justify-center mb-[40px] w-full">
                  <div className="bg-lightblack p-5 rounded-[20px] flex items-center justify-center">
                    <Image src={icon.img} alt="icon" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-3 uppercase">{icon.title}</h3>
                <p className="font-regular text-sm text-center text-darkgray">{icon.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
