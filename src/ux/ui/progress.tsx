"use client";

// eslint-disable-next-line no-redeclare
import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from ">util/twm";
// need to add smth because vercel git integration is not working

interface ProgressProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
    "color"
  > {
  color?: { [key: number]: string };
  bg?: string;
  value: number; // Stelle sicher, dass value ein number ist
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, color, bg = "bg-background", ...props }, ref) => {
  const colorClasses = React.useMemo(() => {
    if (!color) return "bg-primary duration-700"; // Default

    const sortedKeys = Object.keys(color)
      .map(Number)
      .sort((a, b) => a - b);
    for (let i = sortedKeys.length - 1; i >= 0; i--) {
      const threshold = sortedKeys[i];
      if (threshold !== undefined && value >= threshold) {
        return color[threshold];
      }
    }

    return "";
  }, [color, value]);

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-4 w-full overflow-hidden rounded-full ",
        bg,
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn("h-full w-full flex-1 transition-all", colorClasses)}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
});

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
