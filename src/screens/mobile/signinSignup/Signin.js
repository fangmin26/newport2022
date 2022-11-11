import React, { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import toastCommonProps from '../../../common/Toast'
import  { BDButton, BGButton } from '../components/common/Button'
import { LeftLabelInput } from '../components/common/Input'

const Signin = () => {
  const allowkey = useSelector((state)=>state.commonApp.allowkey)
  const navigate= useNavigate();
  const [login, setLogin] = useState({
    userid:"",
    pass:""
  })
  const onChangeLogin = (e) =>{
    const {name,value} = e.target;
    setLogin({...login, [name]:value});
  }

  const callme = useCallback(()=>{
    toast(<p>해당기능 test를 원하시면<br />01029693106으로 연락주세요:)</p>, toastCommonProps('top-right', 'toast_alert',1000))
  },[toast, toastCommonProps])

  const loginOk = useCallback(()=>{
    toast(<p>로그인되었습니다.</p>, toastCommonProps('top-right', 'toast_alert',1000))
    setTimeout(()=>navigate("/main"),2000)
  },[toast, toastCommonProps]);
  const loginFalse = useCallback(()=>{
    toast(<p>아이디와 패스워드를 확인하세요.</p>, toastCommonProps('top-right', 'toast_fail',1000))
  },[toast, toastCommonProps]);

  const onClickLogin = () =>{
    if(allowkey){
      //dispatch함수..
      loginOk();
    }else{
      if(login.userid.replace(" ","") ==="PEI_01" && login.pass.replace(" ","") ==="1111"){
        loginOk();
      }else{
        loginFalse();
      }      
    }
  }
  const onClickFindId=()=>{
    if(allowkey){
      navigate('/findid')
    }else{
      callme()
    }
  }
  const onClickFindPw = () =>{
    if(allowkey){
      navigate('/findpw')
    }else{
      callme()
    }
  }
  const onClickSignup = () =>{
    if(allowkey){
      navigate('/signup')
    }else{
      callme()
    }
  }

  return (
    <div className=' h-screen'>
      <div className='fixed top-2 right-2 p-4 bg-white rounded shadow-lg flex flex-col'>
        <span>SAMPLE ID:PEI_01</span>
        <span>SAMPLE PW:1111</span>
      </div>
      <span className='absolute top-6 left-6 border'>
        logo
      </span>
      <div className='text-center pt-24 pb-6'>
        Login
      </div>
      <div className='flex justify-center flex-col gap-y-4 rounded bg-red-100 p-6'>
        <LeftLabelInput
        labelWidth={'w-[100px]'}
        labelName={'아이디'}
        inputName={'userid'}
        onChangeFc={onChangeLogin}
        onClickFc={onClickLogin}
        />
        <LeftLabelInput
        labelWidth={'w-[100px]'}
        labelName={'비밀번호'}
        inputName={'pass'}
        onChangeFc={onChangeLogin}
        onClickFc={onClickLogin}
        />
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
        onClickFunc={onClickSignup}
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