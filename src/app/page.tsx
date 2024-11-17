/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-async-client-component */
import React, { Suspense } from "react";

import { gkMain } from "@/flags";
import { UnderConstruction } from "@/ux/components/Homepage/wip";
import { RootMain } from "@/ux/components/Homepage/main";

export default async function Home() {
  const enter = await gkMain();

  if (enter) {
    return <RootMain />;
  } else {
    return <UnderConstruction />;
  }
}
