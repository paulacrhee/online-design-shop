import React from "react";

// import data
import { hero } from "../data";

const Hero = () => {
  const { title, subtitle, buttonText } = hero;
  return (
    <section className="h-full max-h-[850px] w-full bg-hero bg-center lg:bg-right bg-cover bg-no-repeat text-white pt-[225px] pb-[254px] relative mb-12 lg:mb-28">
      <div className="container mx-auto ">
        {/* title */}
        <h1 className=" mt-24 text-4xl lg:text-[58px] tracking-widest	lg:text-left lg:leading-tight py-[16px]  mx-auto font-semibold mb-[30px] ">
          {title} <br /> {subtitle}
        </h1>

        {/* button */}
        <a
          href="/productsPage"
          className="sm:flex w-fit sm:items-center sm:justify-center lg:text-left px-[35px] lg:px-[80px] py-[9px] lg:py-[16px] mb-[160px] lg:mb-[194px] text-xl rounded-md bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.5)] backdrop-blur-md transition"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default Hero;
