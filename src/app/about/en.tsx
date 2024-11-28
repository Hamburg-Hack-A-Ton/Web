"use client";

import { Header, Footer } from ">comp/Header";
import { TextHoverEffect } from ">fx/texthoverfx";
import { Separator } from ">ui/separator";
import { motion } from "framer-motion";
import { Tooltip } from ">ui/tooltip";
import Link from "next/link";

const WalkthroughStepsAboutPage = {
  "1": {
    back: "/faq/walkthrough?from=about",
    next: "/faq/walkthrough/2",
  },
  "5": {
    back: "/faq/walkthrough/4",
    next: "/register",
  },
};

export function About({
  lang,
  walkthrough,
  wtstep,
}: {
  lang?: string;
  walkthrough?: boolean;
  wtstep?: number;
}) {
  console.log("Language:", lang);
  console.log("Walkthrough Mode:", walkthrough);
  console.log("Walkthrough Step:", wtstep);
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
                prefetch
              >
                Hackathon
              </Link>
            </Tooltip>
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
                href="/faq/highschoolers"
                className="underline decoration-wavy decoration-secondary"
              >
                by high schoolers, for high schoolers,
              </Link>
              and aims to inspire
            </Tooltip>
            creativity, innovation, and collaboration.
            <br />
            Through hands-on experience and mentorship, participants will learn
            valuable skills in{" "}
            <Tooltip
              tips={
                <>
                  <p className="text-md sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl omnes">
                    What technologies will we use?
                  </p>
                </>
              }
            >
              <Link
                href="/faq/technologies"
                className="underline decoration-wavy decoration-secondary"
                prefetch
              >
                programming, design, and teamwork
              </Link>
            </Tooltip>
            . Join us for an unforgettable weekend of coding, creating, and
            connecting with fellow students who share your passion for
            technology.
          </h1>
        </motion.section>
        {walkthrough &&
          wtstep &&
          WalkthroughStepsAboutPage[
            wtstep.toString() as keyof typeof WalkthroughStepsAboutPage
          ] && (
            <section className="flex flex-row gap-4 p-4 justify-center">
              {WalkthroughStepsAboutPage[
                wtstep.toString() as keyof typeof WalkthroughStepsAboutPage
              ].back && (
                <motion.section
                  key="back"
                  className="p-2 m-2 text-xl rounded-xl bg-card tinyblur shadow-md shadow-muted border-1 border-muted"
                >
                  <Link
                    href={
                      WalkthroughStepsAboutPage[
                        wtstep.toString() as keyof typeof WalkthroughStepsAboutPage
                      ].back
                    }
                    prefetch
                  >
                    <p className="bernina">Back</p>
                  </Link>
                </motion.section>
              )}
              {WalkthroughStepsAboutPage[
                wtstep.toString() as keyof typeof WalkthroughStepsAboutPage
              ].next && (
                <motion.section
                  key="next"
                  className="p-2 m-2 text-xl rounded-xl bg-card tinyblur shadow-md shadow-muted border-1 border-muted"
                >
                  <Link
                    href={
                      WalkthroughStepsAboutPage[
                        wtstep.toString() as keyof typeof WalkthroughStepsAboutPage
                      ].next
                    }
                    prefetch
                  >
                    <p className="bernina">Next</p>
                  </Link>
                </motion.section>
              )}
            </section>
          )}
      </main>
      <Footer />
    </>
  );
}
