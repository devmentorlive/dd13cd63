import { useState } from "react";

export default function useWalk(maxSteps) {
  const [dir, setDir] = useState(0);
  const [step, setStep] = useState(0);
  const directions = {
    down: 0,
    left: 1,
    right: 2,
    up: 3,
  };

  function walk(dir) {
    setDir(directions[dir]);
    setStep((prev) => (prev < maxSteps - 1 ? prev + 1 : 0));
  }

  return {
    walk,
    dir,
    step,
    directions,
  };
}
