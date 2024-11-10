"use client";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { Button } from ">ui/button";
import * as Feather from "react-feather";

import { cn } from ">util/twm";
// need to add smth because vercel git integration is not working
// eslint-disable-next-line no-redeclare
import React from "react";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger> & {
    variant?: "default" | "secondary" | "destructive" | "outline" | "ghost";
    prefix?: keyof typeof Feather;
  }
>(({ className, children, variant, ...props }, ref) => (
  <PopoverPrimitive.Trigger
    ref={ref}
    className={cn(" w-auto h-auto", className)}
    asChild
    {...props}
  >
    <Button variant={variant}>{children}</Button>
  </PopoverPrimitive.Trigger>
));
PopoverTrigger.displayName = PopoverPrimitive.Trigger.displayName;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className = "", align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-background/20 duration-700 glassblur border-ring text-foreground p-4 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

const Popup: React.FC<
  React.ComponentProps<typeof Popover> & {
    trigger: string | undefined;
    prefix?: keyof typeof Feather;
    align?: "center" | "start" | "end";
    sideOffset?: number;
    triggervariant?:
      | "default"
      | "secondary"
      | "destructive"
      | "outline"
      | "ghost";
  }
> = ({
  children,
  trigger,
  prefix,
  align,
  sideOffset,
  triggervariant,
  ...props
}) => {
  return (
    <Popover>
      <PopoverTrigger variant={triggervariant} prefix={prefix}>
        {trigger}
      </PopoverTrigger>
      <PopoverContent align={align} sideOffset={sideOffset} {...props}>
        {children}
      </PopoverContent>
    </Popover>
  );
};

export {
  Popup as Preset,
  Popover as Wrapper,
  PopoverTrigger as Trigger,
  PopoverContent as Content,
};
