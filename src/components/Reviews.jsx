"use client";
import React, { useState } from "react";
import { REVIEWS } from "@/utils/data";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { animate, motion, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";

const Reviews = () => {
  let [ref, { width }] = useMeasure();
  const x = useMotionValue(0);
  const [index, setIndex] = useState(0);
  const [animationState, setAnimationState] = useState(false);

  return (
    <div className="mb-10 max-w-[1400px] mx-auto overflow-hidden dark:bg-black">
      <div className="flex justify-between items-end mx-10 my-10">
        <div className="text-5xl font-normal flex-[0.8]">
          Patient Recovery Stories
        </div>
        <div className="flex gap-2">
          <div
            onClick={() => {
              const value = 665;
              if (index != 0 && !animationState) {
                setAnimationState(true);
                setIndex(index - 1);
                const animation = animate(x, x.get() + value, {
                  duration: 0.5,
                  ease: [0.76, 0, 0.24, 1],
                });
                animation.then(() => {
                  setAnimationState(false);
                });
              }
            }}
            className="p-2 border border-gray-300 rounded-full cursor-pointer"
          >
            <ArrowLeft size={18} className={`${index==0 ? "text-gray-300 dark:text-gray-500" : "text-black dark:text-white"}`} />
          </div>
          <div onClick={() => {
              const max_index = 7;
              const value = 665;
              if (index != max_index && !animationState) {
                setAnimationState(true);
                setIndex(index + 1);
                const animation = animate(x, x.get() - value, {
                  duration: 0.5,
                  ease: [0.76, 0, 0.24, 1],
                });
                animation.then(() => {
                  setAnimationState(false);
                });
              }
            }}
            className="p-2 border border-gray-300 rounded-full cursor-pointer">
            <ArrowRight className={`${index==7 ? "text-gray-300 dark:text-gray-500" : "text-black dark:text-white"}`} size={18} />
          </div>
        </div>
      </div>
      <div className="ml-10" ref={ref}>
        <motion.div style={{ x }} className="flex w-[6010px]">
          {REVIEWS.map((review, i) => (
            <div
              key={i}
              className="flex w-[650px] bg-[#f7f7f7] dark:bg-black dark:border dark:border-gray-700 items-center justify-between p-4 rounded-md mr-[20px]"
            >
              <div className="flex flex-col justify-between min-h-[450px] w-1/2 pr-10">
                <div className="text-xl font-semibold">{review.disease}</div>
                <div className="text-2xl font-light">"{review.review}"</div>
                <div className="flex flex-col gap-0">
                  <div className="text-xl font-normal">
                    {review.name}, {review.age}
                  </div>
                  <div className="text-base font-light">{review.location}</div>
                </div>
              </div>
              <Image
                alt="Image"
                className="min-h-[450px] w-1/2 object-cover"
                src={review.image}
                width={400}
                height={400}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Reviews;
