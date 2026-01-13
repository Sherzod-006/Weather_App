//IMPORTING RRD
import { RouterProvider } from "react-router-dom";
//IMPORTING ROUTES
import { routes } from "./routes/MainRoute";
//IMPORTING CONTEXTS
import { LocationProvider } from "./contexts/LocationProvider";

const App = () => {
  return (
    <LocationProvider>
      <RouterProvider router={routes} />
    </LocationProvider>
  );
};

export default App;
