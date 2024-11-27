"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */

import { ThemeToggleButton, updateTheme } from ">comp/Theme";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
import { AspectRatio } from ">ui/aspect-ratio";
import { Footer, Header } from "../Header";
import { TextHoverEffect } from "@/ux/effects/texthoverfx";
import { DefaultText } from "@/ux/util/className";
import SmoothScroll from "../smoothScrool";

export function RootMain() {
  updateTheme();
  const [isHeroImageLoaded, setIsHeroImageLoaded] = useState(false);

  const MotionImage = motion.create(Image);
  const Card = motion.div;
  return (
    <motion.main
      className="w-screen h-fit justify-center"
      layout
      key="main-wrapper"
    >
      <AnimatePresence>
        <Header key="header-component" />
        <motion.section
          className="flex-row items-center left-0 justify-center"
          key="hero-section"
        >
          <motion.div key="hero-outer-container" className="pb-5">
            <motion.div className="w-screen h-max " key="hero-image-container">
              <Image
                src="https://cloud-5n3hm5905-hack-club-bot.vercel.app/1lg.jpg"
                alt="Hamburg"
                loading="eager"
                width={1920}
                height={1080}
                data-loadingfinished={isHeroImageLoaded}
                className="bg-slate-800 opacity-10 data-[loadingfinished=true]:bg-transparent data-[loadingfinished=true]:opacity-100 duration-200"
                key="hero-image"
                onLoad={() => setIsHeroImageLoaded(true)}
              />
            </motion.div>
            <motion.div
              className="absolute inset-0 flex flex-col h-2/4 sm:h-3/5 md:h-4/6 xl:h-screen items-center justify-center text-white duration-200"
              initial={{ opacity: 0, y: "0rem" }}
              animate={{
                opacity: 1,
                y: "2rem",
              }}
              transition={{ duration: 0.5 }}
              key="hero-content-container"
              layout
            >
              <motion.h1
                className="text-lg sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl gigalypse z-20"
                key="main-title"
              >
                Welcome to Hamburg Hack A Ton
              </motion.h1>
              <motion.p className="text-2xl omnes " key="main-subtitle">
                The best place to build projects
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.section>
        <div className="pb-5" key="spacer-div" />
        <div
          className="flex flex-row items-start justify-center"
          key="disclaimer-container"
        >
          <p className={DefaultText}>
            Disclaimer: This is just an Idea! <br />
            Not Affiliated with Hackclub! <br />
            Not Affiliated with the city of Hamburg!
          </p>
        </div>
        <Footer key="footer-component" />
      </AnimatePresence>
    </motion.main>
  );
}
