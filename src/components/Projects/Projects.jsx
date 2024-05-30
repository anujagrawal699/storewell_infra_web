import React from 'react';
import "swiper/css";
import './Projects.css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import data from '../../utils/slider.json';
import { sliderSettings } from '../../utils/common';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
   <section id='service' className="r-wrapper">
    <div className="paddings innerWidth r-container">
      <div className="r-head flexColStart">
        <motion.span className='orangeText'>Projects Made</motion.span>
        <span className='primaryText'>Engineering Marvels</span>
      </div>
      <Swiper {...sliderSettings}>
      <SliderButtons />
        {
         
          data.map((card, i)=>(
            <SwiperSlide key={i}>
               <div className="flexColStart r-card">
                   <img src = {card.image} alt="project" />
                   <span className="secondaryText r-price">
                    <span style={{color: '#6BB77B'}}>Location</span>
                   </span>
                   <span className='primaryText'>{card.name}</span>
                   <span className='secondaryText'>{card.detail}</span>
               </div>

            </SwiperSlide>

          ))
        }
      </Swiper>
    </div>
   </section>
  )
}

export default Projects;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-button">
        <button onClick={() => swiper.slidePrev()}>&lt;</button>
        <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  )
}