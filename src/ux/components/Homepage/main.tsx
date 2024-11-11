"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */

import { ThemeToggleButton } from ">comp/Theme";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useState } from "react";
import React from "react";
import useIsDeveloper from ">api/auth/vercel/hasAccess";
import { Card, CardContent } from ">ui/card";
import { Button } from ">ui/button";
import Link from "next/link";
import Image from "next/image";
import { AspectRatio } from ">ui/aspect-ratio";

export function RootMain() {
  const [isTTVisible, setIsTTVisible] = useState(true);
  const [isDeveloper, setIsDeveloper] = useIsDeveloper();

  const { scrollY } = useScroll();
  const [showStickyHeader, setStickyShowHeader] = useState(false);
  const MotionImage = motion.create(Image);
  const Card = motion.div;

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setStickyShowHeader(true);
    } else {
      setStickyShowHeader(false);
    }
  });
  return (
    <motion.main className="w-screen h-max justify-center" layout>
      <AnimatePresence>
        <motion.header
          className="h-16 sticky top-0 z-10 bg-background glassblur duration-200 data-[showstickyheader=true]:opacity-50 data-[showstickyheader=true]:h-14"
          data-showstickyheader={showStickyHeader}
          key="top-header"
          initial={{ opacity: 0 }}
          animate={{ opacity: showStickyHeader ? 0.75 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence>
            {(showStickyHeader && <p>Cool Header</p>) || (
              <p>Not so cool Header</p>
            )}
          </AnimatePresence>
        </motion.header>

        <motion.section className="flex-row items-start justify-center">
          <motion.div key="hero">
            <motion.div className="w-screen h-3/5">
              <Image
                src="/cdn/placeholder/lg.jpg"
                alt="Hamburg"
                width={1920}
                height={1080}
                className=""
              />
            </motion.div>
            <motion.div
              className="absolute inset-0 flex flex-col h-3/5 items-center justify-center text-white bg-black bg-opacity-50"
              initial={{ opacity: 0, y: showStickyHeader ? "-0.5rem" : "0rem" }}
              animate={{
                opacity: 1,
                y: showStickyHeader ? "1.5rem" : "2rem",
              }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1 className="text-6xl gigalypse">
                Welcome to Hamburg Hack A Ton
              </motion.h1>
              <motion.p className="text-2xl omnes">
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
                  className="rounded-lg border-ring border-4 dark:border-2 cursor-crosshair"
                />
              </AspectRatio>
              <div className="p-4">
                <motion.h1 className="lores text-2xl ">
                  Hello fellow Developers
                </motion.h1>
                <motion.p className="p bernina bold">
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

        {isDeveloper && (
          <motion.section
            className="absolute bottom-7 w-screen flex flex-grow justify-center"
            key="devui"
          >
            <Card>
              <CardContent>
                <Button>
                  <Link href="/portal">To Dev Portal</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.section>
        )}

        {isTTVisible && (
          <motion.section
            className="bottom-2 left-2 sticky z-10 w-7 h-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            key="theme-toggle"
          >
            <ThemeToggleButton />
          </motion.section>
        )}
      </AnimatePresence>
    </motion.main>
  );
}
