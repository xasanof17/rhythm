import Image from "next/image";
import React from "react";
import { images } from "../constants";

const Customers = () => {
  return (
    <section className="sm:mb-[110px] mb-[140px] md:mb-[220px] lg:mb-[270px]">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-semibold text-[22px] xs:text-[27px] sm:text-[34px] md:text-[44px] leading-10 mb-[110px]">
            What our <span className="text-brown">customer’s</span> say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[145px]">
            <div className="relative flex items-center justify-end sm:justify-center md:justify-end">
              <div
                className="absolute top-[15%] right-[18%] xs:right-[25%] sm:right-[45%] md:right-[25%] w-[280px] h-[260px] bg-brown rotate-[-7.72deg]"
                style={{ borderRadius: "40px 0px 400px 400px" }}
              />
              <div className="flex items-center justify-center">
                <Image src={images.ryan} alt="img" className="rounded-full" />
              </div>
            </div>
            <div className="flex flex-col items-start justify-center">
              <p className="font-regular text-lg xs:text-xl text-darkgray mb-7 xs:mb-[56px]">
                “The Quality and Delivery is always on time, being a
                professional guitarist myself I love the customer service the
                brand provides, highly recommend Rhythm anytime.”
              </p>
              <div className="flex items-end justify-between w-full">
                <div className="flex flex-col items-start">
                    <h3 className="font-semibold text-lg mb-2 text-black capitalize">Ryan Wels</h3>
                    <p className="font-medium text-lg text-[#868686]">PROFESSIONAL GUITARIST</p>
                </div>
                <div className="hidden sm:flex items-center justify-center gap-2">
                    <button className="bg-brown mr-2 rotate-[-90deg] w-3 h-6 rounded-[20px]"/>
                    <button className="bg-[#C4C4C4] w-[10px] h-4 rounded-[20px]"/>
                    <button className="bg-[#C4C4C4] w-[10px] h-4 rounded-[20px]"/>
                    <button className="bg-[#C4C4C4] w-[10px] h-4 rounded-[20px]"/>
                    <button className="bg-[#C4C4C4] w-[10px] h-4 rounded-[20px]"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
