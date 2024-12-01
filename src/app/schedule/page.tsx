import { Header, Footer } from ">comp/Header";
import { notFound } from "next/navigation";

export default function Schedule() {
  notFound();
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}
