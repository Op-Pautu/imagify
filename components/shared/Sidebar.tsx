"use client";

import { navLinks } from "@/constants";
import { SignedIn } from "@clerk/nextjs";
import Image from "next/image";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="hidden h-screen w-72 bg-white p-5 shadow-md shadow-purple-200/50 lg:flex">
      <div className="flex size-full flex-col gap-4" id="sidebar">
        <Link
          href="/"
          className="flex items-center gap-2 md:py-2"
          id="sidebar-logo"
        >
          <Image
            src="/assets/images/logo-text.svg"
            alt="logo-svg"
            width={180}
            height={28}
          />
        </Link>
        <nav
          id="sidebar-nav"
          className="h-full flex-col justify-between md:flex md:gap-4"
        >
          <SignedIn>
            <ul
              className="hidden w-full flex-col items-start gap-2 md:flex"
              id="sidebar-nav_elements"
            >
              {navLinks.map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li
                    key={link.route}
                    className={`flex-center p-16-semibold w-full whitespace-nowrap rounded-full bg-cover transition-all hover:bg-purple-100 hover:shadow-inner ${
                      isActive
                        ? "bg-purple-gradient text-white"
                        : "text-gray-700"
                    }`}
                  >
                    <Link
                      className="p-16-semibold flex size-full gap-4 p-4"
                      href={link.route}
                    >
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </SignedIn>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
