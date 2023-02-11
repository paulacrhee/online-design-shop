import React from "react";

// import data
import { bestseller } from "../data";
// import icons
import { HiPlus } from "react-icons/hi";

const BestSellers = () => {
  const { title, subtitle, pages1 } = bestseller;
  return (
    <section className="section text-center mx-10">
      <div className="container mx-auto">
        <div>
          <h2 className="title">{title}</h2>
          <p className="max-w-[639px] mx-auto mb-[50px] lg:mb-[70px]">
            {subtitle}
          </p>
        </div>
      </div>
      <div className="place-content-center">
        {pages1.map((page1, index) => {
          return (
            <div key={index}>
              <div className="grid lg:ml-28 gap-x-4 md:grid-cols-3 lg:grid-cols-3 lg:gap-[5px] place-content-center">
                {page1.productList1
                  .filter((item, index) => index < 3)
                  .map((filteredItem) => {
                    const { image, name, price, oldPrice } = filteredItem;
                    return (
                      <div
                        className="w-full max-w-[290px] h-[380px]"
                        key={index}
                      >
                        <div className=" relative transition ">
                          <img
                            className="border hover:border-accent rounded-[18px] w-full max-w-[250px] h-full max-h-[300px] flex lg:ml-6 items-center justify-center mb-[15px] relative transition "
                            src={image.type}
                            alt="imgs"
                          />
                          <div className="absolute bottom-4 right-[50px] bg-gray-200 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-300 transition">
                            <HiPlus className="text-l grey" />
                          </div>
                        </div>
                        <div className="text-center">
                          {" "}
                          <div className="font-semibold lg:text-xl">{name}</div>
                          <div className="flex justify-center items-center gap-x-3">
                            <div>$ {price}</div>
                            <div className="text-[15px] text-grey line-through">
                              $ {oldPrice}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BestSellers;
