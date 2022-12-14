import React from 'react'
import Navbar from '../components/common/Navbar'
import Sidebar from '../components/common/Sidebar'

const Web = () => {
  return (
    <div className="w-full h-screen">
      <Sidebar />
      <Navbar />
      <div className="pt-[110px]  w-5/6 px-[48px] pb-[100px]">
        <div className="flex  font-semibold pt-[40px]">
          ff
        </div>
      </div>
    </div>
  )
}

export default Web