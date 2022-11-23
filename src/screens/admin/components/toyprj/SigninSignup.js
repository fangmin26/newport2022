import axios from 'axios'
import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import toastCommonProps from '../../../../common/Toast'
import { LeftLabelInputAdmin } from '../../../mobile/components/common/Input'
import { BDButton, BGButton } from '../common/Button'
import { CenterModal } from '../common/ModalCustom'
import BlackLabel from './BlackLabel'

const SigninSignup = () => {
  const navigate= useNavigate();
  const [modal, setModal] = useState(false)
  const [login, setLogin] = useState({
    userid:"",
    pass:""
  })
  const onChangeLogin = (e) =>{
    const {name,value} = e.target;
    setLogin({...login, [name]:value});
  }

  const loginOk = useCallback(()=>{
    toast(<p>로그인되었습니다.</p>, toastCommonProps('top-right', 'toast_alert',1000))
    setModal(true)
  },[toast, toastCommonProps]);

  const loginFalse = useCallback(()=>{
    toast(<p>아이디와 패스워드를 확인하세요.</p>, toastCommonProps('top-right', 'toast_fail',1000))
  },[toast, toastCommonProps]);

  const onClickLogin = () =>{
    if(login.userid.replace(" ","") ==="PEI_01" && login.pass.replace(" ","") ==="1111"){
      loginOk();
    }else{
      loginFalse();
    }      
  };

  // const onClickFindId = 
  const string =   `
  const goMainPage = () =>{
    let param = login;
    // const login = {loginid:input loginId값, pass:input pass 값}

    1.redux-toolkit dispatch 사용
    const LoginIn = async()=>{
      try {
        const res = dispatch(loginAdmin(param)).upwrap();
        if(res.ok){
          navigate("/main");
          //localStorage에 저장
          window.localStorage.setItem("admin", res.data.adminData);
        }else{
          console.log(res);
        }
      } catch (error) {
        console.log(error);
      }
    }
    //2.기본 axios 사용할 경우
    // axios.post("/login",param).then((res)=>{
    //   try {
    //     if(res.data.ok){
    //       navigate("/main");
    //     }else{
    //       console.log(res);
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // });
   
  }
  `;
  return (
    <BlackLabel title={"로그인, 회원가입 폼"}>
      <div className='py-4 relative'>
        <div className='absolute top-3 right-0 bg-white rounded shadow-lg flex flex-col'>
          <span className='bg-gray-100 px-4 py-1'>SAMPLE</span>
          <div className='py-1 flex flex-col gap-y-1 px-4'>
            <span>ID:PEI_01</span>
            <span>PW:1111</span>
          </div>
        </div>
        <div className='shadow-lg p-6 h-[400px] flex items-center justify-center flex-col'>
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
            {modal&&
              <CenterModal height={"h-[400px]"} onClickClose={()=>setModal(false)}>
                <div className='relative'>
                  <img
                    src={process.env.PUBLIC_URL + "/img/close.svg"}
                    className="cursor-pointer absolute top-0 right-0"
                    alt="닫기"
                    onClick={()=>setModal(false)}
                  />
                  <div className='p-6'>
                    <p className='whitespace-pre-wrap'>
                      {string}
                    </p>
                  </div>
                </div>
              </CenterModal>
            }
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
              //onClick={onClickFindPw}
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
            // onClickFunc={onClickSignup}
            />
        </div>
        </div>
      </BlackLabel>
  )
}

export default SigninSignup