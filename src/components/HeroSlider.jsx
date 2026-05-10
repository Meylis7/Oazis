"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function HeroSlider() {
  const images = Array.from({ length: 6 }, (_, i) => `/images/hero-slider-${i + 1}.png`);

  return (
    <div className="hero_slider mt-[30px] h-[560px] relative overflow-visible">
      {/* Custom Navigation Arrows placed outside the Swiper container */}
      <div className="swiper-button-prev">
        <svg width="23" height="34" viewBox="0 0 23 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.0229 32L3.02295 16.9223L20.0229 2" stroke="#FF6A00" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>
      <div className="swiper-button-next">
        <svg width="23" height="34" viewBox="0 0 23 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 32L19 16.9223L2 2" stroke="#FF6A00" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>

      <Swiper
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
        navigation={{
          nextEl: '.hero_slider .swiper-button-next',
          prevEl: '.hero_slider .swiper-button-prev',
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full rounded-2xl overflow-hidden"
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
      </Swiper>

      <div className="absolute bottom-[60px] w-[calc(100%-80px)] left-10 z-10 flex gap-5">
        <div className="flex items-center justify-center px-6 h-[160px] w-[180px] bg-[#FF6A00] rounded-lg">
          <h4 className="text-[32px] font-bold text-white leading-tight text-center">
            7 дней — $265
          </h4>
        </div>

        <div className="flex bg-white/95 rounded-lg w-[calc(100%-200px)] h-[160px] py-[30px]">
          <div className="border-solid border-0 border-r border-[#9DB7BC]/60 px-4 xl:min-w-[190px] flex items-center justify-center">
            <h4 className="text-base font-normal leading-tight text-center">
              3-разовое питание + полдник и вечерний снек
            </h4>
          </div>

          <div className="border-solid border-0 border-r border-[#9DB7BC]/60 px-4 xl:min-w-[225px] flex items-center justify-center">
            <h4 className="text-base font-normal leading-tight text-center">
              Группы по 8–10 детей с закрепленным вожатым и помощником
            </h4>
          </div>

          <div className="border-solid border-0 border-r border-[#9DB7BC]/60 px-4 xl:min-w-[190px] flex items-center justify-center">
            <h4 className="text-base font-normal leading-tight text-center">
              15+ активностей ежедневно: спорт, квесты, поделки, костёр, командные игры, водные эстафеты, купание на озере
            </h4>
          </div>

          <div className="border-solid border-0 border-r border-[#9DB7BC]/60 px-4 xl:min-w-[190px] flex items-center justify-center">
            <h4 className="text-base font-normal leading-tight text-center">
              Лагерь проходит на базе Eagle Lake Camp (Minnesota)
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
