/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";

import { ReactNode, useMemo, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import useMeasure from "react-use-measure";

import { cn } from ">util/twm";

// Direction Aware Tabs
type Tab = {
  id: number;
  label: string;
  content: ReactNode;
};

interface OgImageSectionProps {
  tabs: Tab[];
  className?: string;
  rounded?: string;
  onChange?: () => void;
  activeTab: number;
  // eslint-disable-next-line no-unused-vars
  setActiveTab: (tabId: number) => void;
}

function CustomDirectionAwareTabs({
  tabs,
  className,
  rounded,
  onChange,
  activeTab,
  setActiveTab,
}: OgImageSectionProps) {
  [activeTab, setActiveTab] = useState(1);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [ref, bounds] = useMeasure();

  const content = useMemo(() => {
    const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;
    return activeTabContent || null;
  }, [activeTab, tabs]);

  const handleTabClick = (newTabId: number) => {
    if (newTabId !== activeTab && !isAnimating) {
      const newDirection = newTabId > activeTab ? 1 : -1;
      setDirection(newDirection);
      setActiveTab(newTabId);
      onChange ? onChange() : null;
    }
  };

  const variants = {
    initial: (direction: number) => ({
      x: 300 * direction,
      opacity: 0,
      filter: "blur(4px)",
    }),
    active: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
    exit: (direction: number) => ({
      x: -300 * direction,
      opacity: 0,
      filter: "blur(4px)",
    }),
  };

  return (
    <div className=" flex flex-col items-center w-full">
      <div
        className={cn(
          "flex space-x-1 border border-none border-accent rounded-full cursor-pointer bg-muted opacity-90 glassblur px-[3px] py-[3.2px] shadow-inner-shadow",
          className,
          rounded
        )}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={cn(
              DefaultText,
              "relative rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium  transition focus-visible:outline-1 focus-visible:ring-1  focus-visible:outline-none flex gap-2 items-center ",
              activeTab === tab.id
                ? "text-white"
                : "hover:text-neutral-300/60  text-neutral-200/80",
              rounded
            )}
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute  inset-0 z-10 bg-muted mix-blend-difference shadow-inner-shadow border border-accent"
                style={rounded ? { borderRadius: 9 } : { borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.19, duration: 0.4 }}
              />
            )}

            {tab.label}
          </button>
        ))}
      </div>
      <MotionConfig transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}>
        <motion.div
          className="relative mx-auto w-full h-full overflow-hidden"
          initial={false}
          animate={{ height: bounds.height }}
        >
          <div className="p-1" ref={ref}>
            <AnimatePresence
              custom={direction}
              mode="popLayout"
              onExitComplete={() => setIsAnimating(false)}
            >
              <motion.div
                key={activeTab}
                variants={variants}
                initial="initial"
                animate="active"
                exit="exit"
                custom={direction}
                onAnimationStart={() => setIsAnimating(true)}
                onAnimationComplete={() => setIsAnimating(false)}
                className={"text-foreground"}
              >
                {content}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </MotionConfig>
    </div>
  );
}
import { Wrapper } from ">ui/CustomCard";
import { DefaultText } from ">util/className";

function PresetDirectionAwareTabs(props: OgImageSectionProps) {
  const [activeTabs, setActiveTabs] = useState(0);
  return (
    <Wrapper className="border-accent ">
      <CustomDirectionAwareTabs
        {...props}
        activeTab={activeTabs}
        setActiveTab={setActiveTabs}
      />
    </Wrapper>
  );
}
export { CustomDirectionAwareTabs, PresetDirectionAwareTabs };
