import React from "react";
import { Pointer } from "./magicui/pointer";
// import { motion } from "framer-motion";
import { SignupFormDemo } from "./SignupFormDemo";
import { BackgroundLines } from "./ui/background-lines";
const ContactUS = () => {
  return (
    <section className="relative overflow-x-hidden py-10 bg-black">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 bg-black">
        <Pointer className="fill-red-800" />
        <h1 className="text-4xl font-semibold text-center z-50">Contact us</h1>
        <div className="my-5">
          <SignupFormDemo />
        </div>
      </BackgroundLines>
    </section>
  );
};

export default ContactUS;
