import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import React from "react";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Reviews />
      <Contact />
    </div>
  );
};

export default Home;
