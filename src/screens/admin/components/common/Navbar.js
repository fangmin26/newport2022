import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {

  startScroll,
} from "../../../../features/admin/commonAdmin";
const Navbar = () => {
  const [account, setAccount] = useState(false);
  const scrollFunc = useSelector((state) => state.commonAdmin.scrollAction);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onClickShowAccount = () => {
    setAccount(!account);
  };
  const onScroll = () => {
    dispatch(
      startScroll(window.scrollY || window.pageYOffset > 30 ? true : false)
    );
  };

  const allLists = [
    {id:1, tagname:"tagname1", content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing"},
    {id:2, tagname:"tagname2", content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing"},
    {id:3, tagname:"tagname3", content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing"},
    {id:4, tagname:"tagname4", content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing"},

  ]

  const searchList = (el) =>{
    return(
      <>
        <span className="text-sm font-semibold bg-gray-300 text-white p-2 rounded inline-block">{el.tagname}</span>
        <div>
        <p>{el.content}</p>
        </div>
        </>
    )
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
     <header
      className={
        scrollFunc
          ? "fixed top-0 right-0 w-full backdrop-blur-md border-b px-12 flex justify-between transition-all duration-300 ease-in-out h-[70px] "
          : "fixed top-0 right-0 w-full backdrop-blur-md border-b px-12 flex justify-between transition-all duration-300 ease-in-out h-[120px]"
      }>
        <div className="flex flex-col justify-center items-center font-semibold border-r pr-12">
          <span className="text-3xl ">XXX_2022</span>
          <span>welcome to pei's port</span>
        </div>
        <div
          className="flex justify-end items-center w-2/3 ">
          {/* <input className="w-full border p-2 h-[48px]"/> */}
          {/* 클릭전 input  */}
          <div className="border cursor-pointer p-2 flex gap-x-4 items-center justify-between h-[48px] w-[160px]"
          onClick={onClickShowAccount} >     
            <span className="font-semibold">SEARCH</span>
            <img src={process.env.PUBLIC_URL + "/images/arrow_down.svg"} alt="하단" />
          </div>
        </div>
      </header>
      {/* searchLists */}
      {/* <ul className="absolute top-0 left-0 mt-[120px] bg-white w-full flex justify-end flex-col">  
        {allLists.map((el)=>(
          <li className="px-12 py-6 border-b flex items-start gap-x-4">
          {searchList(el)}
          </li>
        ))}
      </ul> */}
    </>

  );
};

export default Navbar;
