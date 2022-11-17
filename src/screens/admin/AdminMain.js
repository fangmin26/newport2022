import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { adminSideTitle } from '../../features/admin/commonAdmin'
import Navbar from './components/common/Navbar'
import Sidebar from './components/common/Sidebar'

const AdminMain = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(adminSideTitle("home"))
  },[])
  return (
    <div className='w-full h-screen'>
      <Sidebar/>
      <Navbar/>
      <div className='pt-[110px] pb-[60px] px-[48px]'>
        이력서와 사진을여기다가  
        자격증및 이전 경력사항 : 
        다양한 언어자격증, 컬러리스트기사, 웹디자인기능사,정보처리기사 필기합격,
        <br></br> 
         21년 2월 부터 약 4개월간 독학 후 취업.
         취업후 1년 6개월동안 약 5개의 Admin 작업 및 웹앱 작업
         reactjs를 기본으로 공부하고 있고, nestjs를 활용한 백엔드
         api 및 서버 구성을 공부 및 프로젝트 일부 참여한 경험이 있음
         이에 해당하는 네이티브와 aws도 가볍게 공부하고 있음.
      </div>
    </div>
  )
}

export default AdminMain