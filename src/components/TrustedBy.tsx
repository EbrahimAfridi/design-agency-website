import React from "react";
import Image from "next/image";
import logo1 from "../../public/apple-11.svg";
import logo2 from "../../public/github-2.svg";
import logo3 from "../../public/samsung-8.svg";
import logo4 from "../../public/tesla-9.svg";
import logo5 from "../../public/swiggy-logo-1.svg";
import logo6 from "../../public/star-wars.svg";

const TrustedBy = () => {
  const companies = [
    { logo: logo1 },
    { logo: logo2 },
    { logo: logo3 },
    { logo: logo4 },
    { logo: logo5 },
    { logo: logo6 },
    // Add more companies as needed
  ];

 const allCompanies = [...companies, ...companies];

  return (
    <section className=" mt-5 md:my-10 px-6 md:px-10">
      <h1 className="text-xl sm:text-2xl mb-4 text-center font-semibold">
        Trusted by
      </h1>
      <div className="overflow-hidden relative">
        <div className="flex w-full space-x-10 animate-scroll whitespace-nowrap">
          {allCompanies.map((company, index) => (
            <div key={index} className="flex items-center space-x-2 ">
              <Image
                src={company.logo}
                alt={"company logo"}
                width={100}
                height={100}
                objectFit="cover"
                className="max-w-[200px] mr-14 hover:scale-125 transition-transform duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedBy;
