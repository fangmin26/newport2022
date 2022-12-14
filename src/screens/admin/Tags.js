import React, { useState } from 'react'
import Navbar from './components/common/Navbar'
import Sidebar from './components/common/Sidebar'


const Tags = () => {
  const tags = ["tag12345","tag2333","tag3","tag4","tag5","tag6","tag7","tag8","tag9"];
  const [getTagName,setGetTagName] = useState(null)
  // const tagsList = [
  //   {
  //     tagname:"tag12345",
  //     tagLists :[
  //       {
  //         title:"title1",
  //         content:"content1"
  //       },
  //       {
  //         title:"title2",
  //         content:"content2"
  //       }
  //     ]
  //   },
  // ];

  return (
    <div className='w-full h-screen'>
      <Sidebar/>
      <Navbar/>
      <div className='pt-[120px] pb-[60px] w-5/6 '>
        <ul className='border-b px-6 py-4 flex flex-wrap gap-4'>
          {tags?.map((el, idx)=>(
            <li key={idx}
            onClick={()=>setGetTagName(el)}
            className={"py-2 px-6 text-sm font-semibold rounded inline-block "+
              (idx%2 !==0? "bg-black text-white":"border text-black")
            }>{el}</li>
          ))}
        </ul>
        <ul className=''>
            <li className='p-6 border-b'>
              <span className='py-2 px-6 text-sm font-semibold rounded inline-block bg-black text-white'>tag</span>
              <span className='py-4 font-semibold text-lg block'>subtitle1</span>
              <p className='leading-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </li>
            <li className='p-6 border-b'>
            <span className='py-2 px-6 text-sm font-semibold rounded inline-block bg-black text-white'>tag</span>
              <span className='py-4 font-semibold text-lg block'>subtitle1</span>
              <p className='leading-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Tags