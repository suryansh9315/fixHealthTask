import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="mb-20">
      <div className="flex relative flex-col items-center justify-center gap-5 w-screen h-[750px] bg-[url('/hero.webp')] bg-no-repeat  bg-center bg-cover rounded-b-[30px]">
        <div className="absolute inset-0 bg-black opacity-[0.5] dark:opacity-[0.7] rounded-b-[30px]"></div>
        <div className="text-white z-10 font-bold text-4xl sm:text-6xl text-center max-w-[700px]">
          Physiotherapy consult for ₹1000 FREE
        </div>
        <div className="text-white z-10 font-medium text-md sm:text-2xl">
          Trusted care by 80+ top experts, now online
        </div>
        <div className="z-10 px-8 py-3 bg-white cursor-pointer text-black rounded-3xl mb-20 mt-5 font-bold">
          <Link href={"#contact"}>Book Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
