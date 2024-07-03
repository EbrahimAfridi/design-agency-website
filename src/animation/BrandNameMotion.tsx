"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const BrandNameMotion = ({ children }: { children: React.ReactNode }) => {
  if (typeof children !== "string") {
    return null; // or you could handle this case differently
  }
  return (
    <motion.div>
      <Link
        href="https://ebrahimafridi.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl md:text-3xl font-sans font-semibold text-inherit"
      >
        {children.split("").map((letter: string, index: number) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.1 }}
            className="text-black"
          >
            {letter}
          </motion.span>
        ))}
      </Link>
    </motion.div>
  );
};

export default BrandNameMotion;
