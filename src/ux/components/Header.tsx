"use client";
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
import { Pivot as Hamburger } from "hamburger-react";
import { cn } from ">util/twm";
import { HoverEffect } from "../effects/hovercards";
// import { TextCalc } from "../Interested";

import { Application, Register } from "§";

export const Header = () => {
  const { scrollY } = useScroll();
  const [showStickyHeader, setStickyShowHeader] = useState(false);
  const [showHeaderBorder, setShowHeaderBorder] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  const MotionLink = motion.create(Link);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest >= 25) {
      setStickyShowHeader(true);
    } else {
      setStickyShowHeader(false);
    }
  });
  return (
    <motion.header
      key="HeaderWrapper"
      data-popupopen={popupOpen}
      className="data-[popupopen=false]:pb-5 sticky top-0 z-10"
    >
      <motion.header
        className=" h-20 sticky backdrop-blur-lg top-0 z-10 bg-background glassblur border-accent data-[popupopen=true]:border-b-2 duration-200 data-[showstickyheader=true]:data-[popupopen=false]:opacity-50 data-[showstickyheader=true]:data-[popupopen=false]:h-16 data-[popupopen=true]:h-96 flex items-center "
        data-showstickyheader={showStickyHeader}
        data-popupopen={popupOpen}
        key="top-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: showStickyHeader && !popupOpen ? 0.75 : 1 }}
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
              scale: showStickyHeader && !popupOpen ? 0.75 : 1,
              top: showStickyHeader && !popupOpen ? "0.15rem" : "1rem",
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
          {!showStickyHeader && !popupOpen && (
            <motion.h1
              className="px-3"
              initial={{ opacity: 0, x: 0, y: 5 }}
              animate={{ opacity: 1, x: "4.5rem", y: 7, width: "30%" }}
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
              className="right-3 flex items-center p-4 justify-between max-sm:hidden duration-200"
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
                <motion.p
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  key="Links-FAQ"
                >
                  <Link href="/faq" prefetch>
                    FAQ
                  </Link>
                </motion.p>
              </AnimatePresence>
            </motion.div>
          </motion.section>
          {Application && (
            <motion.div
              key="apply"
              className="absolute right-4 p-2 max-sm:hidden"
              animate={{ y: showStickyHeader ? 0 : 10, x: -5 }}
            >
              <Link href="/register" prefetch>
                {Register ? "Register" : "Interested?"}
              </Link>
            </motion.div>
          )}
          <motion.div
            className="sm:hidden absolute right-4 data-[popupopen=true]:top-2 p-2 duration-200"
            data-popupopen={popupOpen}
            key="hamburgerbutton"
            initial={{ x: -10 }}
            animate={{ x: 0, y: showStickyHeader && !popupOpen ? 0 : 10 }}
          >
            <Hamburger toggled={popupOpen} onToggle={setPopupOpen} />
          </motion.div>
          <motion.div
            key="exheadercontent"
            data-popupopen={popupOpen}
            className="flex items-center justify-evenly w-48 data-[popupopen=true]:w-screen duration-200"
            animate={{
              opacity: popupOpen ? 1 : 0,
              x: popupOpen ? "0rem" : "10rem",
            }}
          >
            <AnimatePresence>
              {popupOpen && (
                <motion.p
                  initial={{ y: 10, opacity: 0, x: "-5rem" }}
                  animate={{ y: 0, opacity: 1, x: 0 }}
                  exit={{ y: -10, opacity: 0, x: "-5rem" }}
                  transition={{ delay: 0.5 }}
                  key="Links-About2"
                >
                  <Link href="/about" prefetch>
                    About
                  </Link>
                </motion.p>
              )}
              {popupOpen && (
                <motion.p
                  initial={{ y: 10, opacity: 0, x: "-5rem" }}
                  animate={{ y: 0, opacity: 1, x: 0 }}
                  exit={{ y: -10, opacity: 0, x: "-5rem" }}
                  transition={{ delay: 0.5 }}
                  key="Links-Schedules2"
                >
                  <Link href="/schedule" prefetch>
                    Schedule
                  </Link>
                </motion.p>
              )}
              {popupOpen && (
                <motion.p
                  initial={{ y: 10, opacity: 0, x: "-5rem" }}
                  animate={{ y: 0, opacity: 1, x: 0 }}
                  exit={{ y: -10, opacity: 0, x: "-5rem" }}
                  transition={{ delay: 0.5 }}
                  key="Links-Sponsors2"
                >
                  <Link href="/sponsors" prefetch>
                    Sponsors
                  </Link>
                </motion.p>
              )}
              {popupOpen && (
                <motion.p
                  initial={{ y: 10, opacity: 0, x: "-5rem" }}
                  animate={{ y: 0, opacity: 1, x: 0 }}
                  exit={{ y: -10, opacity: 0, x: "-5rem" }}
                  transition={{ delay: 0.5 }}
                  key="Links-FAQ2"
                >
                  <Link href="/faq" prefetch>
                    FAQ
                  </Link>
                </motion.p>
              )}
              {popupOpen && Application && (
                <motion.p
                  initial={{ y: 10, opacity: 0, x: "-5rem" }}
                  animate={{ y: 0, opacity: 1, x: 0 }}
                  exit={{ y: -10, opacity: 0, x: "-5rem" }}
                  transition={{ delay: 0.5 }}
                  key="Links-Register2"
                >
                  <Link href="/register" prefetch>
                    {Register ? "Register" : "Interested?"}
                  </Link>
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </motion.header>
      <motion.div
        className="w-screen h-0 data-[showstickyheader=true]:data-[popupopen=false]:h-4 duration-200"
        data-showstickyheader={showStickyHeader}
        data-popupopen={popupOpen}
        key="top-header-spacer"
      />
    </motion.header>
  );
};

export const Footer: React.FC<{ className?: string; noFooter?: boolean }> = ({
  className,
  noFooter,
}) => {
  const [isTTVisible] = useState(true);
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
            className="flex flex-row justify-evenly  border-t-2 border border-x-0 border-b-0 border-accent p-4"
            animate={{ height: "5rem", alignItems: "start" }}
            whileInView={{ height: "15rem", alignItems: "start" }}
            onViewportEnter={() => setIsFooter(true)}
            onViewportLeave={() => setIsFooter(false)}
            key="FooterContentzz"
          >
            {isFooter && (
              <motion.section
                key="FooterLinks"
                className="max-lg:grid max-lg:grid-rows-3 max-lg:grid-cols-2  lg:flex  lg:flex-col items-center justify-evenly h-48 p-4"
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-10rem", opacity: 0 }}
              >
                <motion.h1
                  key="Footer-Title"
                  className="lores max-lg:col-start-1 max-lg:col-span-2 text-3xl max-sm:text-lg max-md:text-xl max-sm:flex max-sm:items-center max-sm:justify-center duration-200"
                  initial={{ y: "-2.5rem", opacity: 0 }}
                  animate={{ y: "0rem", opacity: 1 }}
                  transition={{ delay: 0 }}
                >
                  Quick Links
                </motion.h1>
                <motion.p
                  key="Footer-About"
                  className="p-1 hover:underline"
                  initial={{ y: "-2.5rem", opacity: 0 }}
                  animate={{ y: "0rem", opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Link href="/about" prefetch>
                    About
                  </Link>
                </motion.p>
                <motion.p
                  key="Footer-Schedule"
                  className="p-1 hover:underline"
                  initial={{ y: "-2.5rem", opacity: 0 }}
                  animate={{ y: "0rem", opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link href="/schedule" prefetch>
                    Schedule
                  </Link>
                </motion.p>
                <motion.p
                  key="Footer-Sponsors"
                  className="p-1 hover:underline"
                  initial={{ y: "-2.5rem", opacity: 0 }}
                  animate={{ y: "0rem", opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <Link href="/sponsors" prefetch>
                    Sponsors
                  </Link>
                </motion.p>
                <motion.p
                  key="Footer-FAQ"
                  className="p-1 hover:underline"
                  initial={{ y: "-2.5rem", opacity: 0 }}
                  animate={{ y: "0rem", opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <Link href="/faq" prefetch>
                    FAQ
                  </Link>
                </motion.p>
                {Application && (
                  <motion.p
                    key="Footer-Register"
                    className="p-1 hover:underline"
                    initial={{ y: "-2.5rem", opacity: 0 }}
                    animate={{ y: "0rem", opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    <Link href="/register" prefetch>
                      {Register ? "Register" : "Interested?"}
                    </Link>
                  </motion.p>
                )}
              </motion.section>
            )}
            <motion.p
              key="ccHHAT"
              className="text-foreground z-10"
              animate={{
                y: isFooter ? "11.5rem" : "-7.5rem",
              }}
              transition={{ delay: 0.1 }}
            >
              &copy; {new Date().getFullYear()} Hamburg Hack A Ton
            </motion.p>
            {isFooter && (
              <motion.section
                key="Footer-SponsorsnJack"
                className="flex flex-col items-center justify-evenly h-48 p-4"
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-10rem", opacity: 0 }}
              >
                <motion.h1
                  key="FooterS-Title"
                  className="lores text-3xl max-sm:text-lg max-md:text-xl max-lg:decoration-wavy max-lg:underline duration-200"
                  initial={{ y: "-2.5rem", opacity: 0 }}
                  animate={{ y: "0rem", opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link href="/sponsors" prefetch>
                    Sponsors
                  </Link>
                </motion.h1>
                <motion.section
                  className="flex items-center justify-center max-lg:hidden"
                  key="FooterSponsors"
                  initial={{ y: "-2.5rem", opacity: 0 }}
                  animate={{ y: "0rem", opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Tooltip
                    className="w-64 h-20 flex items-center justify-center"
                    tips={
                      <>
                        <Link href="/sponsors/apply" prefetch>
                          Do you Want to Become a Sponsor?
                        </Link>
                      </>
                    }
                  >
                    <HoverEffect
                      items={sponsors}
                      key="SponsorHFX"
                      className="w-64 h-24 max-lg:hidden duration-200  px-4"
                    />
                  </Tooltip>
                </motion.section>
                <motion.h1
                  key="FooterA-Title"
                  className="lores text-3xl max-sm:text-lg max-md:text-xl max-lg:decoration-wavy  max-lg:underline duration-200"
                  initial={{ y: "-2.5rem", opacity: 0 }}
                  animate={{ y: "0rem", opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link href="/team" prefetch>
                    Team
                  </Link>
                </motion.h1>
                <motion.section
                  className="flex items-center justify-center max-lg:hidden"
                  key="team"
                >
                  <Link href="/team" prefetch>
                    <motion.p
                      initial={{ y: "-2.5rem", opacity: 0 }}
                      animate={{ y: "0rem", opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      Jack Ruder
                    </motion.p>
                  </Link>
                </motion.section>
              </motion.section>
            )}
          </motion.section>
        </motion.footer>
      )}
    </>
  );
};

const sponsors = [
  {
    href: "https://example.com",
    bg: "/cdn/sponsors/placeholder/cool.svg",
  },
  {
    href: "https://example.com",
    bg: "/cdn/sponsors/placeholder/triangles.svg",
  },
  {
    href: "https://example.com",
    bg: "/cdn/sponsors/placeholder/rainbow.svg",
  },
];
