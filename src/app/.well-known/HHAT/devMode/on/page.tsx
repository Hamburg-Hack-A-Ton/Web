"use client";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function setDevModeOff() {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }
  React.useEffect(() => {
    setOn();

    if (typeof window !== "undefined" && document) {
      const link = document.querySelector("a");
      if (link) {
        link.click();
      }
    }
  }, []);

  return (
    <main>
      <Link href="/">Back</Link>
    </main>
  );
}

function setOn() {
  localStorage.setItem("dev", "true");
}

function setOff() {
  localStorage.setItem("dev", "false");
}
