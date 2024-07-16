"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const page = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    const res = await fetch("http://localhost:3000/signup/api", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className=" container mx-auto px-3 my-6 flex justify-around items-center gap-3">
      <div className="hidden md:block">
        <Image
          src="/assets/images/login/login.svg"
          height={100}
          width={500}
          alt="One cartoon is pressing button on a device."
        />
      </div>
      <div className="p-8 md:p-12 rounded-md border-2 w-full md:w-[600px]">
        <h2 className="text-3xl text-center font-semibold text-slate-500 mb-4">
          Sign Up
        </h2>
        <form className=" space-y-3" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="w-full">
            <label htmlFor="name"> Name </label>
            <br />
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="input input-bordered w-full mt-2"
            />
          </div>
          {/* Email */}
          <div className="w-full">
            <label htmlFor="email"> Email </label>
            <br />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full mt-2"
            />
          </div>
          {/* Password */}
          <div className="w-full">
            <label htmlFor="password"> Password </label>
            <br />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full mt-3"
            />
          </div>
          <button className="btn btn-primary w-full">Submit</button>
        </form>
        {/* --Social Links---- */}
        <span className="text-center block my-6 text-sm"> Or Sign up with</span>
        <div className="flex gap-3 justify-center">
          <button className="btn">
            <FaFacebook size={20} className="text-[#3b5998]" />
          </button>
          <button className="btn">
            <FaLinkedinIn size={20} className="text-[#0077B5] " />
          </button>
          <button className="btn">
            <FcGoogle size={20} />
          </button>
        </div>

        <p className="text-center mt-6">
          Already have an account?{" "}
          <Link href={"/signin"} className="text-primary font-medium">
            Signin
          </Link>
        </p>
      </div>
    </div>
  );
};

export default page;
