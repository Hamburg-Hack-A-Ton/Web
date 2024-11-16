import React from "react";
import { Header, Footer } from ">comp/Header";
import { TextHoverEffect } from ">fx/texthoverfx";
import { Separator } from ">ui/separator";
import * as motion from "framer-motion/client";
import { TextAnimate } from ">fx/textAnimate";
import FAQjson from "~/qa.json";
import { notFound } from "next/navigation";
import Link from "next/link";

type FAQjsonType = {
  [key: string]: {
    fxheader: string;
    title: string;
    content: string[];
    other: {
      href: string;
      text: string;
    }[];
  };
};

const FAQjsonTyped: FAQjsonType = FAQjson as FAQjsonType;

export default async function FAQPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const data = FAQjsonTyped[slug];

  if (!data) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <TextHoverEffect
          text={data.fxheader}
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
            text={data.title}
            className="text-lg sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl puffin-nerf text-foreground p-4 "
          />
          {data.content.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
          <Other data={data} />
        </motion.section>
      </main>
      <Footer />
    </>
  );
}

function Other({ data }: { data: FAQjsonType[string] }) {
  return (
    <>
      {data.other.map((item, index) => (
        <Link key={index} href={item.href} prefetch>
          {item.text}
        </Link>
      ))}
    </>
  );
}
