import Link from "next/link";

export default function NotImplemented({
  title = "Not Implemented",
}: {
  title?: string;
}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl">{title}</h1>
        <p className="text-red-500 animate-pulse mt-4">Not Implemented Yet!</p>
        <Link href="/" className="mt-4 hover:underline" prefetch>
          Back to Home
        </Link>
      </div>
    </>
  );
}
