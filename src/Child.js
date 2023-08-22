import React from "react";
import { getRandomColor } from "./randomColorGenerator";

function Child({ onChangeColor, bruhColor }) {
  function handleClick() {
    const newColor = getRandomColor();
    console.log(newColor);
    onChangeColor(newColor);
  }

  return <div onClick={handleClick} className="child" style={{ backgroundColor: bruhColor}} />;
}

export default Child;
