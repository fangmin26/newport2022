import React from 'react'
import { FrontSkillSetLists } from '../../../common/Data/AdminLists'
import Navbar from '../components/common/Navbar'
import Sidebar from '../components/common/Sidebar'
import SkillsetList from '../components/skillset/SkillsetList'

const Front = () => {
  return (
    <div className='w-full h-screen'>
      <Sidebar/>
      <Navbar/>
      <div className='pt-[110px] pb-[60px]'>
        {FrontSkillSetLists.map((el,idx)=>(
          <SkillsetList el={el} key={idx}/>
        ))}
      </div>
    </div>
  )
}
 
export default Front