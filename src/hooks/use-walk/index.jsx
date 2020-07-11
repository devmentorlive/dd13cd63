import { useState } from "react";

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
    setDir(facing);
    setStep((prev) => (prev < maxStep - 1 ? prev + 1 : 0));
  }

  return {
    walk,
    dir,
    step,
    directions,
  };
}
