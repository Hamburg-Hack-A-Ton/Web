"use client";
import { Header, Footer } from ">comp/Header";
import { TextHoverEffect } from ">fx/texthoverfx";
import { Separator } from ">ui/separator";
import { TextAnimate } from ">fx/textAnimate";
import { motion } from "framer-motion";

export const AboutEN = () => {
  return (
    <>
      <Header />
      <main>
        <TextHoverEffect text="About" thick="1" />
        <Separator />
        <motion.section
          key="What"
          className="flex items-start justify-center p-4"
        >
          <TextAnimate
            text="What is a Hackathon?"
            className="text-lg sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl puffin-nerf text-foreground z-20"
          />
        </motion.section>
      </main>
      <Footer />
    </>
  );
};
