//IMPORTING RRD
import { Outlet } from "react-router-dom";
//IMPORTING COMPONENTS

const MainLayout = () => {
  return (
    <main>
      {/* <Navbar /> */}
      {/* <HamburgerMenu /> */}
      <section>
        <Outlet />
      </section>
      {/* <Footer /> */}
    </main>
  );
};

export default MainLayout;
