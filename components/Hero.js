import Image from "next/image";
import React from "react";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/2">
        <div className="text-center lg:text-left">
          <p className="text-gray-600 text-lg lg:text-xl">
            Product of the Day{" "}
            <span className="bg-blue-500 px-3 py-1 rounded-full text-white">
              #1
            </span>
          </p>
          <h1 className="text-blue-500 text-3xl lg:text-6xl font-bold mt-4 lg:mt-6">
            Generate Password From Anywhere
          </h1>
          <p className="text-gray-700 text-lg mt-4 lg:mt-6">
            Upgrade security playfully with 'Generate Password From Anywhere' –
            crafting quirky passwords for a safeguarded online experience.
          </p>
        </div>
      </div>
      <div>
        <Image src={hero} width={600} height={400} className="w-full" />
      </div>
    </div>
  );
};

export default Hero;
