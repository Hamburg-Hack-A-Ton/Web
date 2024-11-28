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

export default async function FAQPage({
  searchParams,
}: {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sparams = await searchParams;
  const from = sparams.from;
  const wtstep = sparams.wtstep;

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
