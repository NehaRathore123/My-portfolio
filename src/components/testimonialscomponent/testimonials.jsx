import React from 'react'
import '../testimonialscomponent/testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
import {  Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
  avatar: AVTR1,
  name: "Tina Snow",
  review: "Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentius quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolors deserunt explicabo nostrum ducimus quasi"
  },
  {
    avatar: AVTR2,
    name: "Shatta Wale",
    review: "Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentius quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolors deserunt explicabo nostrum ducimus quasi"
    },
    {
      avatar: AVTR3,
      name: "Kulname Despite",
      review: "Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentius quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolors deserunt explicabo nostrum ducimus quasi"
      },
      {
        avatar: AVTR4,
        name: "Nana Ama Mcbrown",
        review: "Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentius quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolors deserunt explicabo nostrum ducimus quasi"
        },
              
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonial__container"
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
        {
          data.map(({avatar,name,review}, index) => 
          {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar}  />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review"> {review} </small>
              </SwiperSlide>
            )
          })
          }
        
      </Swiper>
    </section>
  )
}

export default testimonials