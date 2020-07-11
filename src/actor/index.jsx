import React from "react";

import Sprite from "../sprites/sprite";

export default function Actor({ sprite, data, step = 0, dir = 2 }) {
  const { h, w } = data;
  return (
    <Sprite
      image={sprite}
      data={{
        x: step * w,
        y: dir * h,
        h,
        w,
      }}
    />
  );
}
