import { About } from "./en";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Hamburg Hack a Ton",
  description:
    "Learn more about Hamburg Hack a Ton - a hackathon organized by high schoolers, for high schoolers.",
  keywords: [
    "hackathon",
    "hamburg",
    "students",
    "high school",
    "coding",
    "programming",
    "technology",
  ],
  openGraph: {
    title: "About Hamburg Hack a Ton",
    description:
      "Learn more about Hamburg Hack a Ton - a hackathon organized by high schoolers, for high schoolers.",
    url: "https://hamburgton.de/about",
    siteName: "Hamburg Hack a Ton",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Hamburg Hack a Ton",
    description:
      "Learn more about Hamburg Hack a Ton - a hackathon organized by high schoolers, for high schoolers.",
  },
};

export default function AboutPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const from = searchParams?.from;
  const wtstep = searchParams?.wtstep;

  return (
    <>
      <About
        lang="en"
        walkthrough={from === "walkthrough"}
        wtstep={
          wtstep && typeof wtstep === "string" ? parseInt(wtstep) : undefined
        }
      />
    </>
  );
}
