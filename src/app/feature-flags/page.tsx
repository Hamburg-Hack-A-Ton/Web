/* eslint-disable @typescript-eslint/no-explicit-any */
import { encrypt } from "@vercel/flags";
import { FlagValues } from "@vercel/flags/react";
import { Suspense } from "react";

async function ConfidentialFlagValues({ values }: { values: any }) {
  const encryptedFlagValues = await encrypt(values);
  return <FlagValues values={encryptedFlagValues} />;
}

export default function Page() {
  const values = { exampleFlag: true };
  return (
    <main className="text-foreground">
      <Suspense fallback={null}>
        <ConfidentialFlagValues values={values} />
      </Suspense>
      Hello
    </main>
  );
}
