"use client";

import React from "react";
import Link from "next/link";

export default function setDevModeOff() {
  React.useEffect(() => {
    setOff();

    const link = document?.querySelector("a");
    if (link) {
      link.click();
    }
  }, []);

  return <Link href="/" />;
}

function setOn() {
  localStorage.setItem("dev", "true");
}

function setOff() {
  localStorage.setItem("dev", "false");
}
