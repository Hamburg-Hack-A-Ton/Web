"use client";

// eslint-disable-next-line no-redeclare
import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from ">util/twm";
import { Button } from ">ui/button";

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
);
Drawer.displayName = "Drawer";

const DrawerTrigger = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <DrawerPrimitive.Trigger
    ref={ref}
    className={cn(" w-auto h-auto", className)}
    {...props}
  >
    <Button>{children}</Button>
  </DrawerPrimitive.Trigger>
));
DrawerTrigger.displayName = DrawerPrimitive.Trigger.displayName;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Close>
>(({ className, children, ...props }, ref) => (
  <DrawerPrimitive.Close ref={ref} className={cn("", className)} {...props}>
    <Button variant="outline">{children}</Button>
  </DrawerPrimitive.Close>
));
DrawerClose.displayName = "DrawerClose";

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-background/10 duration-700 tinyblur",
      className
    )}
    {...props}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border border-b-0 border-ring duration-700  bg-background/20 glassblur",
        className
      )}
      style={{ maxHeight: "65vh" }} // Set the max height to 90% of the viewport height
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      <div
        style={{
          overflowY: "auto",
          flex: "1",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {" "}
        {/* Make this div scrollable and take up the remaining space */}
        {children}
      </div>
    </DrawerPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "grid gap-1.5 p-4 text-center text-foreground duration-700 sm:text-left",
      className
    )}
    {...props}
  />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "mt-auto flex flex-col gap-2 p-4 text-muted-foreground/80 duration-700",
      className
    )}
    {...props}
  />
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold lores leading-none tracking-tight text-foreground duration-700",
      className
    )}
    {...props}
  />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  Drawer as Wrapper,
  DrawerTrigger as Trigger,
  DrawerContent as Content,
  DrawerHeader as Header,
  DrawerTitle as Title,
  DrawerDescription as Description,
  DrawerClose as Close,
  DrawerFooter as Footer,
};
// need to add smth because vercel git integration is not working
