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
          "bg-background text-foreground h-screen w-screen flex items-center justify-center"
        )}
      >
        <section className="flex flex-col items-center justify-center">
          <div className="flex py-2">
            <TextAnimate
              className="gigalypse text-5xl text-center"
              text="Hello, This Website is Currently under Construction!"
            />
          </div>
          <div className="flex flex-row">
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
              className="oxanium py-1 font-bold text-xl"
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
