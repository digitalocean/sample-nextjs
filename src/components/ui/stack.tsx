"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "FoodieDoonie",
    designation: "",
    image:
    "https://cloud.limelight.sh/user_eng/get_media_url/foodiedoonie",
  },
  {
    id: 2,
    name: "ispyronnie",
    designation: "",
    image:
    "https://cloud.limelight.sh/user_eng/get_media_url/ispyronnie",
  },
  {
    id: 3,
    name: "Abhishek Bhatt",
    designation: "",
    image:
    "https://cloud.limelight.sh/user_eng/get_media_url/abhishekbhatt",
  },
  {
    id: 4,
    name: "Swati Gupta",
    designation: "",
    image:
    "https://cloud.limelight.sh/user_eng/get_media_url/swatti gupta",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-stretch justify-start mb-10 ml-16 max-w-7xl mx-auto ">
      <AnimatedTooltip items={people} />
    </div>
  );
}
