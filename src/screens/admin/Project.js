import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { adminSideSubTitle, adminSideTitle } from '../../features/admin/commonAdmin';
import Navbar from './components/common/Navbar'
import Sidebar from './components/common/Sidebar'

const Project = () => {
  const dispatch = useDispatch();
  const tabs = ["web", "webapp"];
  const tabName = useSelector((state) => state.commonAdmin.sideSubtitle);
  const onClickTab = (e) => {
    dispatch(adminSideSubTitle(e.target.innerText));
    dispatch(adminSideTitle("project"));
  };
  useEffect(() => {
    if (tabName === "") {
      dispatch(adminSideSubTitle("web"));
      dispatch(adminSideTitle("project"));
    }
  }, []);
  return (
    <div className="w-full h-screen">
      <Sidebar />
      <Navbar />
      <div className="pt-[110px]  w-5/6  pb-[100px]">
        <div className="flex  font-semibold pt-[40px]">
          {tabs.map((el) => (
            <span
              key={el}
              className={
                el === tabName
                  ? "shadow-inner bg-white py-6 px-8 w-1/2 block cursor-pointer"
                  : "shadow-lg py-6 px-8 w-1/2 block cursor-pointer"
              }
              onClick={onClickTab}
            >
              {el}
            </span>
          ))}
        </div>
        {tabName === "web" ? (
          <div className='px-12 py-6'>
            web
          </div>
        ) : tabName === "webapp" ? (
          <div className='px-12 py-6'>
            webapp
          </div>
        )
        :
        (
          ""
        )}
      </div>
    </div>
  )
}

export default Project