import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Advantages() {
useEffect(() => {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  AOS.init({ duration: 1000 });
}, []);

  return (
    <div className="component">
      <Image
        src="/assets/bill.png"
        alt="Bill"
        width={600}
        height={600}
        data-aos="fade-right"
      />
      <div data-aos="fade-left" className="md:pl-12">
        <h3>Easily control your billing & invoicing.</h3>
        <p>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex gap-4">
          <Image src="/assets/apple.svg" alt="Apple" width={150} height={150} />
          <Image
            src="/assets/google.svg"
            alt="Google"
            width={150}
            height={150}
          />
        </div>
      </div>
    </div>
  );
}

export default Advantages;
