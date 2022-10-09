import React from "react";
import Link from "next/link";
import Image from "next/image";
import { images } from "../constants";
import { IoMailOutline } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {FaFacebookF,FaTwitter,FaInstagram} from 'react-icons/fa'

const links = [
  {
    title: "Pages",
    links: [
      { name: "Store", href: "/" },
      { name: "Collections", href: "/" },
      { name: "Support", href: "/" },
    ],
  },
  {
    title: "Product",
    links: [
      { name: "Terms", href: "/" },
      { name: "Privacy", href: "/" },
      { name: "Copyright", href: "/" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#EEEEEE] pt-[80px] pb-[40px]">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-start justify-center">
            <Link href={"/"}>
              <a className="flex items-center justify-center space-x-3">
                <Image src={images.logo} alt="logo" width={100} height={100}/>
                {/* <h3 className="text-[30px] sm:text-[40px] leading-[48px] text-black font-semibold">
                  365+
                </h3> */}
              </a>
            </Link>
            <div className="flex flex-col items-start justify-center mt-7 text-darkgray text-lg">
              <a
                href="mailto:Enquiry@Rhythm.com"
                className="flex items-center justify-center space-x-5 font-regular  mb-5"
              >
                <span>
                  <IoMailOutline fontSize={28} />
                </span>
                <span>Enquiry@Rhythm.com</span>
              </a>
              <div className="flex items-center justify-center space-x-5 font-regular text-lg">
                <span>
                  <HiOutlineLocationMarker fontSize={28} />
                </span>
                <span>San Francisco</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-9 sm:gap-[120px]">
            {links.map((link, i) => (
              <div className="flex flex-col items-start justify-start" key={i}>
                <h3 className="font-semibold text-lg uppercase mb-5">
                  {link.title}
                </h3>
                <ul className="flex flex-col items-start space-y-4">
                  {link.links.map((item, i) => (
                    <li key={i}>
                      <Link href={item.href}>
                        <a className="font-regular text-lg text-darkgray">
                          {item.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-start md:items-center">
            <h3 className="font-semibold text-lg text-black mb-5">Follow us</h3>
            <div className="flex items-center justify-center space-x-[45px]">
              <a href="/!" className="flex items-center justify-center"><FaFacebookF className="text-gray hover:text-black duration-200" fontSize={28}/></a>
              <a href="/!" className="flex items-center justify-center"><FaTwitter className="text-gray hover:text-black duration-200" fontSize={28}/></a>
              <a href="/!" className="flex items-center justify-center"><FaInstagram className="text-gray hover:text-black duration-200" fontSize={28}/></a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-[50px] sm:mt-[80px]">
          <p className="font-regular text-lg text-lightgray">
            © 2022 Copyright.Rhythm
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
