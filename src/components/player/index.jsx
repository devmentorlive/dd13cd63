import React from "react";
import Actor from "../actor";
import useKeyPress from "../../hooks/use-key-press";
import useWalk from "../../hooks/use-walk";

export default function Player({ skin }) {
  const data = {
    w: 32,
    h: 32,
    stepCount: 3,
  };
  const { dir, step, walk, directions, position } = useWalk(data.stepCount);

  useKeyPress((e) => {
    const dir = e.key.replace("Arrow", "").toLowerCase();
    if (directions.hasOwnProperty(dir)) walk(directions[dir]);
    e.preventDefault();
  }, []);

  return (
    <Actor
      sprite={`/sprites/skins/${skin}.png`}
      data={data}
      step={step}
      dir={dir}
      position={position}
    />
  );
}
