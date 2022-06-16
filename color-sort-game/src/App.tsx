import React from "react";
import Block from "./components/Block";
import Demo from "./components/Demo";
import Tube from "./components/Tube";
import { IBlockItem } from "./interfaces";
import "./styles/site.css";

const itemSet: IBlockItem[] = [
  {
    id: 1,
    color: "red",
    order: 3,
  },
  {
    id: 2,
    color: "red",
    order: 2,
  },
  {
    id: 3,
    color: "blue",
    order: 1,
  },
  {
    id: 4,
    color: "blue",
    order: 4,
  },
];

function App() {
  return (
    <div className="container">
      <div className="game-area">
        <Tube items={itemSet} />
      </div>
    </div>
  );
}

export default App;
