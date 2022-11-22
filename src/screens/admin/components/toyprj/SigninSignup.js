import React from 'react'
import { LeftLabelInputAdmin } from '../../../mobile/components/common/Input'
import { BGButton } from '../common/Button'
import BlackLabel from './BlackLabel'

const SigninSignup = () => {
  return (
    <BlackLabel title={"로그인, 회원가입"}>
      <div className='py-4'>
      <div className='shadow-lg mt-24 p-6 h-[400px] flex items-center justify-center flex-col'>
        <div className='text-center'>
          Login
        </div>
        <div className='flex justify-center flex-col gap-y-4 p-6'>
          <LeftLabelInputAdmin
          labelWidth={'w-[100px]'}
          labelName={'아이디'}
          inputName={'userid'}
        // onChangeFc={onChangeLogin}
         // onClickFc={onClickLogin}
          />
          <LeftLabelInputAdmin
          labelWidth={'w-[100px]'}
          labelName={'비밀번호'}
          inputName={'pass'}
          //onChangeFc={onChangeLogin}
          //onClickFc={onClickLogin}
          />
        </div>
        <div className='flex flex-col gap-y-2 pt-6 w-full'>
        <BGButton
        title={"로그인"}
        bgColor={"bg-black"} 
        hoverBgColor={"hover:bg-gray-800"}
        textSize={"text-lg"}
        textColor={"text-[#ffffff]"}
        //onClickFunc={onClickLogin}
        />
      <div className='pt-4 flex gap-x-4 justify-center'>
        <span className='hover:text-gray-600 cursor-pointer text-sm'
       // onClick={onClickFindId}
        >아이디 찾기</span>
        <span className='block w-[1px] h-[20px] bg-black'></span>
        <span className='hover:text-gray-600 cursor-pointer text-sm'
        //onClick={onClickFindPw}
        >비밀번호 찾기</span>
      </div>

      </div>
      </div>
      </div>
    </BlackLabel>
  )
}

export default SigninSignup