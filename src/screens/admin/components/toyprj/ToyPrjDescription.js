import React from "react";
import { ToyPrjDesc } from "../../../../common/Data/ToyPrjTrList";

const ToyPrjDescription = ({ tabName }) => {
  const filterLists = ToyPrjDesc.filter((el) => el.tabName === tabName);
  return (
    <div className="bg-gray-100 px-3 py-5 mt-4">
      <span className="font-bold">{tabName} 기능</span>
      {filterLists[0] !== undefined &&
        filterLists[0].lines.map((list) => <p key={list}>{list}</p>)}
    </div>
  );
};

export default ToyPrjDescription;
