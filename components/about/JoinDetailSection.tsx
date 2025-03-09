import React from "react";
import { IconCloudDemo } from "../IconCloudDemo";

const JoinDetailSection = () => {
  return (
    <div className="px-3">
      <div className="flex justify-between w-full max-md:flex-col-reverse items-center max-md:gap-y-6 my-5">
        <div className="w-1/2 flex justify-center max-md:w-full">
          <IconCloudDemo />
        </div>
        <div className="w-1/2 max-md:w-full flex flex-col gap-y-3">
          <h2 className="text-4xl ">
            Join the <span className="font-semibold">MyEnum Revolution</span>
          </h2>
          <p>In a data-driven world, <span className="font-semibold">structured and well-organized information is key to success.</span> At MyEnum, we help businesses and organizations streamline their data enumeration processes, ensuring efficiency, reliability, and seamless integration.
          <br />
          Whether you're managing product inventories, financial records, research data, or national census information—MyEnum is the <span className="font-semibold">ultimate solution for structured and automated enumeration.</span>
          </p>
        </div>
      </div>
      <h2 className="text-center font-semibold text-2xl"><span className="animate-ping">✨</span> Experience the future of enumeration. Get started with MyEnum today!</h2>
    </div>
  );
};

export default JoinDetailSection;
