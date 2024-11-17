/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../util/twm";

export const TextHoverEffect = ({
  text,
  duration,
  className,
  thick,
  font,
  initial,
  animate,
  exit,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
  className?: string;
  thick?: string;
  font?: string;
  initial?: any;
  animate?: any;
  exit?: any;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <motion.svg
      key="hoverfx"
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className={cn("select-none", className)}
      initial={initial}
      animate={animate}
      exit={exit}
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%"
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor={"var(--yellow-500)"} />
              <stop offset="25%" stopColor={"var(--red-500)"} />
              <stop offset="50%" stopColor={"var(--blue-500)"} />
              <stop offset="75%" stopColor={"var(--cyan-500)"} />
              <stop offset="100%" stopColor={"var(--violet-500)"} />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: "easeOut" }}

          // example for a smoother animation below

          //   transition={{
          //     type: "spring",
          //     stiffness: 300,
          //     damping: 50,
          //   }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>
      <text
        key="t1"
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth={thick ?? "0.3"}
        className={cn(
          font ?? "font-[helvetica] font-bold ",
          " stroke-neutral-200 dark:stroke-neutral-800 fill-transparent text-7xl"
        )}
        style={{ opacity: hovered ? 0.7 : 0 }}
      >
        {text}
      </text>
      <motion.text
        key="t2"
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth={thick ?? "0.3"}
        className={cn(
          font ?? "font-[helvetica] font-bold ",
          " font-bold fill-transparent text-7xl   stroke-neutral-200 dark:stroke-neutral-800"
        )}
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>
      <text
        key="t3"
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth={thick ?? "0.3"}
        mask="url(#textMask)"
        className={cn(
          font ?? "font-[helvetica] font-bold ",
          " font-bold fill-transparent text-7xl  "
        )}
      >
        {text}
      </text>
    </motion.svg>
  );
};
