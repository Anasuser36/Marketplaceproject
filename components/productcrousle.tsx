"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";

interface ProductSliderProps {
  images: string[];
}

export default function ProductSlider({ images }: ProductSliderProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div>
      {/* Main Slider */}
      <Swiper
        navigation={true}
        modules={[Navigation, Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        className="h-[500px] w-[500px] mb-4"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Product Image ${index + 1}`}
              className="h-[500px] w-[500px] object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Slider */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        modules={[Thumbs]}
        className="h-32"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover rounded-lg cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}