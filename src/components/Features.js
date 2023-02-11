import React from "react";

// import data
import { features } from "../data";

const Features = () => {
  const { title, subtitle } = features;
  return (
    <section className="section">
      <div className="container mx-auto text-center">
        <div className="flex flex-col  lg:flex-row lg:gap-x-[100px]">
          {/* text */}
          <div className="flex-1 flex flex-col justify-end">
            <h2 className="title">{title}</h2>
            <p className="subtitle lg:mx-48">{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
