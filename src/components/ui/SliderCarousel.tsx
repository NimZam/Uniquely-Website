"use client";

import { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

interface SliderCarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
}

export function SliderCarousel<T>({ items, renderItem }: SliderCarouselProps<T>) {
  return (
    <div className="w-full py-8">
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 15,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination, EffectCoverflow]}
        className="max-w-4xl pb-14"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="max-w-lg">
            {renderItem(item, index)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
