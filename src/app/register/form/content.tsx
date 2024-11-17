"use client";
import React from "react";
import { Header } from ">comp/Header";
import { FilloutPopupEmbed } from "@fillout/react";
import { useRouter } from "next/navigation";
import "@fillout/react/style.css";

export function Register() {
  const router = useRouter();

  function handleClose() {
    localStorage.setItem("appliedYear", new Date().getFullYear().toString());
    router.push("/register/done");
  }
  return (
    <>
      <Header />
      <main className="">
        <FilloutPopupEmbed
          filloutId="6gV48FesMnus"
          inheritParameters
          onClose={handleClose}
        />
      </main>
    </>
  );
}
