"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-async-client-component */
import React from "react";
import { Register } from "./content";
import { updateTheme } from ">comp/Theme";

export default function Page() {
  updateTheme();
  return <Register />;
}
