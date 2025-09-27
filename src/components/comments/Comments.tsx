import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Comments() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos="fade-up" className="component !mt-8 md:!mt-28 !block mb-20">
      <div className="grid md:grid-cols-2 mb-16">
        <h3>What people are saying about us</h3>
        <p className="text-center md:text-start text-lg md:pl-24">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <Swiper
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        loop={true}
        pagination={{ clickable: false }}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-16">
          <SwiperSlide>
            <div className="bg-bg-gradient rounded-2xl py-18 px-10 flex flex-col justify-between">
              <div>
                <Image
                  src="/assets/quotes.svg"
                  alt="Quotes"
                  width={50}
                  height={50}
                  suppressHydrationWarning
                />
                <p className="my-8 leading-relaxed text-lg">
                  Money is only a tool. It will take you wherever you wish, but
                  it will not replace you as the driver.
                </p>
              </div>
              <div className="capitalize flex items-center gap-4">
                <Image
                  src="/assets/people01.webp"
                  alt="Quotes"
                  width={50}
                  height={50}
                  suppressHydrationWarning
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-medium text-lg">Steve Mark</h4>
                  <p className="text-dimWhite text-[15px]">founder & leader</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-bg-gradient rounded-2xl py-18 px-10 flex flex-col justify-between">
              <div>
                <Image
                  src="/assets/quotes.svg"
                  alt="Quotes"
                  width={50}
                  height={50}
                  suppressHydrationWarning
                />
                <p className="my-8 leading-relaxed text-lg">
                  It is usually people in the money business, finance, and
                  international trade that are really rich.
                </p>
              </div>
              <div className="capitalize flex items-center gap-4">
                <Image
                  src="/assets/people02.png"
                  alt="Quotes"
                  width={50}
                  height={50}
                  suppressHydrationWarning
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-medium text-lg">Kenn Gallagher</h4>
                  <p className="text-dimWhite text-[15px]">founder & leader</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-bg-gradient rounded-2xl py-18 px-10 flex flex-col justify-between">
              <div>
                <Image
                  src="/assets/quotes.svg"
                  alt="Quotes"
                  width={50}
                  height={50}
                  suppressHydrationWarning
                />
                <p className="my-8 leading-relaxed text-lg">
                  Money is only a tool. It will take you wherever you wish, but
                  it will not replace you as the driver.
                </p>
              </div>
              <div className="capitalize flex items-center gap-4">
                <Image
                  src="/assets/people03.png"
                  alt="Quotes"
                  width={50}
                  height={50}
                  suppressHydrationWarning
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-medium text-lg">kevin john</h4>
                  <p className="text-dimWhite text-[15px]">founder & leader</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-bg-gradient rounded-2xl py-18 px-10 flex flex-col justify-between">
              <div>
                <Image
                  src="/assets/quotes.svg"
                  alt="Quotes"
                  width={50}
                  height={50}
                  suppressHydrationWarning
                />
                <p className="my-8 leading-relaxed text-lg">
                  It is usually people in the money business, finance, and
                  international trade that are really rich.
                </p>
              </div>
              <div className="capitalize flex items-center gap-4">
                <Image
                  src="/assets/people04.jpg"
                  alt="people"
                  width={50}
                  height={50}
                  suppressHydrationWarning
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-medium text-lg">herman jensen</h4>
                  <p className="text-dimWhite text-[15px]">founder & leader</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}

export default Comments;
