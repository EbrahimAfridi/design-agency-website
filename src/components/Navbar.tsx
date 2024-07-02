"use client";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { motion } from "framer-motion";

const NavbarUI = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Services", "Blog"];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      className="flex items-center border-gray-200 border-b-2 bg-[#fcfcfc] text-black py-3"
    >
      <NavbarBrand className="flex gap-4 md:gap-10 items-baseline">
        <Link
          href="https://ebrahimafridi.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl md:text-3xl font-sans font-semibold text-inherit"
        >
          AgencyFlow
        </Link>
        <div className="md:flex gap-2 md:gap-4  hidden">
          <Link
            href="https://ebrahimafridi.vercel.app"
            target="blank"
            className="text-md md:text-lg font-sans font-medium text-zinc-600"
          >
            Services
          </Link>
          <Link
            href="https://ebrahimafridi.vercel.app"
            target="blank"
            className="text-md md:text-lg font-sans font-medium text-zinc-600"
          >
            Blogs
          </Link>
        </div>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarItem>
          <Link href="https://ebrahimafridi.vercel.app" target="blank">
            <Button
              color="danger"
              className="font-medium text-lg bg-red-700 md:inline hidden"
            >
              Contact us
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="mt-6 bg-white ">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full font-semibold hover:text-blue-500 text-black"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarUI;
