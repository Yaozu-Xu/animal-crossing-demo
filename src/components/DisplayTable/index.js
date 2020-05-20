import React, { useContext, useState } from "react";
import { FishContext } from "@store/index";
import "./index.scss";

const displayTable = () => {
  const fishData = useContext(FishContext);
  const [currentCard, setcurrentCard] = useState(null)

  function generateFishCols() {
    if (fishData) {
      const cards = fishData.map((obj, index) => {
        return (
          <div className={`card ${index === currentCard ? 'current' : ''}`} key={index} onClick={() => bindCardClicked(index)}>
            <img src={`src/assets/fish/${obj.icon}`} />
            <div className="name"> {obj.name} </div>
            <div className="price"> ￥{obj.price} </div>
          </div>
        );
      });
      return cards;
    }
  }

  function bindCardClicked(index){
    let current = fishData[index]
    setcurrentCard(index)
    console.log(current)
  }

  return (
    <div className="display-container">
      <div className="cards-list">{generateFishCols()}</div>
    </div>
  );
};

export default displayTable;
