"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useAnimation } from "framer-motion";
import { PORTFOLIOS } from "@/constants";

const Portfolios = () => {
  const viewRef = React.useRef(null);
  const isInView = useInView(viewRef, { once: true });
  const controls = useAnimation();
  const VARIANTS = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    // Trigger animation when the element is in view
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section
      className="text-black flex flex-col items-start justify-center overflow-hidden rounded-xl 
    px-10 sm:px-20 md:px-32 py-10 md:py-20 mb-10 md:mb-20 xl:mb-32"
    >
      <header className="mb-6 md:mb-12">
        <motion.h3
          ref={viewRef}
          className="mb-2 text-xl font-bold uppercase tracking-wider text-secondary"
          variants={VARIANTS}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1 }}
        >
          Our Portfolio
        </motion.h3>
        <motion.h2
          ref={viewRef}
          variants={VARIANTS}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1 }}
          className="mb-2 text-2xl font-semibold text-black"
        >
          Our Latest Works.
        </motion.h2>
      </header>
      <main className="grid w-full grid-cols-1 lg:grid-cols-2 gap-20 gap-y-10 overflow-hidden">
        {PORTFOLIOS.map((portfolio) => (
          <article
            className="w-full col-span-1 mb-2 shadow hover:shadow-md rounded"
            key={portfolio.id}
          >
            <Link
              href={portfolio.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure className="mb-4 h-72 w-full overflow-hidden rounded-lg  bg-gray-200 md:h-[400px]">
                <div
                  className="overflow-hidden max-w-full"
                  style={{ height: "100%" }}
                >
                  <Image
                    alt={portfolio.name}
                    className="relative h-72 w-full scale-105 object-cover md:h-[400px] md:transition duration-1000 ease-in-out hover:scale-100"
                    style={{ color: "transparent" }}
                    src={portfolio.image}
                    width={400}
                    height={400}
                  />
                </div>
              </figure>
              <main className="p-4 max-w-fit">
                <h3 className="text-lg md:text-2xl font-bold">
                  {portfolio.name}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-4 justify-start">
                  {portfolio.technologies.map((technology) => (
                    <li
                      className="rounded-full hover:bg-gray-300 bg-gray-200 px-2 md:px-4 py-1 whitespace-nowrap w-fit font-medium"
                      key={technology}
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </main>
            </Link>
          </article>
        ))}
      </main>
    </section>
  );
};

export default Portfolios;