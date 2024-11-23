/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Header, Footer } from ">comp/Header";
import { TextHoverEffect } from ">fx/texthoverfx";
import { Separator } from ">ui/separator";
import * as motion from "framer-motion/client";
import { TextAnimate } from ">fx/textAnimate";
import FAQ from "~/faq.json";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata, ResolvingMetadata } from "next";
import { redirect } from "next/navigation";
import {
  FAQtype,
  FAQdefault,
  FAQentries,
  FAQentry,
  FAQmappable,
} from "../page";
const faqData: FAQtype = FAQ;

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const sparams = await searchParams;
  const map = await faqData.map;
  const entries = await faqData.entries;
  const here = await entries[slug];
  const doublecc = await faqData.config.branchindicator;
  const inner = (here as any)[doublecc]
    ? await (here as any)[doublecc]
    : "notfound";

  return {
    title:
      faqData.config.title?.prefix +
      " " +
      getCorrectTitle(inner, sparams) +
      " " +
      faqData.config.title?.suffix,
  };
}

const getCorrectTitle = (inner: FAQentry, sparams: any) => {
  const title = inner?.title;
  if (typeof title === "string") {
    return title;
  } else if (sparams.title) {
    if (
      typeof inner?.title === "object" &&
      sparams.title &&
      inner?.title[sparams.title]
    ) {
      return inner.title[sparams.title];
    } else {
      return sparams.title;
    }
  } else if (typeof title === "object") {
    const keys = Object.keys(title);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return title[randomKey];
  } else {
    return inner?.title;
  }
};

export default async function FAQPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { slug } = await params;
  const sparams = await searchParams;
  const map = await faqData.map;
  const entries = await faqData.entries;
  const here = await entries[slug];
  const doublecc = await faqData.config.branchindicator;
  const inner = (here as any)[doublecc]
    ? await (here as any)[doublecc]
    : "notfound";

  if (!faqData) {
    return (
      <div className="w-full h-full flex items-center justify-center text-3xl">
        Loading...
      </div>
    );
  }
  // console.log(params);
  // console.log(sparams);
  // console.log(slug);
  // console.log(map);
  // console.log(entries);
  console.log(here);
  // console.log(sparams?.title);
  console.log(doublecc);
  console.log(inner);
  // console.log(faqData);

  // the self kontext is always here.""
  function handleIncomingRequest(inner: any) {
    console.log(inner);
    if (typeof inner === "string") {
      if (inner === "notfound") {
        notFound();
        return;
      } else {
        redirect(inner);
        return;
      }
    }
  }

  const fp = faqData.entries[slug] as FAQentry;

  handleIncomingRequest(inner);

  return (
    <>
      <Header />
      <main>
        <TextHoverEffect
          text={inner?.fxheader || "FAQ"}
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
            text={getCorrectTitle(inner, sparams) || "FAQ"}
            className="text-lg sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl puffin-nerf text-foreground p-4 "
          />
          ppp
          {/* <Other data={fp} /> */}
        </motion.section>
      </main>
      <Footer />
    </>
  );
}

// function Other({ data }: { data: FAQentry }) {
//   return (
//     <>
//       <motion.h1
//         className="p-2 text-xl m-2 mt-4"
//         initial={{ y: 10, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//       >
//         Other:
//       </motion.h1>
//       <div className="text-lg p-2 grid grid-cols-4">
//         {data.other.map((item, index) => (
//           <Link
//             key={index}
//             href={item.href}
//             className="p-2 m-4 border border-accent rounded-xl"
//             prefetch
//           >
//             {item.text}
//           </Link>
//         ))}
//       </div>
//       <Link
//         href="/faq"
//         prefetch
//         className="py-2 px-4 m-4 border border-accent rounded-xl"
//       >
//         Back
//       </Link>
//     </>
//   );
// }
