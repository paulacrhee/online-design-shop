// import icons
import {
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoMdAddCircle,
  IoIosArrowRoundForward,
} from "react-icons/io";

// import images
import Features2Img from "./assets/img/features-2.png";
import FlowerImg from "./assets/img/flowers.webp";
import GiftImg from "./assets/img/gifts.webp";
import BrdImg from "./assets/img/birthday.webp";
import AnniversaryImg from "./assets/img/anniversary.jpeg";
import ValentinesImg from "./assets/img/Valentines.webp";
import Product1Img from "./assets/img/products/product-1.png";
import Product2Img from "./assets/img/products/product-2.png";
import Product3Img from "./assets/img/products/product-3.png";
import Product4Img from "./assets/img/products/product-4.png";
import Product5Img from "./assets/img/products/product-5.png";
import Product6Img from "./assets/img/products/product-6.png";
import Product7Img from "./assets/img/products/product-7.png";
import Product8Img from "./assets/img/products/product-8.png";
import Product9Img from "./assets/img/products/product-9.png";
import Product10Img from "./assets/img/products/product-10.png";
import TestimonialImg from "./assets/img/testimonial.png";
import { PhoneIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";

import Avatar1Img from "./assets/img/avatar-1.png";
import Avatar2Img from "./assets/img/avatar-2.png";
import Avatar3Img from "./assets/img/avatar-3.png";

export const navigation = [
  {
    name: "Shop All",
    href: "/productsPage",
  },
  {
    name: "Flowers",
    href: "/productsPage",
  },
  {
    name: "Gifts",
    href: "/productsPage",
  },
  {
    name: "Birthday",
    href: "/productsPage",
  },
  {
    name: "Valentine´s Day",
    href: "/productsPage",
  },
  {
    name: "Anniversary",
    href: "/productsPage",
  },
  {
    name: "Best Seller",
    href: "/productsPage",
  },
];

export const hero = {
  title: "HAPPINESS ",
  subtitle: "DELIVERED",
  buttonText: "Shop now",
};

export const features = {
  title: "OUR MISION",
  subtitle:
    "We're a modern gifting company that specializes in flower delivery. Make someone's day sending flowers, plants, and gifts some-day or next-day nationwide. Ordering flowers online has never been easier.",
  buttonText: "Show now",

  feature2: {
    image: <Features2Img />,
    title: "The Best Gift for Someone Special",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
};

export const newInStore = {
  title: "New In Store Now",
  subtitle: "Get the latest items immediately with promo prices",
  link: "Check all",
  icon: <IoIosArrowRoundForward />,
  products: [
    {
      name: "flowers",
      image: <FlowerImg />,
    },
    {
      name: "gifts",
      image: <GiftImg />,
    },
    {
      name: "Birthday",
      image: <BrdImg />,
    },
    {
      name: "Valentines's day",
      image: <ValentinesImg />,
    },
    {
      name: "Anniversary",
      image: <AnniversaryImg />,
    },
  ],
};

export const products = {
  title: "SHOP ALL",
  subtitle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  pages: [
    {
      productList: [
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: "THE BILLIE",
          price: 40,
          oldPrice: 52,
        },
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: "THE AMADA",
          price: 35,
          oldPrice: 40,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: "THE FINESSE",
          price: 30,
          oldPrice: 40,
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: "THE BILLIE",
          price: 40,
          oldPrice: 52,
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: "THE AMADA",
          price: 35,
          oldPrice: 40,
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: "THE FINESSE",
          price: 30,
          oldPrice: 40,
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: "THE BILLIE",
          price: 40,
          oldPrice: 52,
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: "THE AMADA",
          price: 35,
          oldPrice: 40,
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: "THE FINESSE",
          price: 30,
          oldPrice: 40,
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: "THE BILLIE",
          price: 40,
          oldPrice: 52,
        },
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: "THE AMADA",
          price: 35,
          oldPrice: 40,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: "THE FINESSE",
          price: 30,
          oldPrice: 40,
        },
      ],
    },
    {
      productList: [
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: "THE BILLIE",
          price: 40,
          oldPrice: 52,
        },
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: "THE AMADA",
          price: 35,
          oldPrice: 40,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: "THE FINESSE",
          price: 30,
          oldPrice: 40,
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: "THE BILLIE",
          price: 40,
          oldPrice: 52,
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: "THE AMADA",
          price: 35,
          oldPrice: 40,
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: "THE FINESSE",
          price: 30,
          oldPrice: 40,
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: "THE BILLIE",
          price: 40,
          oldPrice: 52,
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: "THE AMADA",
          price: 35,
          oldPrice: 40,
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: "THE FINESSE",
          price: 30,
          oldPrice: 40,
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: "THE BILLIE",
          price: 40,
          oldPrice: 52,
        },
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: "THE AMADA",
          price: 35,
          oldPrice: 40,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: "THE FINESSE",
          price: 30,
          oldPrice: 40,
        },
      ],
    },
  ],
};
export const bestseller = {
  title: "BEST SELLERS",
  subtitle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  pages1: [
    {
      productList1: [
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: "THE BILLIE",
          price: 40,
          oldPrice: 52,
        },
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: "THE AMADA",
          price: 35,
          oldPrice: 40,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: "THE FINESSE",
          price: 30,
          oldPrice: 40,
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: "Ole Gundorse Spring",
          price: 75,
          oldPrice: 82,
        },
      ],
    },
  ],
};

export const testimonial = {
  title: "What people are saying about us",
  image: <TestimonialImg />,
  persons: [
    {
      avatar: <Avatar1Img />,
      name: "Josh Smith",
      occupation: "Manager of The New York Times",
      message:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",
    },
    {
      avatar: <Avatar2Img />,
      name: "Brandi Johns",
      occupation: "Manager of The New York Times",
      message:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",
    },
    {
      avatar: <Avatar3Img />,
      name: "Paula Pfeffer",
      occupation: "Manager of The New York Times",
      message:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",
    },
  ],
};
export const help = {
  title: "NEED HELP?",
  subtitle: "24/7 Support",
  icon1: <PhoneIcon />,
  icon2: <PaperAirplaneIcon />,
};
export const newsletter = {
  title: "Get more discount Off your order",
  subtitle: "Join our mailing list",
  placeholder: "Your email address",
  buttonText: "Shop Now",
};

export const footer = {
  social: [
    {
      icon: <IoLogoYoutube />,
      href: "#",
    },
    {
      icon: <IoLogoInstagram />,
      href: "#",
    },
    {
      icon: <IoLogoGithub />,
      href: "#",
    },
    {
      icon: <IoLogoFacebook />,
      href: "#",
    },
  ],
  copyright: "FurniShop 2022 - All Rights Reserved.",
};
