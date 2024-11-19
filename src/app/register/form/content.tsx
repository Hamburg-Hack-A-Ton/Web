import React from "react";
import { Header } from ">comp/Header";
import { FilloutForm } from "@/ux/Interested";
import { useRouter } from "next/navigation";

function useHandleClose() {
  const router = useRouter();
  if (typeof window !== "undefined" && document) {
    localStorage.setItem("appliedYear", new Date().getFullYear().toString());
  }
  router.push("/register/done");
}

export function Register() {
  return (
    <>
      <Header />
      <main className="">
        <FilloutForm useHandleClose={() => useHandleClose} />
      </main>
    </>
  );
}
