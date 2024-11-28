"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Header, Footer } from ">comp/Header";
import { TextHoverEffect } from ">fx/texthoverfx";
import { Separator } from ">ui/separator";
import * as motion from "framer-motion/client";
import { TextAnimate } from ">fx/textAnimate";
import Link from "next/link";
import { Object as CItem, Group as CGroup } from ">ui/collapse";
import { animate, stagger } from "framer-motion";

export default function FAQRoot() {
  return (
    <main>
      <TextHoverEffect
        text="NF"
        font="lores"
        key="hoverfx"
        thick="1"
        className="w-screen"
      />
      <Separator />
      <motion.section
        key="Content"
        className="flex flex-col items-center justify-center p-4"
      >
        <TextAnimate
          text="Not Found"
          className="text-lg sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl puffin-nerf text-foreground p-4 z-20"
        />
      </motion.section>
    </main>
  );
}
