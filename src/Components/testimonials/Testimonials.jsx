import React from 'react';
import './testimonials.css';
import Image1 from '../../assets/avatar-1.svg';
import Image2 from '../../assets/avatar-3.svg';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [

  {
    id: 1,
    image: Image1,
    title: "John Doe",
    subtitle: "Prodcution Manager at Dribbble",
    comment:
      "I enjoy working with the theme and learn so much and thats make the process fun and interesting, Good luck"
  },

  {
    id: 2,
    image: Image2,
    title: "Witkinson Henry",
    subtitle: "IT head at Wipro",
    comment:
      "I enjoy working with the theme and learn so much and thats make the process fun and interesting, Good luck"
  },

]


const Testimonials = () => {
  return (
    <section className="testimonials container section">
      <h2 className="section__title">Client & Reviews</h2>
      <Swiper className="testimonials__container grid"
      modules={[ Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
     loop= {true}
     grabCursor={true}
      >
        {data.map(({ id, image, title, subtitle, comment }) => {
          return (
            <SwiperSlide className="testimonial__item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className='testimonials__title'>{title}</h3>
              <span className='subtitle'>{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          )
})}

      </Swiper>
    </section>
  )
}

export default Testimonials