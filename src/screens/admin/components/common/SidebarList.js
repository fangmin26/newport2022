import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion";
import { adminSideSubTitle, adminSideTitle } from '../../../../features/admin/commonAdmin';

const SidebarList = ({el,idx}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const titleName = useSelector((state)=>state.commonAdmin.sideTitle)
  const subTitleName = useSelector((state)=>state.commonAdmin.sideSubtitle)
  const goLink  = (param) =>{
    if(param ==="title"){
      navigate(el.titleLink)
      dispatch(adminSideTitle(el.title));
      dispatch(adminSideSubTitle(el.subtitle1))
    }else if(param ==="subtit1"){
      navigate(el.subtitle1Link)
      dispatch(adminSideSubTitle(el.subtitle1))
    }else{
      navigate(el.subtitle2Link)
      dispatch(adminSideSubTitle(el.subtitle2))
    }
  }
  return (
    <li className=
    {titleName === el.title?'border-b px-6 py-4 bg-black text-white':'border-b px-6 py-4'}
    >
      <div className='flex justify-between py-4 cursor-pointer'
       onClick={()=>goLink("title")}>
        <div className='flex gap-x-4 '>
          {el.title}
        </div>
        <img src={process.env.PUBLIC_URL+"/img/arrow_down.svg"} alt="하단"/>
      </div>
      {titleName === el.title && el.subtitle1!==undefined ?
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={e => e.stopPropagation()}>
          <div className='flex flex-col cursor-pointer'>
            <div className =
            {subTitleName===el.subtitle1?"text-gray-500 px-2":"hover:text-gray-500 px-2"}
            onClick={()=>goLink("subtit1")}
            >{el.subtitle1}</div>
            <span className='w-full h-[1px] bg-white block my-1'></span>
            <div className =
            {subTitleName===el.subtitle2?"text-gray-500 px-2":"hover:text-gray-500 px-2"}
            onClick={()=>goLink("subtit2")}        
            >{el.subtitle2}</div>
          </div>
      </motion.div>
       :""}
    </li>
  )
}

export default SidebarList