import React, { useState, useEffect } from "react";

// import logo
import { ShoppingBagIcon, UserIcon } from "@heroicons/react/24/outline";

// import icons
import { CgMenuRight, CgClose } from "react-icons/cg";

// import components
import NavMobile from "./NavMobile";

const Header = () => {
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  useEffect(() => {
    // add event listener
    window.addEventListener("scroll", () => {
      // when scrollY is bigger than 50px setBg to true, else false
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        // if bg is true
        bg
          ? "bg-primary py-4 lg:py-6 "
          : // if bg is false
            "bg-white"
      }
      fixed decoration-sky-500/30 left-0 py-8 z-10 w-full transition-all duration-200 lg:mb-40`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* menu icon */}
          <div
            onClick={() => setMobileNav(!mobileNav)}
            className="lg:hidden text-2xl lg:text-3xl  cursor-pointer"
          >
            {mobileNav ? <CgClose /> : <CgMenuRight />}
          </div>
          {/* logo */}
          <ul className="md:flex md:gap-x-12">
            <li>
              <a
                className="hidden lg:flex lg:gap-4 lg:capitalize  lg:hover:border-b lg:transition-all"
                href="/login"
              >
                Sign in
              </a>
            </li>
          </ul>
          <a
            href="/"
            className="tracking-widest h-6 font-bold  text-xl lg:h-8 lg:ml-20 mr-6 md:mr-28"
          >
            Perfect Gift
          </a>
          <nav className="lg:hidden md:hidden md:flex">
            <ul className="flex md:gap-x-12">
              <li>
                <a
                  className=" flex gap-4 capitalize  hover:border-b transition-all"
                  href="/login"
                >
                  <UserIcon className="h-6 w-6 " />
                </a>
              </li>
              <li>
                <a
                  className=" flex gap-4 capitalize  hover:border-b transition-all"
                  href="/"
                >
                  <ShoppingBagIcon className="h-6 w-6 " />
                </a>
              </li>
            </ul>
          </nav>
          {/* nav */}
          <nav className="hidden md:flex">
            <ul className="md:flex md:gap-x-2">
              <li>
                <a
                  className="lg:hidden flex  capitalize  hover:border-b transition-all"
                  href="/login"
                >
                  <UserIcon className="h-6 w-6 " />
                </a>
              </li>
              <li>
                <a
                  className=" flex gap-4 capitalize  hover:border-b transition-all"
                  href="/"
                >
                  <ShoppingBagIcon className="h-6 w-6 " />
                </a>
              </li>
            </ul>
          </nav>
          {/* nav mobile */}
          <div
            className={`${
              mobileNav ? "right-0" : "-left-full"
            } md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}
          >
            <NavMobile />
          </div>
        </div>
      </div>
      <div className="hidden lg:relative lg:px-12 lg:py-4 lg:mt-7 lg:flex lg:justify-around lg:items-center ">
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto  lg:items-center lg:w-full lg:space-x-24 lg:ml-48">
          <li>
            <a className="  hover:text-gray-500" href="/productsPage">
              Shop All
            </a>
          </li>

          <li>
            <a className=" hover:text-gray-500 " href="/productsPage">
              Flowers
            </a>
          </li>

          <li>
            <a className=" hover:text-gray-500" href="/productsPage">
              Gifts
            </a>
          </li>

          <li>
            <a className="  hover:text-gray-500" href="/productsPage">
              Birthday
            </a>
          </li>

          <li>
            <a className=" hover:text-gray-500" href="/productsPage">
              Valentine´s Day
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500" href="/productsPage">
              Anniversary
            </a>
          </li>
          <li>
            <a className=" hover:text-gray-500" href="/productsPage">
              Best Seller
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
