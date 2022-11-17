import React from 'react'
import { useSelector } from 'react-redux'
import { ToyPrjTHEAD } from '../../../common/Data/AppLists'
import { ToyPrjTrList } from '../../../common/Data/ToyPrjTrList'
import Navbar from '../components/common/Navbar'
import Sidebar from '../components/common/Sidebar'
import Pagination from "pagination-peiss"

const ToyPrj = () => {
  const backallow = useSelector((state)=>state.commonAdmin.allowkey);
  const perPage = 2
  const pages = Math.ceil(ToyPrjTrList.length/perPage)
  const handlePageFn = () =>{
    console.log("hi")
  }
  //toyprj-pagination 작업중 :버그발견 (prev,next클릭시 perPage 보다 숫자가 적으면 초기화됌) + prev,next클릭시 가장 앞 순번에 active 넣을것

  return (
    <div className='w-full h-screen'>
      <Sidebar/>
      <Navbar/>
      <div className='pt-[110px]  w-5/6'>
        <div className='flex flex-col gap-y-4 px-[32px] py-6 shadow-lg'>
          <div className='flex gap-x-6 items-center'>
            <span className='text-sm '>개발</span>
            <div className='flex gap-x-2 items-center'>
              <p className='font-semibold border-black border-b'>개발언어</p>
              <span className='border  h-[20px]'></span>
              <p>라이브러리</p>
              <span className='border  h-[20px]'></span>
              <p>프레임워크</p>
              <span className='border  h-[20px]'></span>
              <p>오류 및 버그</p>
            </div>
          </div>
          <div className='flex gap-x-6 items-center'>
            <span className='text-sm'>독서</span>
            <div className='flex gap-x-2 items-center'>
              <p className='font-semibold border-black border-b'>개발</p>
              <span className='border  h-[20px]'></span>
              <p>자기계발</p>
            </div>
          </div>
          <div className='flex gap-x-3 justify-end'>
           <input className='border border-black w-[300px] p-2 outline-none'/>
           <span className='shadow-lg p-2'>search</span>
          </div>
        </div>
        <div className='pt-8 px-[48px] text-right'>
          <span className='block w-full'>현재 기능은 백엔드 api를 제외한 프론트 작업물입니다.</span>
          <span>backend api</span>
        </div>
        {backallow?
          <div className='px-[48px] pt-12'>
            <ul className='flex justify-center pb-6'>
              {/* <li className='px-2'>1</li> 
              <li className='px-2'>1</li> 
              <li className='px-2'>1</li>  */}
            </ul>
            <table className=' w-full text-left'>
              <thead className='bg-black text-white'>
                <tr>
                  {ToyPrjTHEAD.map((el)=>(
                    <th className={el ==="제목"?'p-2 w-2/5':'p-2'} key={el}
                    >{el}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className='border-t border-black'>
                  {/* <td className='p-2'>bb
                  </td>
                  <td className='p-2'>bb
                  </td>
                  <td className='p-2'>bb
                  </td>
                  <td className='p-2'>bb
                  </td>
                  <td className='p-2'>bb
                  </td> */}
                </tr>
              </tbody>
            </table>
          </div>:
          //생front
          <div className='px-[48px] pt-12'>
            <div className='flex justify-center py-4'>
              <Pagination
              totalCount={pages}
              pagePerList={perPage}
              activePage={1}
              onClick={()=>handlePageFn(1)}
              prevText={"prev"}
              nextText={"next"}
              prevEndText={"start"}
              nextEndText={"end"}
              />
            </div>
            <table className=' w-full text-left'>
              <thead className='bg-black text-white'>
                <tr>
                  {ToyPrjTHEAD.map((el)=>(
                    <th className={el ==="제목"?'p-2 w-2/5':'p-2'} key={el}
                    >{el}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ToyPrjTrList.map((el,idx)=>
                  <tr className='border-t border-black'
                  key={idx}
                  >
                    <td className='p-2'>{idx+1}
                    </td>
                    <td className='p-2'>{el.title}
                    </td>
                    <td className='p-2'>{el.createdAt}
                    </td>
                    <td className='p-2'>{el.updatedAt}
                    </td>
                    <td className='p-2'>{el.adminId}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
      }

      </div>
    </div>
  )
}

export default ToyPrj