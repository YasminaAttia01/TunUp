"use client";
import { motion } from "framer-motion";


const Hero = () => {
    const text = "UP to the next challenge.".split("");
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        
      <h1 className="bold-52 lg:bold-88">
      {text.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.5 }}
          className={char === "U" || char === "P" ? "text-red-600" : ""}
        >
          {char}
        </motion.span>
      ))}
    </h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
        TunUp (Tunis Upload&Print) hosts activities of four Cimpress business units belonging to the Upload&Print Group. <br />
        We offer a better design for your digital products.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
        
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row ">
          
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        
      </div>
    </section>
  )
}

export default Hero