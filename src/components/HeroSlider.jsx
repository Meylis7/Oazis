"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { heroSliderImages, mobileButtons, heroSliderFeatures } from "@/data/home";

export default function HeroSlider() {
  const images = Array.from({ length: heroSliderImages.count }, (_, i) => `${heroSliderImages.baseUrl}-${i + 1}.png`);
  const swiperRef = useRef(null);

  return (
    <div className="hero_slider mt-[30px] lg:h-[560px] relative overflow-visible">
      {/* Custom Navigation Arrows placed outside the Swiper container */}
      <div 
        className="swiper-button-prev hidden! lg:flex! cursor-pointer"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <svg width="23" height="34" viewBox="0 0 23 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.0229 32L3.02295 16.9223L20.0229 2" stroke="#FF6A00" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>
      <div 
        className="swiper-button-next hidden! lg:flex! cursor-pointer"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <svg width="23" height="34" viewBox="0 0 23 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 32L19 16.9223L2 2" stroke="#FF6A00" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-[300px] sm:h-[430px] md:h-[560px] rounded-2xl overflow-hidden"
      >
        {images.map((src, index) => (
          <SwiperSlide key={src}>
            <div className="w-full h-full relative">
              <Image
                src={src}
                alt={`Summer camp slider ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}

        <div 
          className="swiper-button-prev flex! lg:hidden! !left-[20px] cursor-pointer"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <svg width="23" height="34" viewBox="0 0 23 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.0229 32L3.02295 16.9223L20.0229 2" stroke="#FF6A00" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>
        <div 
          className="swiper-button-next flex! lg:hidden! !right-[20px] cursor-pointer"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <svg width="23" height="34" viewBox="0 0 23 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 32L19 16.9223L2 2" stroke="#FF6A00" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>
      </Swiper>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-5 mt-5 text-center">
        {mobileButtons.map((button, index) => (
          <Link
            key={index}
            href={button.href}
            className={`text-sm md:text-[18px] font-semibold flex items-center justify-center py-[18px] px-[26px] rounded-lg ${
              button.variant === 'primary'
                ? 'text-white bg-[#FF6A00]'
                : 'text-main-color bg-[#9DB7BC]'
            }`}
          >
            {button.text}
          </Link>
        ))}
      </div>

      <div className="relative lg:absolute lg:bottom-[60px] lg:left-10 lg:w-[calc(100%-80px)] z-10 flex flex-col-reverse lg:flex-row gap-3 md:gap-5 mt-[18px] lg:mt-0">
        <div className="flex items-center justify-center px-6 py-4  lg:h-[160px] w-full lg:w-[180px] bg-[#FF6A00] rounded-lg">
          <h4 className="text-2xl md:text-[26px] lg:text-[32px] font-bold text-white leading-tight text-center">
            {heroSliderFeatures.price}
          </h4>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:gap-0 lg:flex bg-white/95 rounded-lg w-full lg:w-[calc(100%-200px)] lg:h-[160px] py-[30px]">
          {heroSliderFeatures.features.map((feature, index) => (
            <div
              key={index}
              className="border-solid border-0 border-l lg:border-l-0 lg:border-r border-[#9DB7BC]/60 px-4 min-h-[90px] xl:min-w-[190px] flex items-center justify-center"
            >
              <h4 className="text-xs md:text-base font-normal leading-tight text-left md:text-center">
                {feature.text}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
