"use client";

import React from "react";
import Link from "next/link";

export default function toDevMode() {
  React.useEffect(() => {
    const link = document?.querySelector("a");
    if (link) {
      link.click();
    }
  }, []);
  return (
    <main>
      <Link href="/.well-known/HHAT/devMode/">DevMode</Link>
    </main>
  );
}
