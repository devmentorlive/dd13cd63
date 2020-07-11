import React from "react";
import Actor from "../actor";
import actors from "../sprites/actors";
import useKeyPress from "../hooks/use-key-press";
import useWalk from "../hooks/use-walk";

export default function Player({ actor }) {
  const { dir, step, walk, directions } = useWalk(actors[actor].stepCount);

  useKeyPress((e) => {
    const dir = e.key.replace("Arrow", "").toLowerCase();
    if (directions.hasOwnProperty(dir)) walk(directions[dir]);
    e.preventDefault();
  }, []);

  return (
    <Actor
      sprite={`/sprites/actors/${actor}.png`}
      data={actors[actor]}
      step={step}
      dir={dir}
    />
  );
}
