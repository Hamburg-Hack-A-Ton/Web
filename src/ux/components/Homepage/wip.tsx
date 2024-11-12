"use client";
import { TextAnimate } from ">ui/textAnimate";
import React from "react";
import * as motion from "framer-motion/client";
import { cn } from ">util/twm";
import { DefaultText } from ">util/className";
import { Footer } from "../Header";

// need to add smth because vercel git integration is not working
const UnderConstruction: React.FC = () => {
  return (
    <>
      <main
        className={cn(
          DefaultText,
          "bg-background text-foreground h-screen w-screen flex items-center duration-200 justify-center"
        )}
      >
        <section className="flex flex-col items-center duration-200 justify-center">
          <div className="flex py-2 duration-200">
            <TextAnimate
              className="gigalypse text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl text-center duration-200"
              text="Hello, This Website is Currently under Construction!"
            />
          </div>
          <div className="flex flex-row duration-200">
            <motion.p
              initial={{
                opacity: 0,
                y: -10,
                x: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
                x: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.75,
              }}
              className="oxanium py-1 font-bold duration-200 text-xs md:text-xl lg:text-2xl"
            >
              By Jack@DJL
            </motion.p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

UnderConstruction.displayName = "UnderConstruction";
export { UnderConstruction };
