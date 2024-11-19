"use server";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-async-client-component */
import React from "react";

import { registerApplication } from "@/flags";
import { FilloutPopupEmbed } from "@fillout/react";

const LocalInterested = () => {
  return <p>Interested</p>;
};
const LocalRegister = () => {
  return <p>Registers</p>;
};

export async function TextCalc() {
  const enter = await registerApplication();

  return enter ? <LocalRegister /> : <LocalInterested />;
}

export async function FilloutForm() {
  const enter = await registerApplication();

  return (
    <FilloutPopupEmbed
      filloutId={enter ? "6gV48FesMnus" : "xxN5JPXCBHus"}
      inheritParameters
      onClose={() => {
        if (typeof window !== "undefined" && document) {
          localStorage.setItem(
            "appliedYear",
            new Date().getFullYear().toString()
          );
        }
      }}
    />
  );
}

// xxN5JPXCBHus
