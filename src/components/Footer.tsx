import { Copyright, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 md:gap-16 bg-black px-8 lg:px-16 py-10">
      <div className="flex flex-col md:flex-row justify-normal  md:justify-between items-center flex-wrap gap-6">
        <p className="flex gap-2 items-center  text-white font-medium text-xl">
          <Mail size={22} />
          <Link href="mailto:afridiebrahimck@gmail.com">
            contact@agencyflow.com
          </Link>
        </p>
        <div className="font-medium text-white text-xl flex md:flex-row flex-col gap-6 md:gap-8 flex-wrap text-center">
          <Link href="https://x.com/EbrahimAfridi3" target="blank">
            twitter
          </Link>
          <Link
            href="https://www.linkedin.com/in/ebrahim-afridi-83188b219/"
            target="blank"
          >
            linkedin
          </Link>
          <Link href="https://ebrahimafridi.vercel.app" target="blank">
            behanced
          </Link>
          <Link href="https://ebrahimafridi.vercel.app" target="blank">
            dribble
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="flex gap-1 items-center text-white font-medium text-lg">
          <Copyright size={20} />
          <Link href="mailto:afridiebrahimck@gmail.com">
            AgencyFlow. All right reserved.
          </Link>
        </p>
        <div className="font-medium text-white text-xl flex flex-col md:flex-row gap-4 md:gap-8">
          <p>Privacy</p>
          <p>Terms</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
