"use client";
import React from "react";

import { notFound } from "next/navigation";
import { Header, Footer } from ">comp/Header";
import { AnimatePresence, motion } from "framer-motion";
import { FilloutPopupEmbed } from "@fillout/react";
import { Vortex } from "@/ux/effects/vortex";
import { TextHoverEffect } from "@/ux/effects/texthoverfx";
import { Button } from "@/ux/ui/button";
import { Application, Register } from "§";

export default function RegisterPage() {
  const [form, setForm] = React.useState(false);
  const [TY, setTY] = React.useState(false);

  React.useEffect(() => {
    if (Application) {
      if (typeof window !== "undefined" && document) {
        if (
          localStorage.getItem("appliedYear") ===
          new Date().getFullYear().toString()
        ) {
          setTY(true);
          setForm(false);
        } else {
          setTY(false);
          setForm(true);
        }
      }
    } else {
      notFound();
    }
  }, []);

  return (
    <>
      <Header />
      <AnimatePresence>
        {form && (
          <motion.main
            initial={{ y: "10rem", opacity: 0 }}
            animate={{ y: "0rem", opacity: 1 }}
            exit={{ y: "-10rem", opacity: 0 }}
          >
            <FilloutPopupEmbed
              filloutId={Register ? "6gV48FesMnus" : "xxN5JPXCBHus"}
              onClose={() => {
                if (typeof window !== "undefined" && document) {
                  localStorage.setItem(
                    "appliedYear",
                    new Date().getFullYear().toString()
                  );
                }
                setTY(true);
                setForm(false);
              }}
            />
          </motion.main>
        )}
        {TY && (
          <motion.main
            initial={{ y: "10rem", opacity: 0 }}
            animate={{ y: "0rem", opacity: 1 }}
            exit={{ y: "-10rem", opacity: 0 }}
          >
            <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[calc(100vh-10rem)] overflow-hidden">
              <Vortex
                backgroundColor="black"
                rangeY={800}
                particleCount={500}
                baseHue={120}
                className="flex items-center flex-col justify-center rounded-xl px-2 md:px-10  py-4 w-full h-full"
              >
                <TextHoverEffect
                  font="puffin-regular"
                  animate={{ y: "-5rem" }}
                  thick="2"
                  text="Ty"
                />
                <motion.h1
                  className="bernina text-4xl"
                  animate={{ y: "-10rem" }}
                >
                  Thank you for registering! <br /> See you soon!
                </motion.h1>
                <motion.div
                  initial={{ y: "5rem", opacity: 0 }}
                  animate={{ y: "-5rem", opacity: 1 }}
                >
                  <Button
                    onClick={() => {
                      setTY(false);
                      setForm(true);
                    }}
                  >
                    Sorry i wasnt done yet
                  </Button>
                </motion.div>
              </Vortex>
            </div>
          </motion.main>
        )}
        {TY && <Footer noFooter />}
      </AnimatePresence>
    </>
  );
}
