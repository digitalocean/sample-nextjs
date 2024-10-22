"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

export function StarCreators() {
  return (
    <div className="h-screen w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white mb-5">
        @DeepakShah
      </p>
      <p className="font-normal text-base text-white"></p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white mb-5">
        @KhushiKaushik
      </p>
      <p className="font-normal text-base text-white"></p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white mb-5">
        @Cameratechi
      </p>
      <p className="font-normal text-base text-white"></p>
    
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white mb-5">
        @PvtForareason
      </p>
      <p className="font-normal text-base text-white"></p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
    "https://cloud.limelight.sh/user_eng/get_media_url/DeepakShah",

  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
    "https://cloud.limelight.sh/user_eng/get_media_url/KhushiKaushik",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:    "https://cloud.limelight.sh/user_eng/get_media_url/Cameratechi",
  
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "https://cloud.limelight.sh/user_eng/get_media_url/PvtForareason",
  }    
];
