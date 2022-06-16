import React from "react";

interface Props {}

const Demo = (props: Props) => {
  const dragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text", e.currentTarget.id);
    console.log("start");
  };
  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(e.dataTransfer.getData("text"));
  };
  return (
    <>
      <div
        id="42"
        className="box"
        draggable
        onDragStart={dragStart}
        onDragEnd={() => console.log("finish")}
      ></div>
      <div
        className="canvas"
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
      ></div>
    </>
  );
};

export default Demo;
