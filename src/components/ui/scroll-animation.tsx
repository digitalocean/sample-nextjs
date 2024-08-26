"use client";
import Image from "next/image";
import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SparklesCore } from "./sparkles";

const images = [
  "https://cloud.limelight.sh/user_eng/get_media_url/DeepakShahOfficial",
  "https://cloud.limelight.sh/user_eng/get_media_url/KhushiKaushik",
  "https://cloud.limelight.sh/user_eng/get_media_url/DeepakShah",
  "https://cloud.limelight.sh/user_eng/get_media_url/PvtForareason",
//   "https://cloud.limelight.sh/user_eng/get_media_url/Cameratechi",
  "https://cloud.limelight.sh/user_eng/get_media_url/foodiedoonie",
  "https://cloud.limelight.sh/user_eng/get_media_url/ispyronnie",
  "https://cloud.limelight.sh/user_eng/get_media_url/RamDeshmukh",
  "https://cloud.limelight.sh/user_eng/get_media_url/abhishekbhatt",
  "https://cloud.limelight.sh/user_eng/get_media_url/AvinashRajMalaka",
  "https://cloud.limelight.sh/user_eng/get_media_url/swatti gupta",
  "https://cloud.limelight.sh/user_eng/get_media_url/akan.sha",
  "https://cloud.limelight.sh/user_eng/get_media_url/visualsofaiay",
  "https://cloud.limelight.sh/user_eng/get_media_url/SwamiMuthyala",
  "https://cloud.limelight.sh/user_eng/get_media_url/floatingfish16",
  "https://cloud.limelight.sh/user_eng/get_media_url/AnshulKotiyal",
];

const PerspectiveGrid = () => {
  const grid = useRef<HTMLDivElement | null>(null);
  const gridWrap = useRef<HTMLDivElement | null>(null);

  const { contextSafe } = useGSAP();

  const applyAnimation = contextSafe(() => {
    if (!grid.current || !gridWrap.current) return;

    const timeline = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: ".grid_wrap",
        start: "top bottom+=5%",
        end: "bottom top-=5%",
        scrub: true,
        // markers: true, // Optional: for debugging
      },
    });

    Object.assign(grid.current.style, {
      perspective: "1300px",
      height: "200%",
      width: "115%",
    });

    Object.assign(gridWrap.current.style, {
      width: "105%",
      gridTemplateColumns: "repeat(6, minmax(4, 1fr))",
    });

    timeline
      .set(".grid_item", {
        transformOrigin: "50% 0%",
        z: () => gsap.utils.random(-4000, -2000),
        rotationX: () => gsap.utils.random(-65, -25),
        filter: "brightness(0%)",
      })
      .to(
        ".grid_item",
        {
          xPercent: () => gsap.utils.random(-150, 150),
          yPercent: () => gsap.utils.random(-300, 300),
          rotationX: 0,
          filter: "brightness(200%)",
        },
        0
      )
      .to(
        ".grid_wrap",
        {
          z: 6500,
        },
        0
      )
      .fromTo(".grid_item-inner", { scale: 1.5 }, { scale: 0.5 }, 0);
  });

  useGSAP(
    () => {
      // Register Scroll Triggren
      gsap.registerPlugin(ScrollTrigger);
      window.scrollTo({ top: 0 });
      applyAnimation();
    },
    { scope: grid.current!, dependencies: [] }
  );

  return (
    <div className="z-10 w-full overflow-hidden bg-stone-200 dark:bg-black/[0.1]">
      <div className="relative w-full py-[20vh]">
        <div
          ref={grid}
          className="grid w-full place-items-center"
          style={{ perspective: "1200px" }}
        >
          <div
            ref={gridWrap}
            style={{ transformStyle: "preserve-3d" }}
            className="grid_wrap grid h-auto w-full grid-cols-4 gap-[2vw]"
          >
            {Array(3)
              .fill(images)
              .flat()
              .map((src, index) => (
                <div
                  key={index}
                  className="grid_item relative grid aspect-[1.5] h-auto w-auto place-items-center overflow-hidden"
                >
                  <Image
                    objectFit="contain"
                    src={src}
                    quality={100}
                    fill={true}
                    // style={{ filter: 'grayscale(100%)' }} // Apply grayscale filter
                    className="grid_item-inner relative rounded-full"
                    alt="image"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerspectiveGrid;
