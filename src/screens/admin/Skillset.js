import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BackSkillSetLists, FrontSkillSetLists } from '../../common/Data/AdminLists';
import { adminSideSubTitle, adminSideTitle } from '../../features/admin/commonAdmin';
import Navbar from './components/common/Navbar';
import Sidebar from './components/common/Sidebar';
import SkillsetList from './components/skillset/SkillsetList';

const Skillset = () => {
  const dispatch = useDispatch();
  const tabName = useSelector((state)=>state.commonAdmin.sideSubtitle)
  const tabs = ["front","back"]
  const onClickTab = (e)=>{
    dispatch(adminSideSubTitle(e.target.innerText)); 
    dispatch(adminSideTitle("skillset"))
  }
  return (
    <div className='w-full h-screen'>
      <Sidebar/>
      <Navbar/>
      <div className='pt-[110px] pb-[60px] w-5/6'>
        <div className='flex  font-semibold pt-[40px]'>
          {tabs.map((el)=>(
          <span 
          key={el}
          className=
          {el === tabName ?
            'shadow-inner bg-white py-6 px-8 w-1/2 block cursor-pointer'
            :'shadow-lg py-6 px-8 w-1/2 block cursor-pointer'
          }
          
          onClick={onClickTab}
          >{el}</span>
          ))}
        </div>
        <div className='pt-4'>
        {
        tabName ==="front"?
        FrontSkillSetLists.map((el,idx)=>(
          <SkillsetList el={el} key={idx}/>
        ))
        :
        BackSkillSetLists.map((el,idx)=>(
          <SkillsetList el={el} key={idx}/>
        ))}
        </div>

      </div>
    </div>
  )
}

export default Skillset