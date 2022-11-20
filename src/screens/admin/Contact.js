import React, { useState } from "react";
import {
  MainContactLists0,
  MainContactLists1,
  MainContactOptinos,
} from "../../common/Data/AppLists";
import { ApiBox } from "../mobile/components/common/ApiBox";
import SelectBox from "../mobile/components/common/SelectBox";
import Navbar from "./components/common/Navbar";
import Sidebar from "./components/common/Sidebar";

const Contact = () => {
  const [selectName, setSelectName] = useState("contact");
  const onChangeSelectName = (e) => setSelectName(e.target.value);
  return (
    <div className="w-full h-screen">
      <Sidebar />
      <Navbar />
      <div className="pt-[110px] pb-[60px] w-5/6 px-[48px]">
        <div className="pt-[48px]">
          <SelectBox
            onChangeFc={onChangeSelectName}
            options={MainContactOptinos}
          />
          <div className="flex flex-col gap-y-2">
            <div className="text-xs flex">
              <span className="block px-2 border-r">My Key</span>
              <span className="block px-2">My Value</span>
            </div>
            {selectName === "contact" ? (
              <ApiBox contact={true} list={MainContactLists0} />
            ) : (
              <ApiBox contact={true} list={MainContactLists1} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
