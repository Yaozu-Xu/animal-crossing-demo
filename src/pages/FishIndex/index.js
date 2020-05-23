import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'
import FishApi from "@api/fish";
import LeftSideBar from "@components/LeftSideBar/index";
import DisplayTable from "@components/DisplayTable/index";
import { update_fetch_data } from "@store/actions/displayList"

const FishIndex = () => {
  // const displayData = useSelector(state => state.displayList)
  const dispatch = useDispatch()
  const fetchData = async () => {
    const res = await FishApi.getFish();
    dispatch(update_fetch_data(res.data))
  };
  useEffect(() => {
      fetchData()
  }, []);
  return (
    <div className="main">
        <LeftSideBar />
        <DisplayTable/>
    </div>
  );
};

export default FishIndex;
