import React from "react";

export default function Zone({ children, tileset }) {
  const terrain = require(`../../data/zones/${tileset}/terrain`).default;
  const tiles = require(`../../data/zones/${tileset}`).default.tiles;

  return (
    <div className="zone-container">
      {children}
      {terrain.map((row) => (
        <div className="row">
          {row.map((tile) => {
            const image = `/sprites/zones/${tileset}.png`;
            const tileData = tiles[tile.toString()];
            const [name, x, y, w, h] = tileData;

            return (
              <div
                style={{
                  border: "0",
                  display: "inline-block",
                  height: `${h}px`,
                  width: `${w}px`,
                  backgroundImage: `url(${image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: `-${x}px -${y}px`,
                }}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
