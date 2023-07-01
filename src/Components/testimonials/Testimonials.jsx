import React, { useState, useEffect } from 'react';
import './testimonials.css';
import Image1 from '../../assets/avatar-1.svg';
import Image2 from '../../assets/avatar-3.svg';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [

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
      "Great working experience and outstanding design.Wish you a very good luck"
  },

]


const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prevTestimonial) => (prevTestimonial + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length])



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
        {testimonials.map(({ id, image, title, subtitle, comment }) => {
          return (
            <SwiperSlide className="testimonial__item" key={id}>
              <div className="thumb">
                <img src={testimonials[currentTestimonial].image} alt="" />
              </div>
              <h3 className='testimonials__title'>{testimonials[currentTestimonial].title}</h3>
              <span className='subtitle'>{testimonials[currentTestimonial].subtitle}</span>
              <div className="comment">{testimonials[currentTestimonial].comment}</div>
            </SwiperSlide>
          )
})}

      </Swiper>
    </section>
  )
}

export default Testimonials