"use client";
import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";
import Loading from "./loading";

export function Active() {
  const router = useRouter();
  router.push("/register/form");
  return <Loading />;
}

export function Inactive() {
  notFound();
  return null;
}
