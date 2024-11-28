import NotImplemented from ">util/notImpl";
import { notFound } from "next/navigation";

const sponsorPaths = [
  "apply",
  "sponsor",
  "benefits",
  "packages",
  "partners",
  "contact",
];

export default async function Sponsors({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  console.log(slug);
  if (sponsorPaths.includes(slug)) {
    return <NotImplemented title="Sponsors" />;
  }
  return notFound();
}
