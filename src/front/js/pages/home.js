import React, { useState } from "react";
import "../../styles/home.css";

export const Home = () => {
  const [selectedColor, setSelectedColor] = useState("red");

  return (
    <div className="divCenter">
      <div className="p-4 traffic">
        <div
          onClick={() => setSelectedColor("green")}
          className={
            "light green" + (selectedColor === "green" ? " glow" : " ")
          }
        ></div>

        <div
          onClick={() => setSelectedColor("yellow")}
          className={
            "light yellow" + (selectedColor === "yellow" ? " glow" : " ")
          }
        ></div>

        <div
          onClick={() => setSelectedColor("red")}
          className={"light red" + (selectedColor === "red" ? " glow" : " ")}
        ></div>
      </div>
    </div>
  );
};
