"use client";
import { Header, Footer } from ">comp/Header";
import { TextHoverEffect } from ">fx/texthoverfx";
import { Separator } from ">ui/separator";
import { Tooltip } from ">ui/tooltip";
import Link from "next/link";
import { motion } from "framer-motion";

export const AboutEN = () => {
  return (
    <>
      <Header />
      <main className="">
        <TextHoverEffect text="About" thick="1" font="puffin-regular" />
        <Separator />
        <motion.section
          key="What"
          className="flex items-center justify-evenly w-[70vw] p-4 translate-x-[15vw]"
        >
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl puffin-foozle text-foreground z-20">
            Hamburg Hack a Ton is a{" "}
            <Tooltip
              tips={
                <>
                  <p className="text-md sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl omnes">
                    What is a Hackathon?
                  </p>
                </>
              }
            >
              <Link
                href="/faq/hackathon"
                className=" underline decoration-wavy decoration-secondary"
              >
                Hackathon
              </Link>
            </Tooltip>
            <br />
            <Tooltip
              tips={
                <>
                  <p className="text-md sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl omnes">
                    Why only Highschoolers?
                  </p>
                </>
              }
            >
              It is a hackathon organized{" "}
              <Link
                href="/faq/hackathon"
                className="underline decoration-wavy decoration-secondary"
              >
                by high schoolers, for high schoolers,
              </Link>
              and aims to inspire
            </Tooltip>
            creativity, innovation, and collaboration <br />
            through the shared lazy mindset of youth. <br />
          </h1>
        </motion.section>
      </main>
      <Footer />
    </>
  );
};
