import React from "react";
import "./index.scss";
import fish_icon from "@assets/fish_icon.jpeg";
import insect_icon from "@assets/insect_icon.jpeg";
import stone_icon from "@assets/stone_icon.jpg";
import wallpaper_icon from "@assets/wallpaper_icon.jpg";

const IndexPage = () => {
  return (
    <div className="container">
      <div className="page-header">
        <h1>Animal Crossing HandBook</h1>
        <h3>动物之森资源图鉴</h3>
        <div className="ref-wrapper">
          <a>作者 Github</a>
        </div>
      </div>
      <div className="navigation">
        <div className="grid-wrapper">
          <div className="grid-element">
            <div className="img-block">
              <a href="/#/fish">
                <img src={fish_icon}></img>
              </a>
              <h2>鱼类图鉴</h2>
            </div>
          </div>
          <div className="grid-element">
            <div className="img-block">
              <img src={insect_icon}></img>
              <h2>昆虫图鉴</h2>
            </div>
          </div>
          <div className="grid-element">
            <div className="img-block">
              <img src={stone_icon}></img>
              <h2>化石图鉴</h2>
            </div>
          </div>
          <div className="grid-element">
            <div className="img-block">
              <img src={wallpaper_icon}></img>
              <h2>墙纸图鉴</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
