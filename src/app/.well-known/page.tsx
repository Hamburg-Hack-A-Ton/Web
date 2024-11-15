"use client";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function toDevMode() {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }
  React.useEffect(() => {
    if (typeof window !== "undefined" && document) {
      const link = document.querySelector("a");
      if (link) {
        link.click();
      }
    }
  }, []);
  return (
    <main>
      <Link href="/.well-known/HHAT/devMode/">DevMode</Link>
    </main>
  );
}
