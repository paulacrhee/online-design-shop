import React from "react";
// import data
import { help } from "../data";
const Help = () => {
  const { title, subtitle, icon1, icon2 } = help;
  return (
    <section className="section bg-gray-100">
      <div className="container mx-auto text-center">
        <div className="flex flex-col  lg:flex-row lg:gap-x-[100px]">
          {/* text */}
          <div className="flex-1 flex flex-col justify-end">
            <h2 className="title">{title}</h2>
            <p className="subtitle lg:mx-48">{subtitle}</p>
          </div>
        </div>
        <div className="flex justify-center gap-20 lg:gap-48 my-10 ">
          <div>
            <div className="h-20 w-12 ml-8">{icon1}</div>
            <div className="subtitle font-semibold">(615)-123-1212</div>
          </div>
          <div>
            <div className="h-20 w-12 ml-8">{icon2}</div>
            <div className="subtitle font-semibold">abc@abcde.com</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;
