"use client";

import React from "react";
import Link from "next/link";

export default function SetDeveloperMode() {
  React.useEffect(() => {
    localStorage.setItem("dev", "false");

    const link = document.querySelector("a");
    if (link) {
      link.click();
    }
  }, []);
  return <Link href="/" />;
}
