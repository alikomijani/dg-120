import { PropsWithChildren } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
