import React from 'react'
import Navbar from './components/common/Navbar'
import Sidebar from './components/common/Sidebar'

const Contact = () => {
  return (
    <div className='w-full h-screen'>
      <Sidebar/>
      <Navbar/>
      <div className='pt-[110px] pb-[60px] w-5/6'>
        contact, message (post누르도록)
      </div>
    </div>
  )
}

export default Contact