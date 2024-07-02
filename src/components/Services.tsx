"use client";
import React from "react";
import {
  BarChart2,
  Lightbulb,
  Megaphone,
  Smartphone,
  SquareCode,
  SwatchBook,
} from "lucide-react";
import { useAnimation, useInView, motion, easeInOut, easeIn } from "framer-motion";

const SERVICES = [
  {
    id: 1,
    name: "Product Design",
    description:
      "Transform your brand's digital experience with our expert UI/UX design. Our team crafts stunning interfaces that integrate aesthetics and functionality, while ensuring a delightful user experience.",
    image: <Lightbulb size={30} color="black" />,
  },
  {
    id: 2,
    name: "UI/UX Designing",
    description:
      "Creating or improving products to meet user needs and market demands, using a combination of engineering, design, and marketing.",
    image: <SwatchBook size={30} color="black" />,
  },
  {
    id: 3,
    name: "Web Development",
    description:
      "Whether you need a simple website or a complex e-commerce platform, we have the expertise to meet your unique business needs. Let us help you create a strong online presence and take your business to the next level with our top-notch web development services.",
    image: <SquareCode size={30} color="black" />,
  },
  {
    id: 4,
    name: "Mobile Development",
    description:
      "Our team is dedicated to creating innovative and pixel-perfect Android applications that elevate your brand's digital presence and drive your business forward. Let us help you create a mobile experience that delivers on your business goals with our premium Android development services.",
    image: <Smartphone size={30} color="black" />,
  },
  {
    id: 5,
    name: "Marketing",
    description:
      "Creating or improving products to meet user needs and market demands, using a combination of engineering, design, and marketing.",
    image: <Megaphone size={30} color="black" />,
  },
  {
    id: 6,
    name: "SEO",
    description:
      "Our professional writers specialize in crafting captivating and high-quality copy that engages your audience and drives traffic to your website. We create SEO-friendly content that not only resonates with your target audience but also improves your search engine ranking.",
    image: <BarChart2 size={30} color="black" fill="true" />,
  },
];

const Services = () => {
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
    <section className="mb-10 flex max-w-screen-2xl flex-col items-start justify-center text-white bg-black px-6 py-10 md:mx-10 md:mb-20 md:rounded-xl md:px-12 md:py-20 xl:mb-32">
      <motion.header
        variants={VARIANTS}
        initial="hidden"
        animate={controls}
        transition={{ ease: easeIn, duration: 0.5 }}
        className="mb-12"
        ref={viewRef}
      >
        <h3
          className="mb-2 text-xl font-bold capitalize tracking-wider text-[#9a8dfe]"
          style={{ opacity: "1", transform: "none" }}
        >
          Our Services
        </h3>
        <h2 className="mb-2 text-2xl font-semibold text-gray-100">
          AgencyFlow can help you grow faster.
        </h2>
        <p className="mb-4 text-left text-lg font-medium capitalize text-zinc-300 sm:mb-6 sm:text-xl xl:text-2xl">
          Small Teams Making Great Impact.
        </p>
      </motion.header>
      <main className="w-full grid-container">
        {SERVICES.map((service) => (
          <motion.article
            variants={VARIANTS}
            initial="hidden"
            transition={{ ease: easeInOut, duration: 1 }}
            animate={controls}
            className="col-span-4 mb-4"
            key={service.name}
          >
            <header className="flex flex-col gap-4">
              <figure className="mb-4 w-fit rounded-full bg-gray-200 p-4">
                {service.image}
              </figure>
              <h3 className="mb-1 font-bold text-2xl text-white">
                {service.name}
              </h3>
            </header>
            <p className="text-base font-medium text-zinc-300 md:text-lg">
              {service.description}
            </p>
          </motion.article>
        ))}
      </main>
    </section>
  );
};

export default Services;
