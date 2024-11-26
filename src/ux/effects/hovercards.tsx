"use client";
// Credits: https://ui.aceternity.com/

// Docs for dis: https://ui.aceternity.com/components/card-hover-effect

import { cn } from ">util/twm";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const randomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateRandomInt = () => {
  let result = 1;
  for (let i = 0; i < 5; i++) {
    result *= randomInt(0, 1000);
  }
  return result;
};

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title?: string;
    description?: string;
    href?: string;
    bg?: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-4",
        className
      )}
      key="hovereffectfxwrapppper"
    >
      {items.map((item, idx) => (
        <Link
          href={item?.href || "#"}
          key={item?.title || generateRandomInt()}
          id={item?.title}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                key={item?.title + "span" || generateRandomInt()}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card
            bg={item?.bg}
            key={"card" + item?.title || generateRandomInt()}
            forewardkey={item?.title}
          >
            {item?.title && (
              <CardTitle key={"title" + item?.title || generateRandomInt()}>
                {item.title}
              </CardTitle>
            )}
            {item?.description && (
              <CardDescription
                key={"desc" + item?.title || generateRandomInt()}
              >
                {item.description}
              </CardDescription>
            )}
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  forewardkey,
  bg,
}: {
  className?: string;
  children: React.ReactNode;
  forewardkey?: string;
  bg?: string;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-1 overflow-hidden bg-background/50 glassblur flex items-center justify-evenly border border-accent group-hover:border-secondary relative z-20",
        className
      )}
      key={`${forewardkey}hoverfxwrapper`}
    >
      {bg && (
        <Image
          src={bg || "/default-image.jpg"}
          alt={bg || "default image"}
          width={250}
          height={250}
          key={`${forewardkey}hoverfximage`}
        />
      )}
      <div className="relative z-50">
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn("text-foreground font-bold tracking-wide mt-1", className)}
    >
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-2 text-foreground/80 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
