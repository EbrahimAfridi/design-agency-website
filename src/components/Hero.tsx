import { Button } from "@nextui-org/button";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="pt-14 px-6 flex flex-col justify-center bg-[#fcfcfc] text-black">
      <header className="max-w-[950px]">
        <h1 className="text-6xl font-bold leading-tight mb-2 sm:mb-4 text-left">
          Crafting exceptional digital experiences for you and your audience.
        </h1>
        <p className="text-zinc-600 capitalize text-lg text-left mb-4 font-medium sm:text-xl xl:text-2xl sm:mb-6">
          A Full-Service, Design-Driven Studio, For Early And Growing Startups
        </p>
        <Link
          href="mailto:afridiebrahimck@gmail.com"
          className="text-inherit decoration-inherit w-full"
        >
          <Button className="sm:text-xl font-medium text-white text-lg gap-2 items-center w-fit flex mr-5 bg-red-700">
            contact@agencyflow{" "}
            <span>
              <ArrowUpRight />
            </span>
          </Button>
        </Link>
      </header>
      <figure className="my relative mt-20 h-60 overflow-hidden rounded bg-gray-200 bg-cover bg-center sm:h-72 md:h-96 md:rounded-xl xl:h-[500px]">
        <Image
          alt="people in a meeting"
          fetchPriority="high"
          width={1512}
          height={800}
          className="h-full w-full object-cover"
          style={{ color: "transparent" }}
          priority={true}
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </figure>
    </section>
  );
};

export default Hero;
