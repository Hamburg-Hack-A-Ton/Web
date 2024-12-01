"use client";
import { Header, Footer } from ">comp/Header";
import { Vortex } from "@/ux/effects/vortex";
import { TextHoverEffect } from "@/ux/effects/texthoverfx";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[calc(100vh-10rem)] overflow-hidden">
          <Vortex
            backgroundColor="black"
            rangeY={800}
            particleCount={500}
            baseHue={120}
            className="flex items-center flex-col justify-center rounded-xl px-2 md:px-10  py-4 w-full h-full"
          >
            <TextHoverEffect
              font="puffin-regular"
              animate={{ y: "-5rem" }}
              thick="2"
              text="Closed"
            />
            <motion.h1 className="bernina text-4xl" animate={{ y: "-10rem" }}>
              Sorry the form is closed
            </motion.h1>
          </Vortex>
        </div>
      </main>
      <Footer noFooter />
    </>
  );
}
