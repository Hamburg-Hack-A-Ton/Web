import React from "react";
import { Header, Footer } from ">comp/Header";
import { TextHoverEffect } from ">fx/texthoverfx";
import { Separator } from ">ui/separator";
import * as motion from "framer-motion/client";
import { TextAnimate } from ">fx/textAnimate";
import qajson from "~/qa.json";
import { notFound } from "next/navigation";

type QAjsonType = {
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

const qajsonTyped: QAjsonType = qajson as QAjsonType;

// eslint-disable-next-line @next/next/no-async-client-component
export default async function QnAPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const data = qajsonTyped[slug];

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
          <p>{data.content}</p>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}
