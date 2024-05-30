import React from 'react';
import './Hero.css';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id='hero' className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container ">
            <div className="flexColStart hero-left">
              <div className="hero-title">
                <div className="orange-circle" />
                <motion.h1
                initial={{ y: "2rem", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2,
                  type: "spring",
                 }}
                >
                    Global <br/> Engineering <br/> Experts
                </motion.h1>
              </div>
              <div className="flexColStart hero-des">
                <span className='secondaryText'>
                Leading player in Engineering, Procurement & Construction (EPC) business.
                </span>
                <span className='secondaryText'>
                Ideas have an impressive roster of MNCs, corporates, and government clients.
                </span>
              </div>
              <div className="flexCenter map-bar">
                Map Bar
              </div>
              <div className="flexCenter stats">
                <div className="flexColCenter stat">
                    <span>
                        <CountUp start={8800} end={10000} duration={4}/>
                        <span>+</span>
                    </span>
                    <span className='secondaryText'>
                        Projects Completed
                    </span>
                </div>
                <div className="flexColCenter stat">
                    <span>
                        <CountUp start={1000} end={1200} duration={4}/>
                        <span>+</span>
                    </span>
                    <span className='secondaryText'>
                        Employees
                    </span>
                </div>
                <div className="flexColCenter stat">
                    <span>
                        <CountUp start={4} end={8} duration={4}/>
                        <span>+</span>
                    </span>
                    <span className='secondaryText'>
                        Awards Received
                    </span>
                </div>
              </div>
            </div>
            <div className="flexCenter hero-right">
               <motion.div
               initial={{ x: "7rem", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2,
                  type: "spring",
                 }}
               className="image-container">
               <video src="./IDEA-NO-AUO-v1.m4v" controls autoPlay loop muted />
               </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Hero