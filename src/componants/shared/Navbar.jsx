"use client";
import Image from "next/image";
import Link from "next/link";
import { IoCartOutline, IoSearch } from "react-icons/io5";
import React from "react";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "My Bookings",
      path: "/my-bookings",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  const session = useSession();
  return (
    <div className=" bg-base-100 ">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    className="hover:text-primary duration-200 font-medium text-sm"
                    href={item.path}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link href={"/"}>
            {" "}
            <Image
              src={"/assets/logo.svg"}
              height={60}
              width={100}
              alt="LOGO"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                className="hover:text-primary duration-200 font-medium text-sm"
                key={item.path}
                href={item.path}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="navbar-end flex gap-2">
          <IoCartOutline size={22} />
          <IoSearch size={22} />
          <a className="btn btn-outline btn-primary px-4 md:px-6 hover:text-white">
            Appointment
          </a>
          {session.data ? (
            <button onClick={() => signOut()} className="btn btn-primary">
              Sign out
            </button>
          ) : (
            <Link href={"/signin"} className="btn btn-primary">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
