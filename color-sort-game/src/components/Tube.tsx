import React from "react";
import { IBlockItem } from "../interfaces";
import Block from "./Block";

interface IProps {
  id: string;
  items: IBlockItem[];
  dropHandler: (e: React.DragEvent<HTMLDivElement>) => void;
}

const Tube: React.FunctionComponent<IProps> = ({ items, id, dropHandler }) => {
  const allowDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div
      id={`tube${id}`}
      className="tube"
      onDragOver={allowDrop}
      onDrop={dropHandler}
    >
      {items
        .sort((s, i) => s.order - i.order)
        .map((item, index, arr) => (
          <Block
            key={item.id}
            blockData={item}
            draggable={arr.length - 1 === index}
          />
        ))}
    </div>
  );
};

export default Tube;
