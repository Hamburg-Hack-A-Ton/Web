import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from ">ui/sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { AnimatePresence } from "framer-motion";
import { Toolbar } from ">comp/Toolbar";
import { DefaultText } from ">util/className";
import { cn } from ">util/twm";

export const metadata: Metadata = {
  metadataBase: new URL("https://hamburghackaton.vercel.app"),
  title: "Hamburg Hack A Ton!",
  description:
    "Hamburg Hack A Ton! - The first High School Hackathon in Germany",
  authors: [
    {
      name: "Jack Ruder",
      url: "https://github.com/jackatdjl",
    },
  ],
  generator: "Next.js",
  keywords: "Hamburg, Hackathon, hamburghackaton, JackatDJL, DJL",
  referrer: "origin-when-cross-origin",
  creator: "Jack Ruder",
  publisher: "JackatDJL, Vercel",
  robots: "index, follow",
  icons: "cdn/brand/Logo.png",
  applicationName: "HHAT",
  manifest: "manifest.json",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://hamburghackaton.vercel.app/",
    siteName: "Hamburg Hack A Ton!",
    title: "Hamburg Hack A Ton!",
    description:
      "Hamburg Hack A Ton! - The first High School Hackathon in Germany",
    images: [
      {
        url: "cdn/brand/Logo.png",
        width: 500,
        height: 500,
        alt: "Hamburg Hack A Ton Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@hhat",
    creator: "@jackatdjl",
    title: "Hamburg Hack A Ton!",
    description:
      "Hamburg Hack A Ton! - The first High School Hackathon in Germany",
    images: "cdn/brand/Logo.png",
  },
  appleWebApp: {
    capable: true,
    title: "Hamburg Hack A Ton!",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
  abstract:
    "Hamburg Hack A Ton! - The first High School Hackathon in Germany - Created by Jack Ruder // JackatDJL",
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
      <body
        className={cn(
          DefaultText,
          "antialiased bg-background duration-200 text-foreground"
        )}
      >
        <AnimatePresence>{children}</AnimatePresence>
        <Toaster />
      </body>
      <Toolbar />
    </html>
  );
}
