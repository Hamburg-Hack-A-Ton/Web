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
