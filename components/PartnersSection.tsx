"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { partners } from "@/constants";

const PartnersSection = () => {
  return (
    <section className="flex flex-col gap-12 py-20 overflow-hidden max-container padding-container">
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="text-secondary   bold-52 lg:bold-50">
          Meet our trusted <br />
          <span className="text-primary">Partners</span>
        </h1>
      </div>

      <div className="overflow-hidden w-full mt-2">
        <motion.div
          className="flex whitespace-nowrap w-full"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {[...partners, ...partners].map((partner, index) => (
            <img
              key={`${partner._id}-${index}`}
              src={partner.logo}
              alt={partner.name}
              className="h-32 mr-6 shrink-0"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
