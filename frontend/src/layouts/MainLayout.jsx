//IMPORTING RRD
import { Outlet } from "react-router-dom";
//IMPORTING COMPONENTS
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <main>
      <Navbar />
      {/* <HamburgerMenu /> */}
      <section>
        <Outlet />
      </section>
      {/* <Footer /> */}
    </main>
  );
};

export default MainLayout;
