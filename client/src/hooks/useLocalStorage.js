import { useState, useEffect } from "react";

export function useLocalStorage(key, defaultValue) {
  return useStorage(key, defaultValue, window.localStorage);
}

function useStorage(key, defaultValue, storageObject) {
  const [value, setValue] = useState(() => {
    const jsonValue = JSON.parse(storageObject.getItem(key));
    if (jsonValue !== null) return jsonValue;
    if (typeof initialValue === "function") {
      return defaultValue();
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch(`/api/movies`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (response.ok) {
        const moviesResponse = await response.json();
        console.log("mov", moviesResponse);
        setValue(moviesResponse.data);
      }
    };
    if (value === undefined) {
      return storageObject.removeItem(key);
    }
    if (Object.keys(value).length === 0) {
      getMovies();
    }
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject, setValue]);

  return [value, setValue];
}
