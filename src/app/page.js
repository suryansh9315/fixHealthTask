"use client";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import React, { Suspense } from "react";

const Home = () => {
  return (
    <Suspense>
      <div className="">
        <Navbar />
        <Hero />
        <Reviews />
        <Contact />
      </div>
    </Suspense>
  );
};

export default Home;
