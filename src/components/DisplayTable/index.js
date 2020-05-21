import React, { useContext, useState } from "react";
import { FishContext } from "@store/index";
import "./index.scss";
import {locationMap, shadowSizeMap} from "@conf/index"

const displayTable = () => {
  const fishData = useContext(FishContext);
  const [currentCard, setcurrentCard] = useState(null)
  const [currentObject, setcurrentObject] = useState(null)

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

  function setCanceld(){
    setcurrentCard(null)
  }

  function bindCardClicked(index){
    let current = fishData[index]
    setcurrentCard(index)
    setcurrentObject(current)
    console.log(current)
    console.log(currentObject)
  }

  return (
    <div className="display-container">
      <div className="cards-list">{generateFishCols()}</div>
      <div className={`card-description ${currentCard ? 'detail-show' : ''}`}>
        <div className="card-item">
          <span className="card-title">名称</span>
          <span className="card-body">{currentObject ? currentObject.name : ''}</span>
        </div>
        <div className="card-item">
          <span className="card-title">英译</span>
          <span className="card-body">{currentObject ? currentObject.engName : ''}</span>
        </div>
        <div className="card-item">
          <span className="card-title">价格</span>
          <span className="card-body">{currentObject ? currentObject.price + '￥'  : ''}</span>
        </div>
        <div className="card-item">
          <span className="card-title">地点</span>
          <span className="card-body">{currentObject ? locationMap[currentObject.location] : ''}</span>
        </div>
        <div className="card-item">
          <span className="card-title">形状</span>
          <span className="card-body">{currentObject ? shadowSizeMap[currentObject.shadowSize] : ''}</span>
        </div>
        <div className="card-item">
          <span className="card-title">月份</span>
          <span className="card-body"></span>
        </div>
        <div className="card-item">
          <span className="card-title" style={{cursor: 'pointer'}} onClick={() => setCanceld()}>隐藏</span>
        </div>   
      </div>
    </div>
  );
};

export default displayTable;
