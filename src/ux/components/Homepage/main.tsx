/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { ThemeToggleButton } from "§comp/Theme";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useState } from "react";
import React from "react";
import useIsDeveloper from "§api/auth/vercel/hasAccess";
import { Card, CardContent } from "§ui/card";
import { Button } from "§ui/button";
import Link from "next/link";
import Image from "next/image";

export default function RootMain() {
  const [isTTVisible, setIsTTVisible] = useState(true);
  const [isDeveloper, setIsDeveloper] = useIsDeveloper();

  const { scrollY } = useScroll();
  const [showStickyHeader, setStickyShowHeader] = useState(false);
  const MotionImage = motion.create(Image);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setStickyShowHeader(true);
    } else {
      setStickyShowHeader(false);
    }
  });
  return (
    <motion.main className="w-screen h-max justify-center">
      <AnimatePresence>
        <motion.header className="h-16">Normal Header</motion.header>

        {showStickyHeader && (
          <motion.header
            className="sticky top-0 h-14 bg-background  text-foreground flex items-center z-100"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div className="absolute left-2">
              <h1>Sticky Header</h1>
            </motion.div>
          </motion.header>
        )}

        <motion.section>
          <motion.div className=" p-4  border-border w-3/4 border-2 rounded-sm border-spacing-3">
            <div className="flex items-top justify-around">
              <MotionImage
                src="/cdn/placeholder/elphi1.webp"
                width={580}
                height={286}
                className="rounded-lg border-ring border-4 dark:border-2 cursor-crosshair"
              />
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
            </div>
          </motion.div>
        </motion.section>

        {isDeveloper && (
          <motion.section className="absolute bottom-7 w-screen flex flex-grow justify-center">
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
            className="bottom-2 left-2 sticky z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ThemeToggleButton />
          </motion.section>
        )}
      </AnimatePresence>
    </motion.main>
  );
}
