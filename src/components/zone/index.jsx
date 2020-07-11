import React from "react";
import zones from "../../data/zones";

export default function Zone({ children, tileset }) {
  const zoneData = zones[tileset];
  const terrain = require(`../../data/zones/${tileset}/terrain`).default;
  const tiles = require(`../../data/zones/${tileset}`).default.tiles;

  return (
    <div className="zone-container">
      {children}
      {terrain.map((row) => (
        <div className="row">
          {row.map((tile) => {
            const image = `/sprites/zones/${tileset}.png`;
            const x = tiles[tile.toString()][1];
            const y = tiles[tile.toString()][2];
            const w = tiles[tile.toString()][3];
            const h = tiles[tile.toString()][4];

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
