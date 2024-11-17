/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-async-client-component */
import React from "react";

import { applicationPhase } from "@/flags";
import { Active, Inactive } from "./reroute";
import Loading from "./loading";

export default async function RegisterPage() {
  const enter = await applicationPhase();

  if (enter) {
    return (
      <React.Suspense fallback={<Loading />}>
        <Active />
      </React.Suspense>
    );
  } else {
    return <Inactive />;
  }
}
