import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childColor, setChildrenColor] = useState(randomColor);

  function handleChangeColor(newChildColor) {
    const newRandomColor = getRandomColor();
    setColor(newRandomColor);
    setChildrenColor(newChildColor);
  }

  return (
    <div onClick={handleChangeColor} className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor={handleChangeColor} bruhColor={childColor}/>
      <Child onChangeColor={handleChangeColor} bruhColor={childColor}/>
    </div>
  );
}

export default Parent;
