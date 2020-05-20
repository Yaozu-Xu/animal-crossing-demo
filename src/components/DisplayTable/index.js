import React, { useContext } from "react";
import { FishContext } from "@store/index";
import "./index.scss";

const displayTable = () => {
  const fishData = useContext(FishContext);

  function generateFishCols() {
    if (fishData) {
      const cards = fishData.map((obj, index) => {
        return (
          <div className="card" key={index}>
            <img src={`src/assets/fish/${obj.icon}`} />
            <div className="name"> {obj.name} </div>
            <div className="price"> ￥{obj.price} </div>
          </div>
        );
      });
      return cards;
    }
  }

  return (
    <div className="display-container">
      <div className="cards-list">{generateFishCols()}</div>
    </div>
  );
};

export default displayTable;
