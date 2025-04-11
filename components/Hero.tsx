/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Url } from "next/dist/shared/lib/router/router";
type HeroProps = {
  title: string;
  highlight?: string;
  description?: string;
  buttonText?: string;
  buttonLink? :Url
  image:string;
}

const Hero = ({ title, highlight, description, buttonText, buttonLink = "/", image }:HeroProps) => {
  const text = title.split("");

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between py-20 px-8 max-w-7xl mx-auto">
      {/* Text Content */}
      <div className="lg:w-1/2 text-left">
        <h1 className="text-5xl lg:text-5xl font-bold leading-tight text-black">
          <motion.span 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="text-primary"
          >
            {highlight}{" "} <br />
          </motion.span>

          {text.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              {char}
            </motion.span>
          ))}
        </h1>

        <motion.p 
          className="mt-4 text-lg text-gray-600"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link href={buttonLink}>
            <button className="mt-8 px-6 py-3 bg-primary text-white text-lg rounded-5xl shadow-md hover:bg-red-600 transition duration-300">
              {buttonText}
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Image Section */}
      <motion.div 
        className="lg:w-1/2 flex justify-center relative mt-10 lg:mt-0"
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <img 
          src={image} 
          alt="Hero Image" 
          className="w-full max-w-lg lg:max-w-xl rounded-3xl shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
