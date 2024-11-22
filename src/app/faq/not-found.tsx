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
    <>
      <Header />
      <main>
        <TextHoverEffect
          text="FAQ"
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
            text={"text"}
            className="text-lg sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl puffin-nerf text-foreground p-4 z-20"
          />
          <motion.section
            key="Categories-Wrapper"
            className="flex flex-col items-center justify-center p-4 w-[70%]"
          >
            <motion.section
              key="Categories-Grid"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[70%]"
              transition={{ staggerChildren: 0.1 }}
            >
              <motion.div
                id="categories"
                key="category1"
                className="flex flex-col items-center justify-center p-4"
                initial={{ opacity: 0, y: "-2.5rem" }}
                animate={{ opacity: 1, y: 0 }}
              >
                1
              </motion.div>
              <motion.div
                id="categories"
                key="category2"
                className="flex flex-col items-center justify-center p-4"
                initial={{ opacity: 0, y: "-2.5rem" }}
                animate={{ opacity: 1, y: 0 }}
              >
                2
              </motion.div>
              <motion.div
                id="categories"
                key="category3"
                className="flex flex-col items-center justify-center p-4"
                initial={{ opacity: 0, y: "-2.5rem" }}
                animate={{ opacity: 1, y: 0 }}
              >
                3
              </motion.div>
              <motion.div
                id="categories"
                key="category4"
                className="flex flex-col items-center justify-center p-4"
                initial={{ opacity: 0, y: "-2.5rem" }}
                animate={{ opacity: 1, y: 0 }}
              >
                4
              </motion.div>
              <motion.div
                id="categories"
                key="category5"
                className="flex flex-col items-center justify-center p-4"
                initial={{ opacity: 0, y: "-2.5rem" }}
                animate={{ opacity: 1, y: 0 }}
              >
                5
              </motion.div>
            </motion.section>
          </motion.section>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}
