"use client"

import { ThemeToggleButton } from "@/components/Theme";
import { Button } from "@/components/ui/button";

import { toast } from "sonner";

export default function Home() {
  function handleClick() {
    toast("Hello, world!");
  }
  return (
    <div className="w-screen h-screen flex items-center justify-center text-foreground">
      <Button onClick={handleClick}>Click me</Button>
      <section className=" absolute bottom-2 left-2 text-foreground"><ThemeToggleButton/></section>
    </div>
  );
}
