import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const page = () => {
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
          Sign In
        </h2>
        <form className=" space-y-3">
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
        <span className="text-center block my-6 text-sm"> Or signin with</span>
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
          Don&apos;t have an account?{" "}
          <Link href={"/signup"} className="text-primary font-medium">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default page;
