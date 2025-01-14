import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import MealCard from './MealCard';
export default function MealShow({data}) {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  // console.log( 'Another', data)
  return (
    <div>
      <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 my-10 ">
          {data?.map((item) => (
            <MealCard key={item._id} items={item} />
          ))}
        </div>
      </Swiper>
      </div>
    </div>
  )
}
