import Image from "next/image";
import GetStartedBtn from "../buttons/GetStartedBtn";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function CardDetails() {
useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);

  return (
    <div className="component">
      <div data-aos="fade-right" className="order-3 md:order-1">
        <h3>Find a better card deal in few easy steps.</h3>
        <p>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <GetStartedBtn />
      </div>
      <Image
        src="/assets/card.png"
        alt="Cards"
        width={600}
        height={600}
        className="order-1"
        data-aos="fade-left"
      />
    </div>
  );
}

export default CardDetails;
