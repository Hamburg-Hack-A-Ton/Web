import { TextAnimate } from ">ui/TextAnimate";
import React from "react";
import { ThemeToggleButton } from ">comp/Theme";
import { motion } from "framer-motion";

// need to add smth because vercel git integration is not working
const UnderConstruction: React.FC = () => {
  return (
    <main className="bg-background text-foreground h-screen w-screen flex items-center justify-center duration-300">
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
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="oxanium py-1 font-bold text-xl"
          >
            By Jack@DJL
          </motion.p>
        </div>
      </section>
      <section className="absolute bottom-1 left-2">
        <ThemeToggleButton />
      </section>
    </main>
  );
};

export default UnderConstruction;
