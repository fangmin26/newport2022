import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { adminSideTitle } from '../../features/admin/commonAdmin'
import Navbar from './components/common/Navbar'
import Sidebar from './components/common/Sidebar'
import Pagination from "pagination-peiss"
// react version이 안 맞아서 legacy-peer-deps로 일단 설치 추후 코드 까볼것. buffer도 깔아야한다고 에러 떠서 같이 설치함
import ReactHtmlParser from 'react-html-parser'; 
const AdminMain = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(adminSideTitle("/"))
  },[dispatch,adminSideTitle])
  const page = 1;
  const lists = [
    {id:1, title:"title1",src:"bg-[url('../public/images/photos/sampleimage.jpg')]", content:"<div class='text-red-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. L...</div><strong>this is h1</strong>"},
    {id:2, title:"title2",src:"bg-[url('../public/images/photos/sampleimage.jpg')]", content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. L...", tags:["sql","javascript","aws","python"]},
    {id:3, title:"title3",src:"bg-[url('../public/images/photos/sampleimage.jpg')]", content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. L...", tags:["sql","javascript","aws","python"]},
    {id:4, title:"title1",src:"bg-[url('../public/images/photos/sampleimage.jpg')]", content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. L...", tags:["sql","javascript","aws",]},
    {id:5, title:"title1",src:"bg-[url('../public/images/photos/sampleimage.jpg')]", content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. L...", tags:["sql","aws","python"]},
    {id:6, title:"title1",src:"bg-[url('../public/images/photos/sampleimage.jpg')]", content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. L...", tags:["sql","javascript","aws","python"]}
  ]
  const mainList = (el) =>{
    // let parser = new DOMParser();
    // const doc = parser.parseFromString(el.content,'text/html')
    // const makeContentHtml = doc.body.outerHTML
    // console.log(typeof makeContentHtml,"html")
    let newCont = ReactHtmlParser(el.content)
    return( 
      <>
        <div className={'bg-gray-100 h-[250px] ' +el.src} ></div>
        <div className='p-4'>
          <p className='font-bold'>{el.title}</p>
          <p>{newCont}</p>
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
      <section className='pt-[120px] pb-[160px] w-5/6'>
        <div className={'text-white border-b  h-[500px] px-12 py-8 flex justify-end items-left flex-col '+
        "bg-[url('../public/images/photos/sampleimage.jpg')]"}
        >
            <h1 className='text-2xl font-semibold'>this is the recent title</h1>
            <h2>this is the subtitle. the first row</h2>
            <h2>this is the subtitle. and the second row </h2>
        </div>
        <ul className=' grid grid-cols-4 gap-4 p-6'>
          {lists.map((el,idx)=>
          <li key={idx}>{mainList(el)}</li>
          )}
        </ul>
        <div className='flex justify-center'>
          <Pagination
            totalCount={300}
            pagePerList={10}
            activePage={page}
            onClick={(page)=>console.log(page)}
            prevText={"<"}
            nextText={">"}
            prevEndText={"<<"}
            nextEndText={">>"}
          />
        </div>

      </section>

    </div>
  )
}

export default AdminMain