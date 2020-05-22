import React, { useEffect, useState } from "react";
import FishApi from "@api/fish";
import LeftSideBar from "@components/LeftSideBar/index";
import DisplayTable from "@components/DisplayTable/index";
import { FishContext } from '@store/index'

const FishIndex = () => {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    const res = await FishApi.getFish();
    setData(res.data);
  };
  useEffect(() => {
      fetchData()
  }, []);
  
  return (
    <div className="main">
      <FishContext.Provider value={{fishData:data, searchState: []}}>
        <LeftSideBar />
        <DisplayTable/>
      </FishContext.Provider>
    </div>
  );
};

export default FishIndex;
