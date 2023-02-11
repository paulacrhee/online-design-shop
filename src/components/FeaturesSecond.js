import React from "react";

// import data
import { features } from "../data";

const FeaturesSecond = () => {
  const { title, subtitle, image } = features.feature2;
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-[100px]">
          {/* image */}
          <div className="flex-1 rounded-md ">
            <img src={image.type} alt="flowers" />
          </div>
          {/* text */}
          <div className="flex-1 flex flex-col justify-end mt-10">
            <h2 className="title ">{title}</h2>
            <p className="subtitle">{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSecond;
