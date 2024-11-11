/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Tooltip } from ">ui/tooltip";
import { Power } from "react-feather";
import useIsDeveloper from ">api/auth/vercel/hasAccess";
import { Card, CardContent } from ">ui/card";
import { Button } from ">ui/button";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggleButton } from "./Theme";
import { AspectRatio } from "../ui/aspect-ratio";

export const Header = () => {
  const { scrollY } = useScroll();
  const [showStickyHeader, setStickyShowHeader] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest >= 80) {
      setStickyShowHeader(true);
    } else {
      setStickyShowHeader(false);
    }
  });
  return (
    <>
      <motion.header
        className=" h-20 sticky backdrop-blur-lg top-0 z-10 bg-background glassblur duration-200 data-[showstickyheader=true]:opacity-50 data-[showstickyheader=true]:h-16 flex items-center "
        data-showstickyheader={showStickyHeader}
        key="top-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: showStickyHeader ? 0.75 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        layout
      >
        {/* Problem: Need Animate Pressence
        Fix: Add If Statement multiple times */}
        <AnimatePresence>
          <motion.div
            className="h-16 w-16 absolute left-2 z-50"
            initial={{ x: -10, opacity: 0, scale: 0.5 }}
            animate={{
              x: 0,
              y: 0,
              opacity: 1,
              scale: showStickyHeader ? 0.75 : 1,
              top: showStickyHeader ? "0.15rem" : "1rem",
            }}
            whileHover={{ scale: showStickyHeader ? 0.9 : 1.15, opacity: 1 }}
          >
            <Link href="/" prefetch>
              <AspectRatio ratio={1}>
                <Image
                  src="/cdn/brand/Logo.png"
                  alt="Hamburg Hack A Ton Logo"
                  width={500}
                  height={500}
                  className="h-16 w-16"
                />
              </AspectRatio>
            </Link>
          </motion.div>
          {!showStickyHeader && (
            <motion.h1
              className="px-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: "4.5rem" }}
            >
              <Link
                href="/"
                className="flex-row items-center justify-items-start z-10"
                prefetch
              >
                <p>Hamburg</p>
                <p>Hack A Ton</p>
              </Link>
            </motion.h1>
          )}
        </AnimatePresence>
      </motion.header>
      <motion.div
        className="w-screen h-0 data-[showstickyheader=true]:h-4 duration-200"
        data-showstickyheader={showStickyHeader}
        key="top-header-spacer"
      />
    </>
  );
};

export const Footer = () => {
  const [isTTVisible, setIsTTVisible] = useState(true);
  const [isDeveloper, setIsDeveloper] = useIsDeveloper();

  return (
    <>
      {isDeveloper && (
        <>
          <motion.section
            className="bottom-16 sticky w-screen flex flex-grow justify-center"
            key="devui"
          >
            <Button className="p-4">
              <Link prefetch href="/portal">
                To Dev Portal
              </Link>
            </Button>
          </motion.section>
          <motion.section
            key="turnOff"
            className="sticky right-2 bottom-2 bg-transparent justify-end p-4 flex flex-grow items-center text-accent-foreground"
          >
            <Tooltip tips="Turn DevMode of?">
              <Link href="/.well-known/HHAT/devMode/off">
                <Power />
              </Link>
            </Tooltip>
          </motion.section>
        </>
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
    </>
  );
};
