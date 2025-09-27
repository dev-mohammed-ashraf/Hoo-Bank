import Image from "next/image";
import GetStartedBtn from "../buttons/GetStartedBtn";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Description() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="component">
      <div data-aos="fade-right">
        <h3>you do the business, we will handle the money.</h3>
        <p>
          with the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <GetStartedBtn />
      </div>
      <ul data-aos="fade-left">
        <li className="flex gap-6 items-center justify-between rounded-2xl px-6 pb-4 my-4">
          <div className="bg-[rgba(9,_151,_124,_0.1)] w-10 h-10 rounded-full flex justify-center items-center">
            <Image src="/assets/Star.svg" alt="Star" width={20} height={20} />
          </div>
          <div className="w-5/6">
            <h4 className="font-semibold text-lg mb-1">rewards</h4>
            <p className="text-dimWhite">
              we take proactive steps make sure your information and
              transactions are secure.
            </p>
          </div>
        </li>
        <li className="bg-statistics-gradient flex gap-6 items-center justify-between rounded-2xl px-6 py-4 my-4">
          <div className="bg-[rgba(9,_151,_124,_0.1)] w-10 h-10 rounded-full flex justify-center items-center">
            <Image src="/assets/Shield.svg" alt="Star" width={20} height={20} />
          </div>
          <div className="w-5/6">
            <h4 className="font-semibold text-lg mb-1">100% secure</h4>
            <p className="text-dimWhite">
              we take proactive steps make sure your information and
              transactions are secure.
            </p>
          </div>
        </li>
        <li className="flex gap-6 items-center justify-between rounded-2xl px-6 pt-4 my-4">
          <div className="bg-[rgba(9,_151,_124,_0.1)] w-10 h-10 rounded-full flex justify-center items-center">
            <Image src="/assets/Send.svg" alt="Star" width={20} height={20} />
          </div>
          <div className="w-5/6">
            <h4 className="font-semibold text-lg mb-1">balance transfer</h4>
            <p className="text-dimWhite">
              a balance transfer credit card can save you a lot of money in
              interest charges.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Description;
