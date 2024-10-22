import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "./ui/button";
import Link from "next/link";

export function SpotLightText() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.0] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight fill="white" />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Next generation platforms done right.
        </h1>
        <br></br>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Limelight is an all-in-one social platform for micro creators in
          India. It combines e-commerce, memberships, and other services into
          one easy-to-use tool, reducing the need for multiple platforms.
        </p>
        <div className="w-full flex items-center justify-center bg-black/[0.0] mt-10 ">
          <Link href="https://your-link.com" passHref>
            <Button>Download Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
