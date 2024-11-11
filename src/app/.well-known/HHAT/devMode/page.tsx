"use client";

import React from "react";
import Link from "next/link";

export default function reroute() {
  const link = document?.querySelector("a");
  if (link) {
    link.click();
  }
  return <Link href="/.well-known/HHAT/devMode/on" />;
}
