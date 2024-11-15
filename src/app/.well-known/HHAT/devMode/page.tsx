"use client";

import React from "react";
import Link from "next/link";

import { notFound } from "next/navigation";

export default function reroute() {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  if (typeof window !== "undefined" && document) {
    const link = document.querySelector("a");
    if (link) {
      link.click();
    }
  }
  return (
    <main>
      <Link href="/.well-known/HHAT/devMode/on">On</Link>
    </main>
  );
}
