import React from "react";
import "../../index.css";
import "./home.css";
import {
  Appliances1,
  Camera,
  Gadgets,
  Laptop1,
  Offer1,
  Offer2,
} from "../../assets/Home/HomeImages";
import Slider from "react-slick";
import {
  LeftOutlined,
  RightOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import FeatureCards from "../FeatureCards";
import CategoryCards from "../CategoryCards";
import { Link } from "react-router-dom";
import {
  FeatureProductsData,
  CategoryProductsData,
} from "../../StaticData/static";

const Home = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="absolute right-0 -top-[60px]" onClick={onClick}>
        <div className="rounded-[50px] ml-[10px] bg-[#EEEFF3]">
          <RightOutlined className="w-[39px] h-[39px] p-[12px] cursor-pointer" />
        </div>
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="absolute right-[80px] -top-[60px]" onClick={onClick}>
        <div className="rounded-[50px] ml-[10px] bg-[#EEEFF3]">
          <LeftOutlined className="w-[39px] h-[39px] p-[12px] cursor-pointer" />
        </div>
      </div>
    );
  };

  const settings = {
    arrows: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col gap-3 md:gap-0">
      <section>
        <div className="flex justify-center items-center h-[35vh] sm:h-[50vh] lg:h-[80vh] main">
          <div className="text-center md:w-[800px] md:h-[300px] lg:w-[976px] lg:h-[319px] sm:p-[20px] ">
            <h1 className="text-2xl md:text-4xl lg:text-6xl md:w-full lg:font-[700] lg:w-[976px] font-[900]  text-white lg:leading-[4rem]">
              Demo E-commerce Testing Store
            </h1>
            <p className="mt-5 text-[12px] md:text-[18px] lg:text-[18px] sm:mx-[50px] md:mx-[200px] font-dmsans leading-[21.78px] align-center text-white">
              Embark on an electronic journey. Dive into our shop now!
            </p>
            <Link to={`/products`}>
              <button className="lg:w-[170px] lg:h-[48px] p-[5px] md:p-[7px] lg:p-[10px] font-dmsans font-[400] lg:text-[18px] leading-[21.78px] align-middle border-white bg-white mt-4 px-[20px] py-[10px] hover:bg-transparent hover:border-[1px] hover:text-white">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="sm:mt-[40px] md:mt-[50px] lg:mt-[60px] xl:mt-[80px]">
        <div class="flex flex-col xl:flex-row justify-center xl:gap-6 lg:gap-2 md:gap-2 mb-[2rem] mx-auto">
          <div className="sm:mb-[10px] relative hover:cursor-pointer">
            <div className="relative">
              <div className="overflow-hidden">
                <img
                  class="object-cover h-[342px] xl:w-[695px] rounded-[5px] transition ease-in-out delay-300 hover:-translate-x-1 hover:scale-110 duration-700 w-full"
                  src={Camera}
                  alt="camera"
                />
              </div>
            </div>
            <div className="absolute top-0 flex flex-col justify-center ml-[2rem] h-full gap-[10px] xl:w-[249px]">
              <h1 className="font-dmsans xl:text-[32px] lg:text-[28px] md:text-[26px] sm:text-[28px] leading-[38.73px]">
                Audio & Camera
              </h1>
              <p className="font-dmsans text-[16px] leading-[19.36px] xl:w-[280px] font-[100] text-gray-600 tracking-[1px] lg:w-[450px] md:w-[400px] w-[140px]">
                Unlock reliability and unmatched video, Audio and photo quality.
              </p>
              <div className="w-[100px] h-[17px] gap-[10px]">
                <a
                  href="#"
                  className="flex font-dmsans font-[600] text-[12px] leading-[14.52px]  border-b hover:border-black transition ease-in-out delay-150 hover:translate-x-[3px] hover:scale-105 duration-300"
                >
                  Explore More
                  <div className="pl-1 flex items-center hover:translate-x-[2px] duration-300">
                    <ArrowRightOutlined />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="sm:mb-[10px] relative h-[342px] bg-[#EFF5F5] rounded-[5px] hover:cursor-pointer">
            <div className="relative">
              <div className="overflow-hidden">
                <img
                  className="object-cover h-[342px] w-full xl:w-[670px] rounded-[5px] transition ease-in-out delay-300 hover:-translate-x-1 hover:scale-110 duration-700"
                  src={Appliances1}
                  alt=""
                />
              </div>
            </div>
            <div className="absolute top-0 flex flex-col justify-center ml-[2rem] h-full gap-[10px] xl:w-[200px] lg:w-[180px] md:w-[140px]">
              <h1 className="font-dmsans xl:text-[32px] lg:text-[28px] md:text-[26px] sm:text-[28px] leading-[38.73px]">
                Appliances
              </h1>
              <p className="font-dmsans text-[16px] leading-[19.36px] xl:w-[280px] font-[100] text-gray-600 tracking-[1px] lg:w-[450px] md:w-[375px] w-[140px]">
                Explore advance tech for enhanced workspace productivity
              </p>
              <div className="w-[100px] h-[17px] gap-[10px]">
                <a
                  href="#"
                  className="flex font-dmsans font-[600] text-[12px] leading-[14.52px]  border-b hover:border-black transition ease-in-out delay-150  hover:translate-x-[3px] hover:scale-105  duration-300"
                >
                  Explore More
                  <div className="pl-1 flex items-center hover:translate-x-[2px] duration-300">
                    <ArrowRightOutlined />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col xl:flex-row justify-center xl:gap-6 lg:gap-2 md:gap-2 mb-[2rem] mx-auto">
          <div className="relative bg-[#EFF5F5] rounded-[5px] hover:cursor-pointer">
            <div className="relative">
              <div className="overflow-hidden">
                <img
                  class="object-cover h-[342px] w-full xl:w-[695px] rounded-[5px] transition ease-in-out delay-300 hover:-translate-x-1 hover:scale-110 duration-700"
                  src={Gadgets}
                  alt="Gadgets"
                />
              </div>
            </div>
            <div className="absolute top-0 flex flex-col justify-center ml-[2rem] h-full gap-[10px] xl:w-[200px] lg:w-[180px] md:w-[150px]">
              <h1 className="font-dmsans xl:text-[32px] lg:text-[28px] md:text-[26px] sm:text-[28px] leading-[38.73px]">
                Gadgets
              </h1>
              <p className="font-dmsans text-[16px] leading-[19.36px] xl:w-[280px] font-[100] text-gray-600 tracking-[1px] lg:w-[450px] md:w-[370px] w-[140px]">
                Get your hands on the newest groundbreaking innovation
              </p>
              <div className="w-[100px] h-[17px] gap-[10px]">
                <a
                  href="#"
                  className="flex font-dmsans font-[600] text-[12px] leading-[14.52px]  border-b hover:border-black transition ease-in-out delay-150  hover:translate-x-[3px] hover:scale-105 duration-300"
                >
                  Explore More
                  <div className="pl-1 flex items-center hover:translate-x-[2px] duration-300">
                    <ArrowRightOutlined />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[670px] relative bg-[#F0F0F0] rounded-[5px] hover:cursor-pointer">
            <div className="relative">
              <div className="overflow-hidden">
                <img
                  class="w-full object-cover h-[342px] rounded-[5px] transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 duration-700"
                  src={Laptop1}
                  alt=""
                />
              </div>
            </div>
            <div className="absolute top-0 flex flex-col justify-center ml-[2rem] h-full gap-[10px] xl:w-[249px]">
              <h1 className="font-dmsans xl:text-[32px] lg:text-[28px] md:text-[26px] sm:text-[28px] leading-[38.73px]">
                PC & Laptops
              </h1>
              <p className="font-dmsans text-[16px] leading-[19.36px]  xl:w-[280px] font-[100] text-gray-600 tracking-[1px] lg:w-[450px] md:w-[450px] w-[140px]">
                Potent PCs & laptops optimized for gaming & development
                purposes.
              </p>
              <div className="w-[100px] h-[17px] gap-[10px]">
                <a
                  href="#"
                  className="flex font-dmsans font-[600] text-[12px] leading-[14.52px]  border-b hover:border-black transition ease-in-out delay-150  hover:translate-x-[3px] hover:scale-105 duration-300"
                >
                  Explore More
                  <div className="pl-1 flex items-center hover:translate-x-[2px] duration-300">
                    <ArrowRightOutlined />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sm:mt-[40px] md:mt-[50px] lg:mt-[60px] xl:mt-[80px]">
        <div className="mt-[30px] xl:container lg:container sm:p-[7px] md:p-[12px] mx-auto">
          <div className="border-b-[1px] h-[50px]">
            <div className="h-[39px]">
              <div>
                <h1 className="float-start font-dmsans font-[600] sm:text-[18px] xl:text-[24px] md:text-[20px] lg:text-[22px] leading-[28.13px]">
                  Feature Product
                </h1>
              </div>
            </div>
          </div>
          <Slider {...settings}>
            {FeatureProductsData.map((product) => (
              <FeatureCards
                key={product.id}
                img={product.img}
                header={product.header}
                price={product.price}
                reviewCount={product.reviewCount}
                id={product.id}
              />
            ))}
          </Slider>
        </div>
      </section>

      <section className="sm:mt-[40px] md:mt-[50px] lg:mt-[60px] xl:mt-[80px]">
        <div className="xl:container lg:container mx-auto">
          <div class="grid md:grid-cols-2 sm:grid-cols-1 md:gap-0 px-4 gap-8">
            <div className="relative md:mr-4">
              <div className="relative">
                {" "}
                <img
                  class="object-cover h-[210px] rounded-[5px] w-full"
                  src={Offer1}
                  alt=""
                />
              </div>
              <div className="absolute top-0 text-white flex flex-col justify-center items-center h-full w-full">
                <h1 className="xl:w-[40%] lg:w-[50%] text-center font-dmsans xl:text-[32px] lg:text-[28px] md:text-[26px] sm:text-[28px] leading-[2.5rem] text-white">
                  Enjoy an Exclusive 20% Off on Laptops
                </h1>
                <button className="font-dmsans font-[400] text-[14px] leading-[16.94px] text-black bg-white px-[15px] py-[10px] mt-[10px] border-white border-[1px] hover:bg-transparent hover:text-white">
                  Shop Now
                </button>
              </div>
            </div>
            <div className="relative md:ml-4">
              <div className="relative">
                {" "}
                <img
                  class="object-cover h-[210px] rounded-[5px] w-full"
                  src={Offer2}
                  alt=""
                />
              </div>
              <div className="absolute top-0 text-white flex flex-col justify-center items-center h-full w-full">
                <h1 className="xl:w-[40%] lg:w-[50%] text-center font-dmsans xl:text-[32px] lg:text-[28px] md:text-[26px] sm:text-[28px] leading-[2.5rem] text-white">
                  Watch the price drop by a whopping 20%!
                </h1>
                <button className="font-dmsans font-[400] text-[14px] leading-[16.94px] text-black bg-white px-[15px] py-[10px] mt-[10px] border-white border-[1px] hover:bg-transparent hover:text-white">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sm:mt-[40px] md:mt-[50px] lg:mt-[60px] xl:mt-[80px]">
        <div className="mt-[30px] xl:container lg:container sm:p-[7px] md:p-[12px] mx-auto">
          <div className="border-b-[1px] h-[50px]">
            <div className="h-[39px]">
              <div>
                <h1 className="float-start font-dmsans font-bold sm:text-[18px] xl:text-[24px] md:text-[20px] lg:text-[22px] leading-[28.13px]">
                  New Arrivals
                </h1>
              </div>
            </div>
          </div>
          <Slider {...settings}>
            {FeatureProductsData.map((product) => (
              <FeatureCards
                key={product.id}
                img={product.img}
                header={product.header}
                price={product.price}
                reviewCount={product.reviewCount}
                id={product.id}
              />
            ))}
          </Slider>
        </div>
      </section>

      <section className="sm:mt-[40px] md:mt-[50px] lg:mt-[60px] xl:mt-[80px]">
        <div className="mt-[30px] xl:container lg:container sm:p-[7px] md:p-[12px] mx-auto">
          <div className="border-b-[1px] h-[50px]">
            <div className="h-[39px]">
              <div>
                <h1 className="float-start font-dmsans font-bold sm:text-[18px] xl:text-[24px] md:text-[20px] lg:text-[22px] leading-[28.13px]">
                  Category Product
                </h1>
              </div>
            </div>
          </div>
          <Slider {...settings}>
            {CategoryProductsData.map((el, index) => (
              <CategoryCards
                key={index}
                img={el.img}
                productname={el.product}
              />
            ))}
          </Slider>
        </div>
      </section>

      <section className="sm:mt-[40px] md:mt-[50px] lg:mt-[60px] xl:mt-[80px] mb-[150px]">
        <div className="xl:container lg:container mx-auto">
          <div class="grid grid-cols-1 xl:gap-6 lg:gap-2 md:gap-2 md:p-[30px] sm:p-[8px]">
            <div className="sm:mb-[10px] relative ">
              <div className="relative">
                {" "}
                <img
                  class="object-cover h-[210px] w-full"
                  src={Offer1}
                  alt=""
                />
              </div>
              <div className="absolute top-0 text-white flex flex-col justify-center items-center h-full w-full">
                <h1 className="xl:w-[40%] lg:w-[50%] md:w-[60%] sm:w-[90%] text-center font-dmsans font-[600] xl:text-[32px] lg:text-[28px] md:text-[26px] sm:text-[20px] leading-[2.5rem] text-white">
                  Pick a Subscription that fits you and give you daily update of
                  our product
                </h1>
                <div className="mt-[20px]">
                  <input
                    className="xl:w-[372px] lg:w-[372px] md:w-[365px] sm:h-[35px] xl:h-[42px] lg:h-[42px] md:h-[40px] sm:w-[250px] text-black placeholder-black rounded-[2px] border-[1px] sm:text-[12px] xl:text-[18px] lg:text-[18px] md:text-[16px] pl-[15px] font-dmsans sm:mr-[2px] xl:mr-[10px] lg:mr-[10px] md:mr-[8px] gap-[96px]"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                  />
                  <button className="xl:w-[100px] lg:w-[100px] md:w-[100px] sm:w-[80px] xl:text-[16px] lg:text-[16px] sm:text-[12px] xl:h-[42px] lg:h-[42px] md:h-[40px] sm:h-[35px]  rounded-[2px] sm:p-[7px] xl:p-[10px] lg:p-[10px] md:p-[10px] gap-[10px] text-white bg-[#353535] font-roboto ">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
