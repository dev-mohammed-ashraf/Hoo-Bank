import GetStartedBtn from "../buttons/GetStartedBtn";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Try() {
useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);

  return (
    <div
      data-aos="fade"
      data-aos-delay="0"
      id="try"
      className="bg-bg-gradient component !grid-rows-1 !gap-10 md:!gap-12 md:!grid-cols-3 p-9 md:p-18 lg:p-20 rounded-2xl"
    >
      <div className="md:col-span-2">
        <h3>Let’s try our service now!</h3>
        <p className="!pb-0">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <GetStartedBtn className="mx-auto" />
    </div>
  );
}

export default Try;
