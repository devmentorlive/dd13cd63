import { useState, useEffect } from "react";

export default function useKeyPress(fn) {
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    window.addEventListener("keydown", fn);
    return () => {
      window.removeEventListener("keydown", fn);
    };
  }, [fn]);

  return keyPressed;
}
