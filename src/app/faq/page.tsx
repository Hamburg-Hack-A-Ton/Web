import React from "react";
import { Header, Footer } from ">comp/Header";
import FAQ from "~/faq.json";
import { TextHoverEffect } from ">fx/texthoverfx";
import { Separator } from ">ui/separator";
import * as motion from "framer-motion/client";
import { TextAnimate } from ">fx/textAnimate";
import Link from "next/link";
export interface FAQmappable {
  display: string;
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
            text={getRandomTitle()}
            className="text-lg sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl puffin-nerf text-foreground p-4 z-20"
          />
          <motion.section
            key="content-grid"
            className="grid grid-flow-col grid-rows-1  w-[70%] p-4 m-2 gap-4"
            transition={{ staggerChildren: 1 }}
          >
            {Object.keys(faqData.map).map((categoryKey) => {
              const category = faqData.map[categoryKey];

              return (
                <div
                  className="flex items-start justify-center"
                  key={category.display}
                >
                  <div className="grid grid-cols-1">
                    <p className="text-sm lg:text-2xl puffin-foozle">
                      {category.display}
                    </p>
                    {category.pages &&
                      Object.keys(category.pages).map((pageKey) => {
                        const page = category.pages?.[pageKey] ?? {};
                        const pageTitle = page.display;
                        return (
                          <Link
                            key={pageKey}
                            href={`${
                              faqData.root
                            }/${categoryKey}/${pageKey}?${page[
                              "root-kontext"
                            ]?.join("&")}`}
                            prefetch
                            className={`border ${
                              pageKey === ""
                                ? "border-primary"
                                : "border-accent"
                            } rounded-lg border-2 flex items-center justify-center`}
                          >
                            {page.display || pageTitle}
                          </Link>
                        );
                      })}
                    {category.subs &&
                      Object.keys(category.subs).map((subKey) => {
                        const subCategory = category.subs?.[subKey];
                        return (
                          subCategory && (
                            <div key={subKey}>
                              {subCategory.pages &&
                                Object.keys(subCategory.pages).map(
                                  (subPageKey) => {
                                    const subPage =
                                      subCategory.pages?.[subPageKey] ?? {};
                                    const subPageTitle = subPage.display;
                                    return (
                                      <Link
                                        key={subPageKey}
                                        href={`${
                                          faqData.root
                                        }/${categoryKey}/${subKey}/${subPageKey}?${subPage[
                                          "root-kontext"
                                        ]?.join("&")}`}
                                        prefetch
                                        className="border border-accent"
                                      >
                                        {subPage.display || subPageTitle}
                                      </Link>
                                    );
                                  }
                                )}
                            </div>
                          )
                        );
                      })}
                  </div>
                </div>
              );
            })}
          </motion.section>
          {/* <CGroup>
            {Object.keys(faqData.map).map((categoryKey) => {
              const category = faqData.map[categoryKey];
              return (
                <CItem
                  key={categoryKey}
                  trigger={category.display}
                  title={category.display}
                  className="grid grid-cols-4"
                >
                  {category.pages &&
                    Object.keys(category.pages).map((pageKey) => {
                      const page = category.pages?.[pageKey] ?? {};
                      const pageTitle = page.display;
                      return (
                        <Link
                          key={pageKey}
                          href={`${
                            faqData.root
                          }/${categoryKey}/${pageKey}?${page[
                            "root-kontext"
                          ]?.join("&")}`}
                          prefetch
                          className={`border ${
                            pageKey === "" ? "border-primary" : "border-accent"
                          }`}
                        >
                          {page.display || pageTitle}
                        </Link>
                      );
                    })}
                  {category.subs &&
                    Object.keys(category.subs).map((subKey) => {
                      const subCategory = category.subs?.[subKey];
                      return (
                        subCategory && (
                          <CItem
                            key={subKey}
                            trigger={subCategory.display}
                            title={subCategory.display}
                          >
                            {subCategory.pages &&
                              Object.keys(subCategory.pages).map(
                                (subPageKey) => {
                                  const subPage =
                                    subCategory.pages?.[subPageKey] ?? {};
                                  const subPageTitle = subPage.display;
                                  return (
                                    <Link
                                      key={subPageKey}
                                      href={`${
                                        faqData.root
                                      }/${categoryKey}/${subKey}/${subPageKey}?${subPage[
                                        "root-kontext"
                                      ]?.join("&")}`}
                                      prefetch
                                      className="border border-accent"
                                    >
                                      {subPage.display || subPageTitle}
                                    </Link>
                                  );
                                }
                              )}
                          </CItem>
                        )
                      );
                    })}
                </CItem>
              );
            })}
          </CGroup> */}
        </motion.section>
      </main>
      <Footer />
    </>
  );
}
