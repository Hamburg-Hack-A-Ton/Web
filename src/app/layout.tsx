import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from ">ui/sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { VercelToolbar } from "@vercel/toolbar/next";
import { AnimatePresence } from "framer-motion";

export const metadata: Metadata = {
  title: "Hamburg Hack A Ton!",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <SpeedInsights />
        <Analytics />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/nib2aic.css"
        ></link>
      </head>
      <body className="antialiased bg-background text-foreground">
        <Toaster />
        <div className="h-screen w-screen z-0">
          <AnimatePresence>{children}</AnimatePresence>
        </div>
        <VercelToolbar />
      </body>
    </html>
  );
}
