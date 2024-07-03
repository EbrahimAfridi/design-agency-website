"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { COMPANIES } from "@/constants";
import { motion, useInView } from "framer-motion";

const TrustedBy = () => {
  const allCompanies = [...COMPANIES, ...COMPANIES];
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: true }); // Trigger once

  const handleAnimationComplete = () => {
    setIsAnimationComplete(true);
  };

  return (
    <section className=" mt-5 md:my-10 px-6 md:px-10">
      <h1 className="text-xl text-black sm:text-2xl mb-4 text-center font-semibold">
        Trusted by
      </h1>
      <motion.div
        className="overflow-hidden relative"
        ref={animationRef}
        animate={{
          translateX: isInView && !isAnimationComplete ? "100%" : 0,
        }}
        onAnimationComplete={handleAnimationComplete}
        transition={{ duration: 10, ease: "linear" }}
      >
        <div className="flex w-full space-x-10 animate-scroll sm:animate-scrollOnMobile md:animate-scroll whitespace-nowrap">
          {allCompanies.map((company, index) => (
            <div key={index} className="flex items-center space-x-2 ">
              <Image
                src={company.logo}
                alt={"company logo"}
                width={100}
                height={100}
                objectFit="cover"
                className="max-w-[200px] mr-2 md:mr-14 hover:scale-125"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TrustedBy;
