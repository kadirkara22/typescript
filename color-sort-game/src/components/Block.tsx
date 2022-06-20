import React from "react";
import { IBlockItem } from "../interfaces";

interface IProps {
  blockData: IBlockItem;
  draggable: boolean;
}

const Block: React.FC<IProps> = ({ blockData, draggable }) => {
  const dragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text", e.currentTarget.id);
  };

  return (
    <div
      id={blockData.id.toString()}
      draggable={draggable}
      className={`block block-${blockData.color}`}
      onDragStart={dragStart}
    >
      {blockData.id} - {blockData.order}
    </div>
  );
};

export default Block;
