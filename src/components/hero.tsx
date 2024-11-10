"use client";

import Image from 'next/image';
import React from 'react'
import pic from '../../public/hero.jpeg';
import '../app/Hero.css';
import Typewriter from 'typewriter-effect';
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            Welcome My Website
            <br />
            <br />
            <Typewriter
              options={{
                strings: [
                  'I am Web Developer',
                  'I am UI & UX Designer',
                  'I am GIAIC Student',
                ],
                autoStart: true,
                loop: true,
              }}
            />
              
            
          </h1>
          <div className="hero-buttons"></div>
        </div>
        <div className="hero-image-container">
          <Image
            className="hero-image"
            alt="hero"
            src={pic}
            height={600}
            width={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
