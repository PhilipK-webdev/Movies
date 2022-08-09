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
    if (value === undefined) {
      return storageObject.removeItem(key);
    }
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  return [value, setValue];
}
