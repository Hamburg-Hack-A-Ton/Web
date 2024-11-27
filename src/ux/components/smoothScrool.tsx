"use client";

import { useEffect, useState, useRef } from "react";
import { useTransform, motion, useScroll, useSpring } from "framer-motion";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { mass: 0.1 });

  const y = useTransform(smoothProgress, (value) => {
    return value * -(contentHeight - windowHeight);
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowHeight(window.innerHeight);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
      if (typeof window !== "undefined") {
        setWindowHeight(window.innerHeight);
      }
    };

    handleResize();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [contentRef, children]);

  return (
    <>
      <div style={{ height: contentHeight }} className="overflow-y-auto" />
      <motion.div
        className="w-screen fixed top-0 flex flex-col overflow-y-auto"
        style={{ y }}
        ref={contentRef}
      >
        {children}
      </motion.div>
    </>
  );
}
