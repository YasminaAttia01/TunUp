/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CardProps {
  title: string;
  image: string;
  description: string;
  link: string;
}

export const Card: React.FC<CardProps> = ({ title, image, description, link }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-4 border border-gray-300 rounded-3xl p-6 shadow-lg bg-white hover:shadow-xl"
    >
      {/* Image */}
      <div className="overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover rounded-xl"
        />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-primary">{title}</h3>

      {/* Description */}
      <p className="text-gray-600">{description}</p>

      {/* Link with arrow animation */}
      <Link
        href={link}
        className="flex items-center gap-2 text-primary font-semibold hover:underline"
      >
        <span>Learn more</span>
        <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1 }}>
          <ArrowRight size={20} />
        </motion.div>
      </Link>
    </motion.div>
  );
};
