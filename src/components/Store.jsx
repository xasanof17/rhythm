import Image from "next/image";
import Link from "next/link";
import React from "react";
import { images } from "../constants";

const cards = [
  { img: images.guitar1, title: "The Essential Les Paul", price: "$1,299.00" },
  { img: images.guitar2, title: "J-45 Standard", price: "$1,699.00" },
  { img: images.guitar3, title: "Hummingbird Standard", price: "$2,099.00" },
];

const Store = () => {
  return (
    <section className="mb-[100px] sm:mb-[180px]">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-semibold text-[28px] sm:text-[34px] md:text-[44px] leading-10 mb-[90px]">
            Check out the <span className="text-brown">Store</span>
          </h2>
          <div role="onboard" className="flex flex-col w-full mb-[100px]">
            <div className="flex items-center justify-between mb-7 sm:mb-9">
              <h4 className="text-sm sm:text-[20px] leading-8 uppercase text-black font-semibold">
                NEW ON THE BOARD
              </h4>
              <Link href={"/"}>
                <a className="text-lg font-medium text-darkgray">view all</a>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14">
              {cards.map((card, i) => (
                <div
                  className="flex flex-col items-start justify-center"
                  key={i}
                >
                  <div className="flex items-center justify-center w-full mb-[40px]">
                    <Image src={card.img} alt="guitar" />
                  </div>
                  <h3 className="font-medium text-lg text-black">
                    {card.title}
                  </h3>
                  <p className="font-regular text-sm text-darkgray">
                    {card.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div role="topselling" className="flex flex-col w-full mb-[100px]">
            <div className="flex items-center justify-between mb-7 sm:mb-9">
              <h4 className="text-sm sm:text-[20px] leading-8 uppercase text-black font-semibold">
                TOP SELLING
              </h4>
              <Link href={"/"}>
                <a className="text-lg font-medium text-darkgray">view all</a>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14">
              {cards.map((card, i) => (
                <div
                  className="flex flex-col items-start justify-center"
                  key={i}
                >
                  <div className="flex items-center justify-center w-full mb-[40px]">
                    <Image src={card.img} alt="guitar" />
                  </div>
                  <h3 className="font-medium text-lg text-black">
                    {card.title}
                  </h3>
                  <p className="font-regular text-sm text-darkgray">
                    {card.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Store;
