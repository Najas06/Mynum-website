import BlurText from "@/BlurText/BlurText";
import { Bot, Brain, Pyramid } from "lucide-react";
import React from "react";
import { TerminalDemo } from "../TerminalDemo";

const AboutDetailsSection = () => {
  return (
    <div className="my-5 px-3">
      <div className="relative -top-24 max-sm:top-0">
        <BlurText
          text="Empowering Precision Through Smart Enumeration"
          delay={150}
          animateBy="words"
          direction="bottom"
          className="text-4xl my-3 font-semibold "
        />
        <BlurText
          text="Empowering Precision Through Smart EnumerationWelcome to MyEnum, the next-generation platform designed to revolutionize enumeration, data structuring, and automated classification. We leverage cutting-edge technology to streamline data collection, organization, and processing—ensuring accuracy, efficiency, and scalability for businesses, researchers, and enterprises."
          delay={150}
          animateBy="words"
          direction="bottom"
          className="text-xl "
        />
      </div>
      <div className="flex justify-between w-full max-md:flex-col-reverse items-center max-md:gap-y-6 my-5">
        <div className="w-1/2 max-md:w-full">
          <h2 className="text-4xl font-semibold">What We Do !</h2>
          <ul className="flex flex-col gap-y-3">
            {
              weDo.map((item,index)=>(
               <li key={index}>
                 <div className="flex flex-col gap-y-2">
                  <p className="flex gap-x-2 items-center text-xl font-semibold"><span>{item.icon} </span>{item.title}</p>
                  <p>{item.des}</p>
                </div>
               </li>
              ))
            }
          </ul>
        </div>
        <div className="w-1/2 flex justify-center max-md:w-full">
        <TerminalDemo/>
        </div>
      </div>
    </div>
  );
};

export default AboutDetailsSection;

const weDo = [
  {
    title: "Advanced Enumeration Solutions",
    icon: <Brain />,
    des: "Our platform enables users to generate, categorize, and structure data effortlessly. Whether it’s numbering items in a dataset, classifying entities, or standardizing information across multiple databases, MyEnum ensures speed and accuracy in every step.",
  },
  {
    title: "Data Structuring & Organization",
    icon: <Pyramid />,
    des: "We specialize in helping businesses organize raw data into meaningful, structured formats. This includes everything from sequential numbering systems to hierarchical data organization, allowing seamless integration with databases, APIs, and enterprise applications.",
  },
  {
    title: "Automation & AI-Powered Optimization",
    icon: <Bot />,
    des: "With artificial intelligence and machine learning, MyEnum brings smart automation into the enumeration process. Our algorithms detect patterns, prevent redundancies, and optimize numbering conventions without manual intervention—saving you valuable time and resources.",
  },
];
