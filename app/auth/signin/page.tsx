"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";

const page = () => {
  const actionIn = (formData: FormData) => {
    const email = formData.get("email");
    const password = formData.get("password");

    const res = signIn("credentials", { email, password });

    console.log("reading: ", res);
  };

  return (
    <div className="w-[100%] h-screen flex justify-center items-center">
      <div className=" w-[85%] md:w-[500px] rounded-md min-h-[300px] border p-4">
        <p className="font-bold">Sign in as Agent</p>
        <form action={actionIn} className="mt-10">
          <div className="flex flex-col mb-4">
            <label className="text-[12px] font-semibold">Email</label>
            <input
              name="email"
              className="border h-[45px] w-[100%] rounded-md mt-1 px-2"
              placeholder="Enter Your Email"
              type="email"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-[12px] font-semibold">Password</label>
            <input
              name="password"
              className="border h-[45px] w-[100%] rounded-md mt-1 px-2"
              placeholder="Enter Your Password"
              type="password"
            />
          </div>

          <button
            type="submit"
            className="mt-5 bg-blue-950 text-white flex w-[100%] h-[50px] rounded-md justify-center items-center"
          >
            Sign in
          </button>
          <div className="flex w-full justify-center items-center mt-5">
            Don't have an Account,{" "}
            <Link
              href="/auth/register"
              className="text-blue-950 font-bold ml-1 underline"
            >
              Register Here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
