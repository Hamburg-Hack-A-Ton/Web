/* eslint-disable @next/next/no-async-client-component */
import React, { Suspense } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { gkMain } from "@/flags";
import UnderConstruction from "§comp/Homepage/wip";
import RootMain from "@/ux/components/Homepage/main";

export default async function Home() {
  const enter = await gkMain();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {enter ? <RootMain /> : <UnderConstruction />}
    </Suspense>
  );
}
