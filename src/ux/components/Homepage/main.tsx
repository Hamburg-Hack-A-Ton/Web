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

export function RootMain() {
  updateTheme();
  const [isHeroImageLoaded, setIsHeroImageLoaded] = useState(false);

  const MotionImage = motion.create(Image);
  const Card = motion.div;
  return (
    <motion.main className="w-screen h-fit justify-center" layout key="main">
      <AnimatePresence>
        <Header key="header" />
        <motion.section
          className="flex-row items-center left-0 justify-center"
          key="HeroW"
        >
          <motion.div key="hero" className="pb-5">
            <motion.div className="w-screen h-max " key="heroimage">
              <Image
                src="https://cloud-5n3hm5905-hack-club-bot.vercel.app/1lg.jpg"
                alt="Hamburg"
                loading="eager"
                width={1920}
                height={1080}
                data-loadingfinished={isHeroImageLoaded}
                className="bg-slate-800 opacity-10 data-[loadingfinished=true]:bg-transparent data-[loadingfinished=true]:opacity-100 duration-200"
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
              key="herocontent"
              layout
            >
              <motion.h1
                className="text-lg sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl gigalypse z-20"
                key="h1"
              >
                Welcome to Hamburg Hack A Ton
              </motion.h1>
              <motion.p className="text-2xl omnes " key="p">
                The best place to build projects
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.section>
        <div className="pb-5" />
        <div className="flex flex-row items-start justify-center">
          <p className={DefaultText}>
            Disclaimer: This is just an Idea! <br />
            Not Affiliated with Hackclub! <br />
            Not Affiliated with the city of Hamburg!
          </p>
        </div>
        <Footer key="footer" />
      </AnimatePresence>
    </motion.main>
  );
}
