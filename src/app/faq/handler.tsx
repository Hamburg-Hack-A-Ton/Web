"use client";

import Link from "next/link";
import * as motion from "framer-motion/client";
import { AnimatePresence } from "framer-motion";
import { type FAQtype } from "./page";
import React from "react";

export const FAQCategories = ({ faqData }: { faqData: FAQtype }) => {
  return (
    <>
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
                      href={`${faqData.root}/${categoryKey}/${pageKey}?${page[
                        "root-kontext"
                      ]?.join("&")}`}
                      prefetch
                      className={`border ${
                        pageKey === ""
                          ? "border-accent shadow-accent"
                          : "border-muted shadow-muted"
                      } border-2 flex items-center justify-center p-2 m-1 bg-card tinyblur rounded-lg shadow-md  border-1 `}
                    >
                      {page.display || pageTitle}
                    </Link>
                  );
                })}
              {category.subs &&
                Object.keys(category.subs).map((subKey) => {
                  const subCategory = category.subs?.[subKey];
                  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
                  const [isHovering, setIsHovering] = React.useState(false);

                  const handleMouseEnter = () => setIsHovering(true);
                  const handleMouseLeave = () => setIsHovering(false);
                  const handleClick = () => setIsPopupOpen(true);
                  const handleClose = () => setIsPopupOpen(false);

                  return (
                    subCategory && (
                      <motion.div key={subKey} layout>
                        <motion.div
                          className="relative"
                          whileHover="hover"
                          initial="initial"
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          <motion.button
                            className="border-primary shadow-primary border-2 flex items-center justify-center z-40 p-2 m-1 bg-card tinyblur rounded-lg shadow-md"
                            onClick={handleClick}
                            layoutId={`sub-${subKey}`}
                          >
                            {subCategory.display}
                          </motion.button>

                          {/* Hover popup */}
                          {isHovering && (
                            <motion.div
                              className="absolute top-full left-0 z-50 mt-2 p-4 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur border border-muted rounded-lg shadow-lg"
                              variants={{
                                initial: { opacity: 0, y: -10 },
                                hover: { opacity: 1, y: 0 },
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              {/* Recursively render sub-subcategories */}
                              {subCategory.subs &&
                                Object.keys(subCategory.subs).map(
                                  (subSubKey) => {
                                    const subSubCategory =
                                      subCategory.subs?.[subSubKey];
                                    return (
                                      <div key={subSubKey} className="p-1">
                                        {subSubCategory?.display}
                                      </div>
                                    );
                                  }
                                )}
                            </motion.div>
                          )}
                        </motion.div>

                        {/* Pages popup (shown when clicked) */}
                        <AnimatePresence>
                          {isPopupOpen && (
                            <motion.div
                              className="fixed inset-0 z-50 flex items-center justify-center bg-background/80"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              onClick={handleClose}
                            >
                              <motion.div
                                className="bg-card p-6 rounded-xl border border-primary shadow-lg max-w-2xl w-full m-4"
                                layoutId={`sub-${subKey}`}
                                onClick={(e) => e.stopPropagation()}
                              >
                                <h3 className="text-2xl mb-4">
                                  {subCategory.display}
                                </h3>

                                {subCategory.pages &&
                                  Object.keys(subCategory.pages).map(
                                    (pageKey) => {
                                      const page = subCategory.pages?.[pageKey];
                                      return (
                                        <Link
                                          key={pageKey}
                                          href={`${
                                            faqData.root
                                          }/${categoryKey}/${subKey}/${pageKey}?${
                                            page?.["root-kontext"]?.join("&") ||
                                            ""
                                          }`}
                                          prefetch
                                          className="border-muted shadow-muted border-2 flex items-center justify-center p-2 m-1 bg-card tinyblur rounded-lg shadow-md"
                                          onClick={handleClose}
                                        >
                                          {page?.display}
                                        </Link>
                                      );
                                    }
                                  )}
                              </motion.div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )
                  );
                })}
            </div>
          </div>
        );
      })}
    </>
  );
};
