import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { images } from "../constants";
import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";

const links = [
  { name: "Store", href: "/" },
  { name: "Collections", href: "/" },
  { name: "Support", href: "/" },
];

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <nav className="bg-white sm:bg-transparent w-full py-5 sm:pt-12 z-20">
      <div className="container">
        <div className="flex items-center justify-between sm:justify-start space-x-[135px] sm:flex-wrap">
          <div className="flex items-center">
            <Link href={"/"}>
              <a className="flex items-center justify-center space-x-3">
                <Image src={images.logo} alt="logo" className="" width={100} height={100}/>
                {/* <h3 className="text-lg text-black font-semibold">365+</h3> */}
              </a>
            </Link>
          </div>
          <ul className="hidden sm:flex items-center justify-center space-x-9">
            {links.map((link, i) => (
              <li key={i}>
                <Link href={link.href}>
                  <a className="text-md text-gray font-medium">{link.name}</a>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex sm:hidden items-center justify-center">
            <button
              onClick={() => setActive((prev) => !prev)}
              className="flex items-center justify-center"
            >
              <AiOutlineMenu className="text-black text-[30px]" />
            </button>
            {active && (
              <div className="fixed top-0 left-0 w-full min-h-full bg-white z-50 flex flex-col items-center justify-center">
                <button
                  onClick={() => setActive((prev) => !prev)}
                  className="absolute top-5 right-5 flex items-center justify-center"
                >
                  <MdClose className="text-black text-[30px]" />
                </button>
                <ul className="flex flex-col items-center justify-center space-y-4">
                  {links.map((link, i) => (
                    <li key={i}>
                      <Link href={link.href}>
                        <a className="text-lg text-gray font-medium">
                          {link.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
