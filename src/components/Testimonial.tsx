"use client";
import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { TESTIMONIALS } from "@/constants";

const Testimonial = () => {
  const viewRef = React.useRef(null);
  const isInView = useInView(viewRef, { once: true });
  const controls = useAnimation();
  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      });
    }
  }, [isInView, controls]);

  return (
    <section className="w-full px-4 sm:px-16 overflow-hidden py-6 md:py-8 lg:py-12">
      <header className="mb-8">
        <h3 className="text-4xl font-bold text-black">People ❤️ AgencyFlow</h3>
        <p className="text-gray-500 mt-3 sm:mt-4 font-medium text-2xl">
          AgencyFlow has built products for scale and can serve hundreds of
          millions of monthly users.
        </p>
      </header>
      <div>
        <div className="flex flex-col lg:flex-row gap-4">
          {TESTIMONIALS.map((testimonial) => (
            <motion.article
              ref={viewRef}
              initial={{
                opacity: 0,
                y: 100,
              }}
              animate={controls}
              key={testimonial.id}
              className="w-96 text-black border border-gray-200 p-4 max-w-md h-fit  rounded-xl hover:shadow-md"
            >
              <p className="font-normal mb-2 text-sm leading-5">
                {testimonial.message}
              </p>
              <h3 className="font-semibold text-md">
                {testimonial.customerName}
              </h3>
              <h4 className="font-light text-xs text-gray-500">
                <em>@</em>
                {testimonial.companyName}
              </h4>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
