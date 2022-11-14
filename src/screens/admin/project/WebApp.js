import React from 'react'
import { AppProjectList } from '../../../common/Data/AdminLists'
import Navbar from '../components/common/Navbar'
import Sidebar from '../components/common/Sidebar'
import ProjectList from '../components/project/ProjectList'

const WebApp = () => {
  return (
    <div className='w-full h-screen'>
      <Sidebar/>
      <Navbar/>
      <div className='pt-[110px] pb-[60px]'>
        {AppProjectList.map((el,idx)=>(
          <ProjectList key={idx} el={el} />
        ))}
      </div>
    </div>
  )
}

export default WebApp