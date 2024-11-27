import SmoothScroll from "@/ux/components/smoothScrool";
import { Header, Footer } from ">comp/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
