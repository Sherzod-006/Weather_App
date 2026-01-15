import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await res.json();
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setIsPending(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, isPending };
};
