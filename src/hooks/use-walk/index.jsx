import { useState, useEffect } from "react";

export default function useWalk(maxStep) {
  const [dir, setDir] = useState(0);
  const [step, setStep] = useState(0);
  const directions = {
    down: 0,
    left: 1,
    right: 2,
    up: 3,
  };

  function walk(facing) {
    setDir((prevDir) => {
      setStep((prevStep) =>
        prevDir === dir ? (prevStep < maxStep - 1 ? prevStep + 1 : 0) : 0
      );
      return facing;
    });
  }

  return {
    walk,
    dir,
    step,
    directions,
  };
}
