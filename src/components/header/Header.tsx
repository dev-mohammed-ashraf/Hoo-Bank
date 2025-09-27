import Image from "next/image";
import GetStartedCircleBtn from "../buttons/GetStartedCircleBtn";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Header() {
useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <header
      id="header"
      className="flex justify-between flex-col-reverse md:flex-row pb-5 pt-20"
    >
      <div
        data-aos="fade-right"
        className="relative mt-[100vw] sm:mt-[90vw] md:mt-0 pt-12 flex md:block flex-col items-center text-center md:text-left"
      >
        <div className="flex items-center w-fit gap-1 bg-header-gradient rounded-[10px] px-2 md:pl-4 md:pr-6">
          <Image
            src="/assets/Discount.svg"
            alt="Discount"
            width={40}
            height={40}
            className="animate-pulse"
          />
          <p className="uppercase text-dimWhite text-sm md:text-base lg:text-[17px]">
            <span className="text-white">20%</span> discount for{" "}
            <span className="text-white">1 month</span> account
          </p>
        </div>
        <h2 className="text-5xl lg:text-5xl xl:text-7xl font-[600] leading-snug py-8">
          the next <div className="gradient-text">generation</div> payment
          method
        </h2>
        <p className="text-dimWhite text-lg md:w-1/2 leading-8">
          our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
        <GetStartedCircleBtn className="md:absolute md:top-30 lg:top-34 md:right-1/2 md:translate-x-1/2 mt-12 md:mt-0" />
      </div>
      <div>
        <Image
          data-aos="fade"
          src="/assets/robot.png"
          alt="Robot"
          width={600}
          height={600}
          className="md:w-[48vw] absolute -z-10 right-0 animate-float"
        />
      </div>
    </header>
  );
}

export default Header;
