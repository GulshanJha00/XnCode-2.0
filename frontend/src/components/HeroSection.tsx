"use client";
import React from "react";
// import Image from "next/image";
import featureData from "../app/data/contentData";
import { Timeline } from "./ui/timeline";



const HeroSection = () => {
  return (
    <div className='bg-[#15062C]  h-full w-full'>
      <Timeline data={featureData} />
    </div>
  )
}

export default HeroSection
