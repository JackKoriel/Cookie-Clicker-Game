import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const usePersistedState = (name, defaultValue) => {
  const [param, setParam] = useState(() => {
    const presistParam = window.localStorage.getItem(name);
    return presistParam !== null ? JSON.parse(presistParam) : defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(name, JSON.stringify(param));
  }, [param, name]);
  return [param, setParam];
};

export default usePersistedState;
