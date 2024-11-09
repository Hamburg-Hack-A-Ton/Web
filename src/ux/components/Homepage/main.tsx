"use client";

import { ThemeToggleButton } from "§comp/Theme";
import { Button } from "§ui/button";

import { toast } from "sonner";
import Link from "next/link";

export default function RootMain() {
  function handleClick() {
    toast("Hello, world!");
  }
  return (
    <div className="w-screen h-screen flex items-center justify-center text-foreground">
      <Button onClick={handleClick}>Click me</Button>
      <Link href="/sentry-example-page" className="text-foreground">
        Sentry Test
      </Link>
      <Link href="/feature-flags" className="text-foreground">
        Flag Test
      </Link>
      <section className=" absolute bottom-2 left-2 text-foreground">
        <ThemeToggleButton />
      </section>
    </div>
  );
}
