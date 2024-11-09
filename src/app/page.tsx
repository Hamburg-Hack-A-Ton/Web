/* eslint-disable @next/next/no-async-client-component */
"use client";

import React, { useEffect } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { gkMain } from "@/flags";

export default function Home() {
  const [data, setData] = React.useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await gkMain();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Home {data ? "test" : "not test"}</h1>
    </div>
  );
}
