import Image from "next/image";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SiMinutemailer } from "react-icons/si";
import { FaBuilding, FaFacebookSquare, FaInstagram, FaPhone, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
  return (
      <footer>
        <div className="py-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src={"/icon.png"}
                alt="logo"
                width={1920}
                height={1080}
                className="w-10 cursor-pointer mr-4 "
              />
              <div>
                <h1 className="text-2xl font-semibold max-md:text-xl max-sm:text-sm">
                  <span className="text-gold">MyEnum Services</span> Agency
                </h1>
                <p className="max-md:text-xs max-sm:text-[8px]">
                  We are a team of passionate developers and designers that love
                  to build amazing products.
                </p>
              </div>
            </div>
            <p className="max-sm:text-xs">
              {Date().split(" ").slice(0, 4).join(" ")}
            </p>
          </div>
          <div className="border-b mt-1 border-gold w-4/5 mx-auto"></div>
          <div className="grid grid-cols-5 gap-10 my-10 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            <div className="flex flex-col col-span-2 max-sm:col-auto gap-8">
              <h2 className="text-3xl font-normal">Our Newsletter</h2>
              <div className="flex ">
              <Input type="email" className="rounded-md h-full p-5" placeholder="Your Email Address" />
                <Button className="w-[20%] h-full font-normal rounded-none border bg-transparent  text-white">
                {/* <Button className="w-[20%] h-full font-normal rounded-none bg-gold text-white hover:bg-[#9D8A39]  max-xl:text-xl max-lg:text-[16px] max-md:text-[8px] max-md:p-2  max-sm:p-2 "> */}
                  <SiMinutemailer className="text-xl" />
                </Button>
              </div>
              <ul className="flex gap-3 items-center text-3xl">
                <li>
                  <a href="https://wa.me/+919042376479" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="hover:text-green-500" />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=61572471118475" target="_blank" rel="noopener noreferrer">
                    <FaFacebookSquare className="hover:text-blue-600" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/myenum.in/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="hover:text-pink-500" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCpGnUW_i_lqFFJRyHTLqoTA" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="hover:text-red-600" />
                  </a>
                </li>
                </ul>
            </div>
            <div>
              <h2 className="text-3xl font-normal">Quick Links</h2>
              <ul className="flex flex-col gap-4 mt-8 cursor-pointer">
                <Link href={'/'}><li>Home</li></Link>
                <Link href={'/about'}><li>About</li></Link>
                <Link href={'/properties'}><li>Services</li></Link>
                <Link href={'/blog'}><li>Contact</li></Link>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-normal">Our Support</h2>
              <ul className="flex flex-col gap-4 mt-8">
                <Link href={'/'}><li>Privacy Policy</li></Link>
                <Link href={'/about'}><li>Support</li></Link>
                <Link href={'/properties'}><li>Disclaimer</li></Link>
                <Link href={'/blog'}><li>Terms & Conditions</li></Link>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-normal">Our Contact</h2>
              <div className="flex flex-col gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <FaBuilding className="text-gold" />
                  <p>17-1, Old Market Street Theshevapet, Shevapet, Salem, Tamil Nadu</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaPhone className="text-gold" />
                    <a href="tel:+123456789" className="text-blue-500 hover:underline">+91 90423 76479</a>
                  </div>
                  <div className="flex items-center gap-3 overflow-x-auto">
                    <MdEmail className="text-gold" />
                    <a href="mailto:info@myenum.in" className="text-blue-500 hover:underline">info@myenum.in</a>
                  </div>
                </div>
            </div>
          </div>
          <div className="border-b mt-1 "></div>
          <p className="text-center text-neutral-600 mt-10">© 2025 Myenum services. All rights reserved</p>
        </div>
      </footer>
  );
};

export default Footer;
