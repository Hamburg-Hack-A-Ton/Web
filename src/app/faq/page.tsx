import React from "react";
import { Header, Footer } from ">comp/Header";
import qaData from "~/qa.json";
import { TextHoverEffect } from ">fx/texthoverfx";
import { Separator } from ">ui/separator";
import * as motion from "framer-motion/client";
import { TextAnimate } from ">fx/textAnimate";
import Link from "next/link";

export default function QnaMainPage() {
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
            text="Frequently asked questions"
            className="text-lg sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl puffin-nerf text-foreground p-4 z-20"
          />
          <ul className="text-lg p-2 grid grid-cols-4">
            {Object.entries(qaData).map(([key, value]) => (
              <li key={key} className="p-2 m-4 border border-accent rounded-xl">
                <Link href={`/faq/${key}`} prefetch>
                  {value.title}
                </Link>
              </li>
            ))}
          </ul>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}
