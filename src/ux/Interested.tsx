"use server";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-async-client-component */
import React from "react";

import { registerApplication } from "@/flags";

export async function RegistationText() {
  return (
    <React.Suspense fallback={<p className=" animate-skeleton">...</p>}>
      <TextCalc />
    </React.Suspense>
  );
}

const LocalInterested = () => {
  return <p>Interested</p>;
};
const LocalRegister = () => {
  return <p>Registers</p>;
};

async function TextCalc() {
  const enter = await registerApplication();
  // return <p>Interested</p>;
  if (enter) {
    return <LocalRegister />;
  } else {
    return <LocalInterested />;
  }
}
import { FilloutPopupEmbed } from "@fillout/react";
import "@fillout/react/style.css";

export async function FilloutForm({
  useHandleClose,
}: {
  useHandleClose: () => void;
}) {
  const enter = await registerApplication();
  if (enter) {
    return (
      <FilloutPopupEmbed
        filloutId="6gV48FesMnus"
        inheritParameters
        onClose={useHandleClose}
      />
    );
  } else {
    return (
      <FilloutPopupEmbed
        filloutId="xxN5JPXCBHus"
        inheritParameters
        onClose={useHandleClose}
      />
    );
  }
}

// xxN5JPXCBHus
