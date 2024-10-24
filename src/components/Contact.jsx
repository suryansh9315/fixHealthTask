"use client";
import React, { Suspense } from "react";
import Image from "next/image";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Suspense>
      <div id="contact" className="my-40 max-w-[1400px] mx-auto">
        <div className="mx-5 sm:mx-10 flex gap-10 flex-col xl:flex-row">
          <div className="w-full md:w-2/3 xl:w-1/3 flex flex-col gap-5 justify-between">
            <div className="flex flex-col gap-5">
              <div className="text-5xl font-normal">Get in touch</div>
              <div className="text-base font-normal pr-10">
                Do you have a complaint in mind? Or are you just curious to talk
                to us? Сomplete the form to contact us.
              </div>
            </div>
            <Image
              className="hidden xl:flex mt-10 w-full h-[600px] object-cover rounded-2xl"
              width={200}
              height={600}
              alt="image_1"
              src={
                "https://zelh.com/wp-content/uploads/2024/01/yulia-raketa.jpg"
              }
            />
          </div>
          <ContactForm />
        </div>
      </div>
    </Suspense>
  );
};

export default Contact;
