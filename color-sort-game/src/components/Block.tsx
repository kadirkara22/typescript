import React from "react";
import { IBlockItem } from "../interfaces";

interface IProps {
  blockData: IBlockItem;
}

const Block: React.FC<IProps> = ({ blockData }) => {
  const dragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text", e.currentTarget.id);
  };

  return (
    <div
      id={blockData.id.toString()}
      className={`block block-${blockData.color}`}
      onDragStart={dragStart}
      draggable
    >
      {blockData.id} - {blockData.order}
    </div>
  );
};

export default Block;
