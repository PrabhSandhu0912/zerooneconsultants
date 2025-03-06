import React from "react";
import { Carousel } from "flowbite-react";

import banner from "../assets/banner.png"
import banner2 from "../assets/banner2.png"
import banner3 from "../assets/banner3.png"

const Home = () => {
  return (
    <div className="bg-neutralSilver" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen flex justify-center items-center">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner} alt=""/>
            </div>
            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">Innovative Solutions <span className="text-brandPrimary leading-snug">for Your Business</span></h1>
              <p className="text-neutralGrey text-base mb-8">Empowering businesses with cutting-edge technology and strategic solutions.</p>
              <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey">Get Started</button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner2} alt=""/>
            </div>
            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">Custom Software <span className="text-brandPrimary leading-snug">Tailored for You</span></h1>
              <p className="text-neutralGrey text-base mb-8">Bridging the gap between innovation and implementation.</p>
              <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey">Discover More</button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner3} alt=""/>
            </div>
            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">Accelerate Growth <span className="text-brandPrimary leading-snug">with Expert Solutions</span></h1>
              <p className="text-neutralGrey text-base mb-8">Optimizing performance with our industry-leading strategies.</p>
              <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey">Learn More</button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
