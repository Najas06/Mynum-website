"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { RiMenu3Line } from "react-icons/ri";

export default function Header() {
  const [toggle, setToggle] = useState<boolean>(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <nav className="px-6 py-4 flex justify-between items-center border-b border-neutral-800 max-sm:px-2 fixed top-0 w-full bg-neutral-900/50  backdrop-blur max-w-screen-2xl z-50">
        <Image
          src={"/logo.png"}
          width={50}
          height={50}
          alt={"logo"}
          className="w-10 h-10"
        />
        <ul className="flex gap-x-4 max-sm:hidden">
          {links.map((link, index) => (
            <li
              key={index}
              className="cursor-pointer font-medium hover:bg-neutral-800 px-2 py-1 transition duration-300 rounded "
            >
              <Link href={`${link.path}`}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <Button className="rounded font-semibold max-sm:hidden">
          Connect Now
        </Button>
        <div className="hidden max-sm:block">
          <RiMenu3Line onClick={toggleMenu} />
        </div>
      </nav>
      {toggle && (
        <div className="max-sm:block md:hidden fixed top-0 right-0 w-2/5 bg-black z-[1000] h-full">
          <div className="relative top-[3%] right-5">
            <div className="flex flex-col items-end">
              <RxCross1 onClick={toggleMenu} />
              <ul className="text-end flex flex-col gap-4 mt-8">
                {links.map((item, index) => (
                  <li key={index} onClick={toggleMenu}>
                    <Link href={`${item.path}`}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const links = [
  {
    id: 1,
    path: "/",
    title: "Home",
  },
  {
    id: 1,
    path: "/about",
    title: "About",
  },
  {
    id: 1,
    path: "/services",
    title: "Services",
  },
  {
    id: 1,
    path: "/contact",
    title: "Contact",
  },
];
