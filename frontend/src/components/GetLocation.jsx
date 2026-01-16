//IMPORTING REACT
import { useState, useEffect, useContext } from "react";
//IMPORTING CONTEXTS
import { LocationContext } from "../contexts/Contexts";

export const GetLocation = (city) => {
  const { curLocation, setCurLocation } = useContext(LocationContext);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    if (curLocation.city || city) {
      const fetchData = async () => {
        setIsPending(true);
        try {
          const res = await fetch(
            city
              ? `https://api.weatherapi.com/v1/current.json?key=${
                  import.meta.env.VITE_API_KEY
                }&q=${city}&aqi=no`
              : `https://api.weatherapi.com/v1/current.json?key=${
                  import.meta.env.VITE_API_KEY
                }&q=${curLocation.city}&aqi=no`
          );
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          const json = await res.json();
          setData(json);
          if (city && json?.location) {
            setCurLocation({
              city: json.location.region,
              country: json.location.country,
            });
          }
        } catch (error) {
          setError(error);
        } finally {
          setIsPending(false);
        }
      };
      fetchData();
    }
  }, [city]);
  return [data];
};
