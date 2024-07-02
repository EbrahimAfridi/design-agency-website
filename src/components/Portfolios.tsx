"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useAnimation } from "framer-motion";

const portfolios = [
  {
    id: 1,
    name: "The First The Last",
    image:
      "https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2024/06/665b9050214fd838835419.jpg",
    technologies: ["Next.js", "Motion Framer", "Tailwind CSS"],
    link: "https://13322566869.com/",
  },
  {
    id: 2,
    name: "LOCAL STUDIO",
    image:
      "https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2024/06/665d54271b446950098230.png",
    technologies: ["Next.js", "Supabase", "Tailwind CSS"],
    link: "https://localstudio.fr/",
  },
  {
    id: 3,
    name: "DOCUSIGN BRAND",
    image: "https://assets.awwwards.com/awards/sites_of_the_day/2024/05/g1.jpg",
    technologies: ["React", "shadcn-ui", "Tailwind CSS"],
    link: "https://brand.docusign.com/",
  },
  {
    id: 4,
    name: "ARTIFICIAL-GARAGE",
    image:
      "https://assets.awwwards.com/awards/sites_of_the_day/2024/04/g1-22.jpg",
    technologies: ["next-ui", "Next.js", "Tailwind CSS"],
    link: "https://artificial-garage.com/",
  },
];

const Portfolios = () => {
  const viewRef = React.useRef(null);
  const isInView = useInView(viewRef, { once: true });
  const controls = useAnimation();
  const VARIANTS = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  React.useEffect(() => {
    // Trigger animation when the element is in view
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section className="container-x text-black mb-10 flex flex-col items-start justify-center overflow-hidden rounded-xl py-10 md:mb-20 md:px-32 md:py-20 xl:mb-32">
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
      <main className="grid w-full grid-cols-5 gap-20 gap-y-10 overflow-hidden md:grid-cols-10">
        {portfolios.map((portfolio) => (
          <article
            className="col-span-5 mb-2 shadow hover:shadow-md rounded"
            key={portfolio.id}
          >
            <Link
              href={portfolio.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure className="mb-4 h-72 w-full overflow-hidden rounded-lg  bg-gray-200 md:h-[400px]">
                <div className="overflow-hidden" style={{ height: "100%" }}>
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
              <main className="p-4">
                <h3 className="text-2xl font-bold">{portfolio.name}</h3>
                <ul className="mt-4 flex flex-wrap gap-4 justify-start">
                  {portfolio.technologies.map((technology) => (
                    <li
                      className="rounded-full hover:bg-gray-300 bg-gray-200 px-4 py-1 whitespace-nowrap w-fit font-medium"
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
