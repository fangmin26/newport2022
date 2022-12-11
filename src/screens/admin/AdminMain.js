import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { adminSideTitle } from '../../features/admin/commonAdmin'
import Navbar from './components/common/Navbar'
import Sidebar from './components/common/Sidebar'
const AdminMain = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(adminSideTitle("home"))
  },[dispatch,adminSideTitle])

  const lists = [
    {id:1, title:"title1",src:"bg-[url('../public/images/photos/sampleimage.jpg')]", content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. L..."},
    {id:2, title:"title2",src:"bg-[url('../public/images/photos/sampleimage.jpg')]", content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. L...", tags:["sql","javascript","aws","python"]},
    {id:3, title:"title3",src:"bg-[url('../public/images/photos/sampleimage.jpg')]", content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. L...", tags:["sql","javascript","aws","python"]},
    {id:4, title:"title1",src:"bg-[url('../public/images/photos/sampleimage.jpg')]", content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. L...", tags:["sql","javascript","aws",]},
    {id:5, title:"title1",src:"bg-[url('../public/images/photos/sampleimage.jpg')]", content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. L...", tags:["sql","aws","python"]},
    {id:6, title:"title1",src:"bg-[url('../public/images/photos/sampleimage.jpg')]", content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. L...", tags:["sql","javascript","aws","python"]}
  ]
  const mainList = (el) =>{
    return( 
      <>
        <div className={'bg-gray-100 h-[250px] ' +el.src} ></div>
        <div className='p-4'>
          <p className='font-bold'>{el.title}</p>
          <p>{el.content}</p>
          <ul className='flex gap-x-2'>
            {el.tags?.map((elem,idx)=>
            <li 
            className='text-xs bg-gray-200 rounded p-1'
            key={idx}>{elem}</li>
            )}
          </ul>
        </div>
      </>
    )
  }
  return (
    <div className='w-full h-screen'>
      <Sidebar/>
      <Navbar/>
      <section className='pt-[120px] pb-[60px]'>
        <div className={'text-white border-b  h-[500px] px-12 py-8 flex justify-end items-left flex-col '+
        "bg-[url('../public/images/photos/sampleimage.jpg')]"}
        >
            <h1 className='text-2xl font-semibold'>this is the recent title</h1>
            <h2>this is the subtitle. the first row</h2>
            <h2>this is the subtitle. and the second row </h2>
        </div>
        <ul className='w-5/6 grid grid-cols-4 gap-4 p-6'>
          {lists.map((el,idx)=>
          <li key={idx}>{mainList(el)}</li>
          )}
        </ul>
      </section>
    </div>
  )
}

export default AdminMain