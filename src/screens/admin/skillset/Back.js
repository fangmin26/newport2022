import React from 'react'
import { useDispatch } from 'react-redux'
import { BackSkillSetLists } from '../../../common/Data/AdminLists'
import { adminSideSubTitle, adminSideTitle } from '../../../features/admin/commonAdmin'
import Navbar from '../components/common/Navbar'
import Sidebar from '../components/common/Sidebar'
import SkillsetList from '../components/skillset/SkillsetList'

const Back = () => {
  const dispatch = useDispatch();
  const onClickTab = (e)=>{
    dispatch(adminSideSubTitle(e.target.innerText)); 
    dispatch(adminSideTitle("skillset"))
  }
  return (
    <div className='w-full h-screen'>
      <Sidebar/>
      <Navbar/>
      <div className='pt-[110px] pb-[60px]'>
        <div className='pt-[40px] px-[48px] border-b flex '>
          <span className='border-l border-t border-b p-4 block cursor-pointer'
          onClick={onClickTab}
          >front</span>
          <span className='border-l border-t border-r border-b p-4 block cursor-pointer'
          onClick={onClickTab}
          >back</span>
        </div>
        {BackSkillSetLists.map((el,idx)=>(
          <SkillsetList el={el} key={idx}/>
        ))}
      </div>
    </div>
  )
}
 
export default Back