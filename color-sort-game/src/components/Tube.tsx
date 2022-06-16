import React from "react";
import { IBlockItem } from "../interfaces";
import Block from "./Block";

interface IProps {
  items: IBlockItem[];
}

const Tube: React.FunctionComponent<IProps> = ({ items }) => {
  return (
    <div className="tube">
      {items.map((item) => (
        <Block key={item.id} blockData={item} />
      ))}
    </div>
  );
};

export default Tube;
