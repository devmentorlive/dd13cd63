import React from "react";

import Sprite from "../sprite";

export default function Actor({ sprite, data, position, step = 0, dir = 2 }) {
  const { h, w } = data;
  return (
    <Sprite
      image={sprite}
      style={{
        position: "absolute",
      }}
      data={{
        x: step * w,
        y: dir * h,
        h,
        w,
      }}
      position={position}
    />
  );
}
