import Footer from "@/components/footer";
import { ReactNode } from "react";
import Navbar from "./navbar";
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar className="top-0" />
      {children}
      <Footer />
    </>
  );
}
