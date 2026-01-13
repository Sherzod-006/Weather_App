//IMPORTING RRD
import { Outlet } from "react-router-dom";
//IMPORTING REACT
import { useContext } from "react";
//IMPORTING COMPONENTS
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
//IMPORTING CONTEXTS
import { LocationContext } from "../contexts/Contexts";

const MainLayout = () => {
  const { isPending } = useContext(LocationContext);
  return (
    <main className="flex flex-col h-screen">
      {isPending ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <section>
            <Outlet />
          </section>
        </div>
      )}
    </main>
  );
};

export default MainLayout;
