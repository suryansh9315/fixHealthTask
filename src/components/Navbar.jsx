import Image from "next/image";
import React from "react";
import Toggle from "./Toggle";

const Navbar = () => {
  return (
    <div className="bg-[#f7f7f7] dark:bg-black">
      <div className="max-w-[1400px] h-[100px] mx-auto flex justify-between items-center">
        <div className="text-black ml-3 sm:ml-10 dark:text-white text-4xl md:text-5xl font-semibold">FixHealth</div>
        {/* <Image className="ml-10" src={"/logo.webp"} alt="logo" height={50} width={200} /> */}
        <div className="flex gap-2 sm:gap-5 items-center mr-3 sm:mr-10">
          <div>
            <Toggle />
          </div>
          <div className="z-10 px-8 py-3 bg-black dark:bg-white cursor-pointer text-white dark:text-black rounded-3xl font-bold">
            Book Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
