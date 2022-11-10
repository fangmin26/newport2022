import React from 'react'
import { useNavigate } from 'react-router-dom'
import  { BDButton, BGButton } from '../components/common/Button'

const Signin = () => {
  const navigate= useNavigate()
  const onClickLogin = () =>{
    console.log("login")
  }
  const onClickFindId=()=>{
    navigate("/findid")
  }
  const onClickFindPw = () =>{
    navigate("/findpw")
  }
  return (
    <div className='border h-screen px-6 relative'>
      <span className='absolute top-6 left-6 border'>
        logo
      </span>
      <div className='text-center pt-24 pb-6'>
        Login
      </div>
      <div className='flex justify-center flex-col gap-y-4 rounded bg-red-100 p-6'>
        <div className='w-full flex items-center gap-x-2 '>
          <label htmlFor='userid' className='w-[100px]'>아이디</label>
          <input id='userid' className='w-full rounded outline-none px-3 py-2'/>
        </div>
        <div className='w-full flex items-center gap-x-2 '>
          <label htmlFor='userid' className='w-[100px]'>비밀번호</label>
          <input id='userid' className='w-full rounded outline-none px-3 py-2'/>
        </div>
      </div>
      <div className='flex flex-col gap-y-2 pt-6'>
        <BGButton
        title={"로그인"}
        bgColor={"bg-red-200"} 
        hoverBgColor={"hover:bg-red-300"}
        textSize={"text-lg"}
        textColor={"text-[#ffffff]"}
        onClickFunc={onClickLogin}
        />
        <BDButton
        title={"회원가입"}
        hoverBdColor ={"hover:outline-red-300"}
        bdColor = {"outline-red-200"}
        bgColor={"bg-red-100"} 
        hoverBgColor={"hover:bg-red-200"}
        textSize={"text-lg"}
        textColor={"text-[#000]"}
        onClickFunc={onClickLogin}
        />
      </div>
      <div className='pt-4 flex justify-end gap-x-2'>
        <span className='hover:bg-red-100 p-2 rounded cursor-pointer text-sm'
        onClick={onClickFindId}
        >아이디 찾기</span>
        <span className='hover:bg-red-100 p-2 rounded cursor-pointer text-sm'
        onClick={onClickFindPw}
        >비밀번호 찾기</span>
      </div>
 
    </div>
  )
}

export default Signin