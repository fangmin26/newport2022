import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { RightModal } from './ModalCustom'

const Navbar = () => {
  const [account,setAccount] = useState(false);
  const navigate = useNavigate();
  const onClickShowAccount = () =>{
    setAccount(!account)
  }
  const goLogout = () =>{
    navigate("/admin/signin")
  }
  return (
    <header className='fixed top-0 right-0 w-full border-b bg-gray-100 px-12 flex justify-between'>
      <div className='flex flex-col font-semibold py-6 border-r pr-12'>
        <span className='text-3xl'>NEW_PORT_2022</span>
        <span>welcome to pei's new port</span>
      </div>
      <nav className='flex gap-x-4 justify-end items-center px-2 cursor-pointer'
       onClick={onClickShowAccount}
      >
        <span className='block h-[36px] w-[36px] rounded-full border'></span>
        <div className='flex flex-col'>
          <span className='font-semibold'>이순신</span>
          <span className='text-xs'>슈퍼관리자</span>
        </div>
        <div className='border rounded-full'>하단</div>
      </nav>
      {account &&
      <RightModal onClickClose={onClickShowAccount}>
        <div className='flex flex-col'>
          <div className='p-4'>
            <div className='flex justify-between'>
              <span>로그인 계정</span>
              <span className='border cursor-pointer'
              onClick={onClickShowAccount}
              >X</span>
            </div>
            <div className='flex gap-x-6 pt-4'>
              <span className='block h-[36px] w-[36px] rounded-full border'></span>
              <div className='flex flex-col'>
                <span className='font-semibold'>이순신</span>
                <span className='text-xs'>슈퍼관리자</span>
              </div>
            </div>
          </div>
          <div className='border-t px-4 py-3 flex justify-between cursor-pointer'
          onClick={()=>navigate("/admin/account")}
          >
            <span>
            내 정보 관리
            </span>
            <span className='border'>오</span>
          </div>
          <div className='border-t px-4 py-2 flex justify-between'
          onClick={goLogout}>
            <span>로그아웃</span>
            <span className='border'>오</span>
          </div>
        </div>
      </RightModal>
      }
    </header>
  )
}

export default Navbar