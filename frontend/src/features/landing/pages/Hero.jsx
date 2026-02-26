import React from "react";
import { Link } from "react-router-dom";
import HighlightedHeroText from "../components/HighlightedHeroText";
import { ArrowRight } from "lucide-react";
import hero from "../../../assets/hero.webp";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center sm:mx-2 mx-0">
      <div className="flex justify-center m-6">
        <HighlightedHeroText text="New: Bill Generate" />
      </div>

      <div className="flex justify-center text-center sm:text-5xl text-3xl font-primary font-extrabold mb-4">
        <p className="text-text">
            Manage Rent & <span className="text-green-500">Utilities</span>
          <span className="flex justify-center">Effortlessly</span>
        </p>
      </div>

      <div className="sm:text-lg text-xs font-normal font-primary justify-center flex mt-4">
        <p className="text-text text-center m-auto max-w-xs sm:max-w-2xl">
            Automated rent collection and Utility splitting for modern landlords and happy tenants.
        </p>
      </div>

      <div className="flex justify-center my-12">
        <Link
          to="/signup"
          className="inline-flex items-center justify-center px-16 py-2 rounded-md bg-green-500 text-white text-xl font-bold gap-2"
        >
          Start Free trial
          <ArrowRight />
        </Link>
      </div>

      <div className="p-4">
        <img 
         src={hero}
         className="flex items-center justify-center rounded-xl shadow-2xl"
         />
      </div>
    </div>
  );
};

export default Hero;
