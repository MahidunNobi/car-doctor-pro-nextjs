"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const router = useRouter();
  const session = useSession();
  const handleSocialLogin = async (provider) => {
    await signIn(provider);
  };
  if (session.status === "authenticated") {
    router.push("/");
  }
  return (
    <div className="flex gap-3 justify-center">
      <button className="btn">
        <FaFacebook size={20} className="text-[#3b5998]" />
      </button>
      <button className="btn">
        <FaLinkedinIn size={20} className="text-[#0077B5] " />
      </button>
      <button onClick={() => handleSocialLogin("google")} className="btn">
        <FcGoogle size={20} />
      </button>
    </div>
  );
};

export default SocialLogin;
