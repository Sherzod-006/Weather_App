//IMPORTING REACT
import { useState, useEffect } from "react";
//IMPORTING CONTEXTS
import { LocationContext } from "./Contexts";

export const LocationProvider = ({ children }) => {
  const [curLocation, setCurLocation] = useState({ city: "", country: "" });
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const fetchLocation = async () => {
      setIsPending(true);
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        setCurLocation({
          city: data.city,
          country: data.country_name,
        });
      } catch (err) {
        console.error("Location fetch error:", err);
      } finally {
        setIsPending(false);
      }
    };

    fetchLocation();
  }, []);

  return (
    <LocationContext.Provider
      value={{ curLocation, setCurLocation, isPending }}
    >
      {children}
    </LocationContext.Provider>
  );
};
