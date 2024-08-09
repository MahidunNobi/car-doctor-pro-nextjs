"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { signIn } from "next-auth/react";

import { useRouter, useSearchParams } from "next/navigation";
import SocialLogin from "@/componants/shared/SocialLogin";
import Navbar from "@/componants/shared/Navbar";
import Footer from "@/componants/shared/Footer";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = searchParams.get("redirect");

  const handleSignin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const res = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: pathName ? pathName : "/",
    });
    console.log(res);
    // if (res.status === 200) {
    //   router.push("/");
    // }
  };
  return (
    <>
      <Navbar />
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
          <form className=" space-y-3" onSubmit={handleSignin}>
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
          <span className="text-center block my-6 text-sm">
            {" "}
            Or signin with
          </span>
          <SocialLogin />

          <p className="text-center mt-6">
            Don&apos;t have an account?{" "}
            <Link href={"/signup"} className="text-primary font-medium">
              Signup
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
