import React from 'react'
import { WebProjectList } from '../../../common/Data/AdminLists'
import Navbar from '../components/common/Navbar'
import Sidebar from '../components/common/Sidebar'
import ProjectList from '../components/project/ProjectList'

const Web = () => {
  return (
    <div className='w-full h-screen'>
      <span>hi</span>
      <Sidebar/>
      <Navbar/>
      <div className='pt-[110px] pb-[60px]'>
        {WebProjectList.map((el,idx)=>(
          <ProjectList key={idx} el={el} />
        ))}
      </div>
    </div>
  )
}

export default Web