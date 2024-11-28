/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Suspense } from "react";
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
import dynamic from "next/dynamic";
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

  async function calcHere() {
    // console.log("Calculating 'here'...");
    let calchere: any = entries;
    // console.log("Initial 'calchere':", calchere);
    for (const key of slug) {
      try {
        // console.log("Processing key:", key);
        const here: any = calchere[key];
        // console.log("Found 'here':", here);
        calchere = here;
      } catch (e) {
        // console.log("Error processing key:", key, e);
        return "fail-foreward";
      }
    }
    // console.log("Final 'calchere':", calchere);
    if (calchere === undefined) {
      return "fail-foreward";
    }
    return calchere;
  }
  const here = await calcHere();
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

const getCorrectTitle = (inner: FAQentry, sparams?: any) => {
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
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { slug } = await params;
  const sparams = await searchParams;
  const map = await faqData.map;
  const entries = await faqData.entries;

  async function calcHere() {
    // console.log("Calculating 'here'...");
    let calchere: any = entries;
    // console.log("Initial 'calchere':", calchere);
    for (const key of slug) {
      try {
        // console.log("Processing key:", key);
        const here: any = calchere[key];
        // console.log("Found 'here':", here);
        calchere = here;
      } catch (e) {
        // console.log("Error processing key:", key, e);
        return "fail-foreward";
      }
    }
    // console.log("Final 'calchere':", calchere);
    if (calchere === undefined) {
      return "fail-foreward";
    }
    return calchere;
  }
  const here = await calcHere();
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

  const referrer = inner?.["exit-kontext"]
    ? buildReferrer(inner["exit-kontext"])
    : "";

  console.log("---");
  // console.log("Params: ", params);
  // console.log("URL-Params: ", sparams);
  // console.log("Slug: ", slug);
  // console.log("Map: ", map);
  // console.log("Entries: ", entries);
  // console.log("Here: ", here);
  // console.log("Inner: ", inner);
  // console.log("FAQ Data: ", faqData);
  // console.log("Config: ", faqData.config);
  // console.log("Root: ", faqData.root);

  console.log(doublecc);

  // the self kontext is always here.""
  function handleIncomingRequest(inner: any) {
    // console.log(inner);
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

  handleIncomingRequest(inner);

  return (
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
          key={inner?.title || "FAQ"}
          className="text-lg sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl puffin-nerf text-foreground p-4 "
        />
        {inner?.override && (
          <Suspense
            fallback={
              <main className="w-full h-2/3 bg-background text-foreground flex items-center justify-center">
                <p className="lores text-4xl">Loading</p>
              </main>
            }
          >
            <DynamicComponent componentPath={inner?.override} />
          </Suspense>
        )}
        {!inner?.override && inner?.msg && (
          <motion.h2
            key={inner?.msg}
            className="p-4 m-2 bg-card tinyblur rounded-xl shadow-lg shadow-accent border-2 border-accent"
          >
            {inner?.msg}
          </motion.h2>
        )}
        {!inner?.override && inner?.content && (
          <motion.section
            key={inner?.content}
            className="p-2 m-2 text-2xl rounded-xl"
          >
            {inner?.content}
          </motion.section>
        )}
        {/* back-/forwardlinks Section */}
        {inner?.walkthrough?.back && (
          <motion.section
            key={inner?.walkthrough?.back}
            className="p-2 m-2 text-xl rounded-xl bg-card tinyblur shadow-md shadow-muted border-1 border-muted"
          >
            <Link href={inner?.walkthrough?.back} prefetch>
              <p className="bernina">Back</p>
            </Link>
          </motion.section>
        )}
        {inner?.walkthrough?.next && (
          <motion.section
            key={inner?.walkthrough?.next}
            className="p-2 m-2 text-xl rounded-xl bg-card tinyblur shadow-md shadow-muted border-1 border-muted"
          >
            <Link href={`${inner?.walkthrough?.next}${referrer}`} prefetch>
              <p className="bernina">Next</p>
            </Link>
          </motion.section>
        )}
        {inner?.walkthrough?.fine && (
          <motion.section
            key={inner?.walkthrough?.fine}
            className="p-2 m-2 text-xl rounded-xl bg-card tinyblur shadow-md shadow-primary border-1 border-primary"
          >
            <Link href={`${inner?.walkthrough?.fine}${referrer}`} prefetch>
              <p className="bernina">Finnish!</p>
            </Link>
          </motion.section>
        )}

        {/* Other Section */}
        {inner?.showothers && Object.keys(here).length > 1 && !inner?.other && (
          <Other here={here} inner={inner} />
        )}
        {!inner?.hideothers && Object.keys(here).length > 1 && inner?.other && (
          <CustomOther inner={inner} />
        )}
      </motion.section>
    </main>
  );
}

type DynamicComponentProps = {
  componentPath: string;
};

const DynamicComponent: React.FC<DynamicComponentProps> = ({
  componentPath,
}) => {
  const resolvePath = (path: string) => {
    return `./custom/${path}`;
  };

  const ImportedComponent = dynamic(() =>
    import(resolvePath(componentPath)).then((mod) => mod)
  );

  return <ImportedComponent />;
};

type OtherProps = {
  here?: any;
  inner?: any;
  custom?: any;
};

const Other: React.FC<OtherProps> = ({ here, inner }) => {
  return (
    <div className="flex items-center justify-center animate-bounce text-destructive-foreground bg-destructive rounded-xl p-4 m-2 text-xl">
      Be Aware
      <br />
      This Feature is not Implemented Yet!
    </div>
  );
};

const buildReferrer = (exitKontext: string[]): string => {
  return exitKontext.reduce((acc, curr, index) => {
    return index === 0 ? `?${curr}` : `${acc}&${curr}`;
  }, "");
};

const CustomOther: React.FC<OtherProps> = ({ inner }) => {
  const variants = {
    hidden: { opacity: 0, y: "-2.5rem" },
    visible: { opacity: 0.75, y: "0rem" },
  };

  const custom = inner?.other || {};

  const referrer = inner?.["exit-kontext"]
    ? buildReferrer(inner["exit-kontext"])
    : "";
  return (
    <motion.div
      className="grid grid-cols-4 gap-4 w-3/4 mx-auto pt-4"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.025 }}
    >
      <Separator className=" col-start-1 col-span-4" />
      <h3 className=" col-start-1 col-span-4 flex items-center justify-center text-2xl bernina bold">
        Simmilar
      </h3>
      {Object.keys(custom).map((key) => (
        <motion.div
          key={key}
          variants={variants}
          className="p-2 m-1 bg-card tinyblur rounded-lg shadow-md shadow-muted border-1 border-muted"
        >
          <Link
            href={`${faqData.root}${key}${referrer}`}
            prefetch
            className="bernina"
          >
            {custom[key]}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};
