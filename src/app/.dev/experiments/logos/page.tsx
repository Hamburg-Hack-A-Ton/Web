import React from "react";
import Image from "next/image";
import { HoverEffect } from ">fx/hovercards";
import { Footer } from ">comp/Header";

export default function Logos() {
  return (
    <>
      <div className="flex items-center justify-center">
        <Image
          src="/cdn/sponsors/placeholder/triangles.svg"
          alt="Logo Ipsum"
          width={222}
          height={50}
        />
        <Image
          src="/cdn/sponsors/placeholder/cool.svg"
          alt="Logo Ipsum"
          width={222}
          height={75}
        />
        <Image
          src="/cdn/sponsors/placeholder/rainbow.svg"
          alt="Logo Ipsum"
          width={222}
          height={175}
        />
      </div>
      <HoverEffect items={sponsors} className="w-96 h-32" />
      <Footer noFooter />
    </>
  );
}

const sponsors = [
  {
    href: "https://stripe.com",
    bg: "/cdn/sponsors/placeholder/cool.svg",
  },
  {
    href: "https://netflix.com",
    bg: "/cdn/sponsors/placeholder/triangles.svg",
  },
  {
    href: "https://google.com",
    bg: "/cdn/sponsors/placeholder/rainbow.svg",
  },
];
