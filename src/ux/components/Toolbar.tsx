"use client";

import React from "react";
import { useEffect, useState } from "react";
import { VercelToolbar } from "@vercel/toolbar/next";

export function Toolbar() {
  const [showToolbar, setShowToolbar] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("dev") === "true") {
      setShowToolbar(true);
    }
  }, []);

  if (showToolbar) {
    return <VercelToolbar />;
  } else {
    return null;
  }
}
