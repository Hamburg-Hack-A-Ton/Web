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
          <motion.div key="hero" className="py-5">
            <motion.div className="w-screen h-screen " key="heroimage">
              <Image
                src="/cdn/placeholder/lg.jpg"
                alt="Hamburg"
                width={1920}
                height={1080}
                data-loadingfinished={isHeroImageLoaded}
                className="bg-slate-800 opacity-10 data-[loadingfinished=true]:bg-transparent data-[loadingfinished=true]:opacity-100 duration-200"
                onLoad={() => setIsHeroImageLoaded(true)}
              />
            </motion.div>
            <motion.div
              className="absolute inset-0 flex flex-col h-screen items-center justify-center text-white"
              initial={{ opacity: 0, y: "0rem" }}
              animate={{
                opacity: 1,
                y: "2rem",
              }}
              transition={{ duration: 0.5 }}
              key="herocontent"
            >
              <motion.h1 className="text-6xl gigalypse" key="h1">
                Welcome to Hamburg Hack A Ton
              </motion.h1>
              <motion.p className="text-2xl omnes " key="p">
                The best place to build projects
              </motion.p>
            </motion.div>
          </motion.div>
          <Card className="flex items-start justify-center p-4">
            <motion.div
              className=" p-4 flex items-start justify-center border-border w-4/5 h-60 border-2 rounded-sm border-spacing-3"
              key="content"
            >
              <AspectRatio
                ratio={2.028}
                style={{ paddingBottom: 0, height: "12.5rem" }}
                className="flex items-center justify-center"
              >
                <MotionImage
                  src="/cdn/placeholder/elphi1.webp"
                  alt="Elbphilharmonie"
                  width={580}
                  height={286}
                  className="rounded-lg border-ring border-4 dark:border-2 cursor-crosshair duration-200"
                  key="pic"
                />
              </AspectRatio>
              <div className="p-4">
                <motion.h1 className="lores text-2xl " key="hellohero">
                  Hello fellow Developers
                </motion.h1>
                <motion.p className="p bernina bold" key="contenthero">
                  Welcome to the Hamburg Hack A Ton! This is a community of
                  developers who love to code and build projects. We are a
                  community of developers who love to code and build projects.
                  We are a community of developers who love to code and build
                  projects.
                </motion.p>
              </div>
            </motion.div>
          </Card>
        </motion.section>
        <div className="w-screen h-screen bg-card" key="placeholder">
          Content
        </div>
        <Footer key="footer" />
      </AnimatePresence>
    </motion.main>
  );
}
