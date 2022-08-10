import { useState, useEffect, useCallback } from "react";

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
  const getMovies = useCallback(async () => {
    const response = await fetch(`/api/movies`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (response.ok) {
      const moviesResponse = await response.json();
      setValue(moviesResponse);
    }
  }, []);
  useEffect(() => {
    if (value === undefined) {
      return storageObject.removeItem(key);
    }
    if (!value.length) {
      getMovies();
    }
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  return [value, setValue];
}
