import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Header />
      <section>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
}

export default Layout;
