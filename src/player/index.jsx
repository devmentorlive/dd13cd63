import React from "react";
import Actor from "../actor";
import characters from "../actor/characters";
import useKeyPress from "../hooks/use-key-press";
import useWalk from "../hooks/use-walk";

export default function Player({ skin }) {
  const { dir, step, walk, directions } = useWalk(characters[skin].stepCount);

  useKeyPress((e) => {
    const dir = e.key.replace("Arrow", "").toLowerCase();
    if (directions.hasOwnProperty(dir)) walk(directions[dir]);
    e.preventDefault();
  }, []);

  return (
    <Actor
      sprite={`/sprites/characters/${skin}.png`}
      data={characters[skin]}
      step={step}
      dir={dir}
    />
  );
}
