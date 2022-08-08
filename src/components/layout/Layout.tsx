import { ReactNode } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="pb-16 px-3">{children}</main>
    </>
  );
};
export default Layout;
