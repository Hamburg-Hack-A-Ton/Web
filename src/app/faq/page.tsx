import React from "react";
import FAQ from "~/faq.json";
import { TextHoverEffect } from ">fx/texthoverfx";
import { Separator } from ">ui/separator";
import * as motion from "framer-motion/client";
import { TextAnimate } from ">fx/textAnimate";
import { FAQCategories } from "./handler";

export interface FAQmappable {
  display?: string;
  pages?: {
    [key: string]: {
      display?: string;
      "root-kontext"?: string[];
    };
  };
  subs?: {
    [key: string]: FAQmappable;
  };
}

export interface FAQentry {
  title: string | { [key: string]: string };
  fxheader?: string;
  content?: string;
  msg?: string;
  override?: string;
  "exit-kontext"?: string[];
  showothers?: boolean;
  walkthrough?: {
    back?: string;
    next?: string;
    fine?: string;
  };
  other?: {
    [otherhref: string]: string;
  };
}
export interface FAQdefault {
  title: string;
  fxheader?: string;
  msg?: string;
  hideothers?: boolean;
  "exit-kontext"?: string[];
}

export type FAQentries =
  | string
  | FAQentry
  | FAQdefault
  | { [key: string]: FAQentry }
  | { [key: string]: string }
  | { [key: string]: FAQentries };

export interface FAQtype {
  root: string;
  home: {
    fxheader?: string;
    title: string | string[];
  };
  map: {
    [mapkey: string]: FAQmappable;
  };
  entries: { [entrykey: string]: FAQentries };
  config: {
    branchindicator: string;
    title?: {
      prefix?: string;
      suffix?: string;
    };
  };
}

const faqData: FAQtype = FAQ;

export default function FAQRoot() {
  if (!faqData) {
    return <div>Loading...</div>;
  }

  const getRandomTitle = () => {
    const titles = faqData.home.title;
    if (Array.isArray(titles)) {
      return titles[Math.floor(Math.random() * titles.length)];
    }
    return titles;
  };

  return (
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
          text={getRandomTitle()}
          className="text-lg sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl puffin-nerf text-foreground p-4 z-20"
        />
        <motion.section
          key="content-grid"
          className="grid grid-flow-col grid-rows-1  w-[70%] p-4 m-2 gap-4"
          transition={{ staggerChildren: 1 }}
        >
          <FAQCategories faqData={faqData} />
        </motion.section>
      </motion.section>
    </main>
  );
}
