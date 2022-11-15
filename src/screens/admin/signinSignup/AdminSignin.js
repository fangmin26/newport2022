import React, { useCallback, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import toastCommonProps from '../../../common/Toast';
import { BDButton, BGButton } from '../../mobile/components/common/Button';
import { LeftLabelInputAdmin } from '../../mobile/components/common/Input';

const AdminSignin = () => {
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
    setTimeout(()=>navigate("/admin/main"),2000)
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
    <div className='h-screen'>
      <div className='fixed top-2 right-2 p-4 bg-white rounded shadow-lg flex flex-col'>
        <span>SAMPLE ID:PEI_01</span>
        <span>SAMPLE PW:1111</span>
      </div>
      <span className='absolute top-6 left-6 border'>
        logo
      </span>
      <div className='shadow-lg mt-24 p-6 h-[400px] flex items-center justify-center flex-col'>
        <div className='text-center'>
          Login
        </div>
        <div className='flex justify-center flex-col gap-y-4 p-6'>
          <LeftLabelInputAdmin
          labelWidth={'w-[100px]'}
          labelName={'아이디'}
          inputName={'userid'}
          onChangeFc={onChangeLogin}
          onClickFc={onClickLogin}
          />
          <LeftLabelInputAdmin
          labelWidth={'w-[100px]'}
          labelName={'비밀번호'}
          inputName={'pass'}
          onChangeFc={onChangeLogin}
          onClickFc={onClickLogin}
          />
        </div>
        <div className='flex flex-col gap-y-2 pt-6 w-full'>
        <BGButton
        title={"로그인"}
        bgColor={"bg-black"} 
        hoverBgColor={"hover:bg-gray-800"}
        textSize={"text-lg"}
        textColor={"text-[#ffffff]"}
        onClickFunc={onClickLogin}
        />
      <div className='pt-4 flex gap-x-4 justify-center'>
        <span className='hover:text-gray-600 cursor-pointer text-sm'
        onClick={onClickFindId}
        >아이디 찾기</span>
        <span className='block w-[1px] h-[20px] bg-black'></span>
        <span className='hover:text-gray-600 cursor-pointer text-sm'
        onClick={onClickFindPw}
        >비밀번호 찾기</span>
      </div>

      </div>
      </div>
      <div className='pt-6 px-12'>
        <BDButton
          title={"어드민 회원가입"}
          hoverBdColor ={"hover:outline-black"}
          bdColor = {"outline-black"}
          bgColor={"bg-gray-100"} 
          hoverBgColor={"hover:bg-gray-200"}
          textSize={"text-lg"}
          textColor={"text-[#000]"}
          onClickFunc={onClickSignup}
          />
      </div>
    </div>
  )
}

export default AdminSignin