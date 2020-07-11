import { useState } from "react";

export default function useWalk(maxStep) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dir, setDir] = useState(0);
  const [step, setStep] = useState(0);

  const stepSize = 16;

  const directions = {
    down: 0,
    left: 1,
    right: 2,
    up: 3,
  };

  const modifier = {
    [directions.down.toString()]: { x: 0, y: stepSize },
    [directions.left.toString()]: { x: -stepSize, y: 0 },
    [directions.right.toString()]: { x: stepSize, y: 0 },
    [directions.up.toString()]: { x: 0, y: -stepSize },
  };

  function walk(facing) {
    setDir(facing);
    setPosition((prev) => ({
      x: prev.x + modifier[facing.toString()].x,
      y: prev.y + modifier[facing.toString()].y,
    }));
    setStep((prev) => (prev < maxStep - 1 ? prev + 1 : 0));
  }

  return {
    walk,
    dir,
    step,
    directions,
    position,
  };
}
