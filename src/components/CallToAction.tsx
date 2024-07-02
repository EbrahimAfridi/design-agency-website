import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const CallToAction = () => {
  return (
    <section className="px-6 md:px-16 my-16 sm:my-20">
      <div
        className="rounded-xl bg-[#f1561b] md:mx-auto md:w-10/12"
        style={{ transform: "rotate(3deg) translateZ(0px)" }}
      >
        <main
          className="md:items-center -mx-4 flex flex-col rounded-xl bg-[#4e3fc9] px-4 py-8 md:py-16"
          style={{ transform: "rotate(-4deg) translateZ(0px)" }}
        >
          <h2 className="mb-1 rotate-1 font-bold text-2xl capitalize text-white md:text-center">
            Grow Your Business with AgencyFlow
          </h2>
          <p className="mb-4 rotate-1 text-lg text-white md:px-16 md:text-center xl:text-xl">
            We can empower your business to thrive in the digital landscape.
            Whether you‘re looking to streamline your processes, enhance
            customer experiences, or drive growth through scalable software
            solutions, we‘ve got you covered.
          </p>
          <Link
            className="rotate-1 md:mx-auto"
            href="https://ebrahimafridi.vercel.app"
            target="blank"
          >
            <Button color="primary" className="bg-black ">
              Let&apos;s Talk
            </Button>
          </Link>
        </main>
      </div>
    </section>
  );
};

export default CallToAction;
