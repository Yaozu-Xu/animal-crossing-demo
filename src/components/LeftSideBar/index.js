import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { update_search_state, update_fetch_data } from "@store/actions/displayList"
import FishApi from "@api/fish";
import "./index.scss";

const leftSideBar = () => {
  const searchState  = useSelector(state => state.displayList.searchState)
  const dispatch = useDispatch()
  
  useEffect(() => {
    let categories = document.querySelectorAll(".category");
    categories.forEach((li) => {
      if (li.children.length > 0) {
        let span = li.firstChild
        let ul = li.lastChild
        // bind opening child menu event
        span.addEventListener("click", function () {
          let ul = this.nextSibling;
          ul.classList.toggle("active");
        });
        // bind choose event
        bindLiClickEvent(ul)
      }
    });
  }, []);

  async function searchBtnClicked(){
    let query = Object.keys(searchState).map(function (key) {
      return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(searchState[key]));
    }).join('&');
    const res = await FishApi.queryFish('?' + query)
    dispatch(update_fetch_data(res.data))
  }

  function bindLiClickEvent(ul){
    let target = ul.dataset.target // ref to id
    let lis = ul.children
    for(let i=0; i < lis.length; i++){
      let li = lis[i]
      li.addEventListener("click", function(){
        let value = this.dataset.value 
        let text = this.innerText
        let targeted = document.querySelector(`#${target}`)
        // update search input
        targeted.dataset.value = value
        targeted.style.display = 'block'
        targeted.innerText = text
        // update redux
        searchState[target] = value
        dispatch(update_search_state(searchState))
      })
    }
  }

  return (
    <div className="left-container">
      <div className="search">
      <div className="search-bubble" id="hemisphere" data-value=""></div>
        <div className="search-bubble" id="month" data-value=""></div>
        <div className="search-bubble" id="location" data-value=""></div>
        <div className="search-bubble" id="shadowSize" data-value=""></div>
        <span onClick={() => searchBtnClicked
        ()}>🔍</span>
      </div>
      <nav>
        <ul className="category-list">
          <li className="category">鱼类图鉴</li>
          <li className="category">
            <span>选择半球</span>
            <ul className="details" data-target="hemisphere">
                <li data-value="1">北半球</li>
                <li data-value="2">南半球</li>
            </ul>
          </li>
          <li className="category">
            <span>选择月份</span>
            <ul className="details" data-target="month">
              <li data-value="1">一月</li>
              <li data-value="2">二月</li>
              <li data-value="3">三月</li>
              <li data-value="4">四月</li>
              <li data-value="5">五月</li>
              <li data-value="6">六月</li>
              <li data-value="7">七月</li>
              <li data-value="8">八月</li>
              <li data-value="9">九月</li>
              <li data-value="10">十月</li>
              <li data-value="11">十一月</li>
              <li data-value="12">十二月</li>
            </ul>
          </li>
          <li className="category">
            <span>选择地点</span>
            <ul className="details" data-target="location">
                <li data-value="1">河流</li>
                <li data-value="2">大海</li>
                <li data-value="3">河口</li>
                <li data-value="4">池塘</li>
                <li data-value="5">高地水域</li>
                <li data-value="6">码头</li>
                <li data-value="7">大海(雨天)</li>
            </ul>
          </li>
          <li className="category">
            <span>鱼影大小</span>
            <ul className="details" data-target="shadowSize">
                <li data-value="1">特小</li>
                <li data-value="2">小</li>
                <li data-value="3">中偏小</li>
                <li data-value="4">中</li>
                <li data-value="5">中偏大</li>
                <li data-value="6">大</li>
                <li data-value="7">特大</li>
                <li data-value="8">细长</li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default leftSideBar;
