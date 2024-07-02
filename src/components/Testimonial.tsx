import React from "react";

const TESTIMONIALS = [
  {
    id: 1,
    message:
      "I needed a website that could effectively showcase our services and expertise in the tech industry. AgencyFlow was able to deliver exactly what we needed and more.",
    customerName: "John Doe",
    companyName: "Apple",
  },
  {
    id: 2,
    message:
      "I just have to say, working with AgencyFlow was such a fantastic experience! Their team of experts took our website to the next level, creating a stunning design that perfectly represents our brand.",
    customerName: "Jane Doe",
    companyName: "GitHub",
  },
  {
    id: 3,
    message:
      "AgencyFlow impressed us with their impressive UX/UI design skills and app development expertise. Their team was highly professional, communicative, and flexible in accommodating our unique requirements. They greatly improved our online presence and we highly recommend their services.",
    customerName: "John Smith",
    companyName: "Tesla",
  },
];

const Testimonial = () => {
  return (
    <section className="w-full px-16 overflow-hidden py-6 md:py-8 lg:py-12">
      <header className="mb-8">
        <h3 className="text-4xl font-bold text-black">People ❤️ AgencyFlow</h3>
        <p className="text-gray-500 mt-3 sm:mt-4 font-medium text-2xl">
          AgencyFlow has built products for scale and can serve hundreds of
          millions of monthly users.
        </p>
      </header>
      <div>
        <div className="flex flex-col md:flex-row gap-4">
          {TESTIMONIALS.map((testimonial) => (
            <article
              key={testimonial.id}
              className="text-black border border-gray-200 p-4 max-w-md h-fit items-stretch rounded-xl hover:shadow-md"
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
