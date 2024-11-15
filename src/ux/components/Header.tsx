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
import { Button } from ">ui/button";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggleButton } from "./Theme";
import { AspectRatio } from "../ui/aspect-ratio";
import { cn } from ">util/twm";
import { applicationPhase } from "@/flags";

export const Header = () => {
  const { scrollY } = useScroll();
  const [showStickyHeader, setStickyShowHeader] = useState(false);

  const MotionLink = motion.create(Link);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest >= 25) {
      setStickyShowHeader(true);
    } else {
      setStickyShowHeader(false);
    }
  });
  return (
    <motion.header key="HeaderWrapper" className="pb-5 sticky top-0 z-10">
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
            whileHover={{ scale: showStickyHeader ? 0.85 : 1.15, opacity: 1 }}
            whileTap={{ scale: showStickyHeader ? 0.8 : 1.1 }}
            key="Logo"
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
              initial={{ opacity: 0, x: 0, y: 5 }}
              animate={{ opacity: 1, x: "4.5rem", y: 7 }}
              exit={{ opacity: 0, x: "5rem", y: -50 }}
              key="Title"
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
          <motion.section
            className="absolute "
            layout
            key="Links"
            animate={{
              y: showStickyHeader ? 0 : 10,
              width: showStickyHeader ? "75%" : "66%",
              right: showStickyHeader ? "0rem" : "3.5rem",
            }}
          >
            <motion.div
              className="right-3 flex items-center p-4 justify-between"
              animate={{ width: "66%" }}
              key="LinkWrapper"
            >
              <AnimatePresence>
                <motion.p
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  key="Links-About"
                >
                  <Link href="/about" prefetch>
                    About
                  </Link>
                </motion.p>
                <motion.p
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  key="Links-Schedules"
                >
                  <Link href="/schedule" prefetch>
                    Schedule
                  </Link>
                </motion.p>
                <motion.p
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  key="Links-Sponsors"
                >
                  <Link href="/sponsors" prefetch>
                    Sponsors
                  </Link>
                </motion.p>
              </AnimatePresence>
            </motion.div>
          </motion.section>
          {true && (
            <motion.div
              key="apply"
              className="absolute right-4 p-2"
              animate={{ y: showStickyHeader ? 0 : 10, x: -5 }}
            >
              <Link href="/register" prefetch>
                Register
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      <motion.div
        className="w-screen h-0 data-[showstickyheader=true]:h-4 duration-200"
        data-showstickyheader={showStickyHeader}
        key="top-header-spacer"
      />
    </motion.header>
  );
};

export const Footer: React.FC<{ className?: string; noFooter?: boolean }> = ({
  className,
  noFooter,
}) => {
  const [isTTVisible, setIsTTVisible] = useState(true);
  const [isDeveloper, setIsDeveloper] = useIsDeveloper();
  const [isFooter, setIsFooter] = useState(false);

  return (
    <>
      {!noFooter && (
        <>
          <motion.div
            key="displacer"
            animate={{ height: isFooter ? "0rem" : "10rem" }}
          ></motion.div>
          {false && (
            <>
              <motion.section
                className={cn(
                  "bottom-16 sticky w-screen flex flex-grow justify-center",
                  className
                )}
                key="devui"
              >
                <Button className="p-4 z-20">
                  <Link prefetch href="/portal">
                    To Dev Portal
                  </Link>
                </Button>
              </motion.section>
              <motion.section
                key="turnOff"
                className={cn(
                  "sticky right-2 bottom-2 bg-transparent justify-end p-4 flex flex-grow items-center text-accent-foreground",
                  className
                )}
              >
                <Tooltip tips="Turn DevMode of?">
                  <Link href="/.well-known/HHAT/devMode/off">
                    <Power />
                  </Link>
                </Tooltip>
              </motion.section>
            </>
          )}
        </>
      )}

      {isTTVisible && (
        <motion.section
          className={cn("bottom-2 left-2 sticky z-10 w-7 h-7", className)}
          initial={{ opacity: 0, scale: 0.5, x: -10 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 3,
            y: isFooter ? "14.7rem" : 5,
          }}
          exit={{ opacity: 0 }}
          whileHover={{ scale: 1.5, y: isFooter ? "14.85rem" : 8, x: 5.5 }}
          whileTap={{ scale: 1.25, y: isFooter ? "14.8rem" : 6, x: 4.5 }}
          transition={{ duration: 0.15 }}
          key="theme-toggle"
        >
          <ThemeToggleButton />
        </motion.section>
      )}
      {!noFooter && (
        <motion.footer key="Footer" className=" text-foreground">
          <motion.section
            className="flex flex-row justify-center  border-t-2 border border-x-0 border-b-0 border-accent"
            animate={{ height: "5rem", alignItems: "start" }}
            whileInView={{ height: "15rem", alignItems: "start" }}
            onViewportEnter={() => setIsFooter(true)}
            onViewportLeave={() => setIsFooter(false)}
          >
            <motion.p
              key="ccHHAT"
              className="text-foreground z-10"
              animate={{
                y: isFooter ? "12.5rem" : "-7.5rem",
              }}
            >
              &copy; {new Date().getFullYear()} Hamburg Hack A Ton
            </motion.p>
          </motion.section>
        </motion.footer>
      )}
    </>
  );
};
