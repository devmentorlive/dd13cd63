import React from "react";
import Zone from "./components/zone";
import Player from "./components/player";

export default function App() {
  return (
    <>
      <Zone tileset="grasslands_1">
        <Player skin="m1" />
      </Zone>
    </>
  );
}
