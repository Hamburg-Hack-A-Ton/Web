/* eslint-disable-next-line no-redeclare */
import * as React from "react";

import { cn } from ">util/twm";

// need to add smth because vercel git integration is not working
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-background/10 duration-700 glassblur text-foreground shadow-sm",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 pt-1 px-3 pb-1", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl px-3 pt-2 font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "pl-3 text-sm text-muted-foreground duration-700 ",
      className
    )}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("px-3 pt-2", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center px-3 py-1", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

const CardDivider = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("border-t border-ring duration-700 ", className)}
    {...props}
  />
));
CardDivider.displayName = "CardDivider";

export {
  Card as Wrapper,
  CardHeader as Header,
  CardFooter as Footer,
  CardTitle as Title,
  CardDescription as Description,
  CardContent as Content,
  CardDivider as Divider,
};

const Preset: React.FC<
  React.HTMLAttributes<HTMLElement> & {
    Header?: React.ReactNode | string | undefined;
    Footer?: React.ReactNode | string | undefined;
    Title?: string | undefined;
    Description?: string | undefined;
    nodivider?: boolean;
  }
> = ({ children, Header, Footer, Title, Description, nodivider, ...props }) => {
  let showheader = true;
  if (!Header && !Title && !Description) {
    showheader = false;
  }
  return (
    <Card>
      {showheader && (
        <CardHeader>
          {Title && <CardTitle>{Title}</CardTitle>}
          {Description && <CardDescription>{Description}</CardDescription>}
          {Header && <div className="px-3">{Header}</div>}
          {!nodivider && <CardDivider />}
        </CardHeader>
      )}
      {children && <CardContent {...props}>{children}</CardContent>}
      {Footer && <CardFooter>{Footer}</CardFooter>}
    </Card>
  );
};

export { Preset };
