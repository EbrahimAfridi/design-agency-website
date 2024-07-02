import { Button } from "@nextui-org/react";
import React from "react";

const ContactForm = () => {
  return (
    <section className="px-8 md:px-16 flex flex-col lg:flex-row justify-between my-10 md:my-20">
      <article>
        <h3 className="tracking-wider text-secondary-400 mb-2 text-xl font-bold">
          Contact Us
        </h3>
        <p className="text-2xl text-black font-semibold mb-2">
          Get in touch with our friendly team.
        </p>
        <p className="text-lg sm:text-2xl text-gray-600 font-medium">
          Small Teams Making Great Impact.
        </p>
      </article>
      <form className="flex flex-col lg:w-5/12 lg:px-4 mb-4 md:mb-8 mt-8">
        <div className="flex lg:justify-between gap-3 mb-2 md:mb-4">
          <label
            htmlFor="name"
            className="text-md flex flex-col font-normal text-black"
          >
            First Name
            <input
              type="text"
              id="name"
              name="name"
              className="border-form-stroke w-full rounded border-2 border-transparent bg-gray-200 p-3 text-black placeholder-[#929DA7]  outline-none transition-all focus:border-blue-700 focus:bg-transparent active:border-blue-700 disabled:cursor-default disabled:bg-[#F5F7FD] pl-4"
            />
          </label>
          <label
            htmlFor="name"
            className="text-md flex flex-col font-normal text-black"
          >
            Last Name
            <input
              type="text"
              id="name"
              name="name"
              className="border-form-stroke w-full rounded border-2 border-transparent bg-gray-200 p-3 text-black placeholder-[#929DA7]  outline-none transition-all focus:border-blue-700 focus:bg-transparent active:border-blue-700 disabled:cursor-default disabled:bg-[#F5F7FD] pl-4"
            />
          </label>
        </div>
        <label
          htmlFor="email"
          className="text-md flex flex-col font-normal text-black mb-2 md:mb-4"
        >
          Email
          <input
            type="email"
            id="email"
            name="email"
            className="border-form-stroke w-full rounded border-2 border-transparent bg-gray-200 p-3 text-black placeholder-[#929DA7]  outline-none transition-all focus:border-blue-700 focus:bg-transparent active:border-blue-700 disabled:cursor-default disabled:bg-[#F5F7FD] pl-4"
          />
        </label>
        <label
          htmlFor="number"
          className="mb-2 md:mb-4 text-md flex flex-col font-normal text-black"
        >
          Phone Number
          <input
            type="tel"
            id="number"
            name="number"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
            className="border-form-stroke w-full rounded border-2 border-transparent bg-gray-200 p-3 text-black placeholder-[#929DA7]  outline-none transition-all focus:border-blue-700 focus:bg-transparent active:border-blue-700 disabled:cursor-default disabled:bg-[#F5F7FD] pl-4"
          />
        </label>
        <label
          htmlFor="number"
          className="mb-2 md:mb-4 text-md flex flex-col font-normal text-black"
        >
          Message
          <textarea
            id="number"
            name="number"
            rows={3}
            cols={32}
            required
            className="border-form-stroke w-full rounded border-2 border-transparent bg-gray-200 p-3 text-black placeholder-[#929DA7]  outline-none transition-all focus:border-blue-700 focus:bg-transparent active:border-blue-700 disabled:cursor-default disabled:bg-[#F5F7FD] pl-4"
          />
        </label>
        <Button type="submit" className="w-full rounded text-white bg-[#4e3fca] py-2 font-medium">
          Send us a Message
        </Button>
      </form>
    </section>
  );
};

export default ContactForm;
