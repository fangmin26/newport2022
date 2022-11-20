import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  adminSideSubTitle,
  adminSideTitle,
  startScroll,
} from "../../../../features/admin/commonAdmin";
import { RightModal } from "./ModalCustom";
const Navbar = () => {
  const [account, setAccount] = useState(false);
  const scrollFunc = useSelector((state) => state.commonAdmin.scrollAction);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onClickShowAccount = () => {
    setAccount(!account);
  };
  const onScroll = () => {
    dispatch(
      startScroll(window.scrollY || window.pageYOffset > 30 ? true : false)
    );
  };
  const gotoyprj = () => {
    navigate("/admin/toyprj");
    dispatch(adminSideSubTitle("signin"));
    dispatch(adminSideTitle("toyprj"));
    onClickShowAccount();
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        scrollFunc
          ? "fixed top-0 right-0 w-full backdrop-blur-md border-b px-12 flex justify-between transition-all duration-300 ease-in-out h-[70px] "
          : "fixed top-0 right-0 w-full backdrop-blur-md border-b px-12 flex justify-between transition-all duration-300 ease-in-out h-[120px]"
      }
    >
      <div className="flex flex-col justify-center items-center font-semibold border-r pr-12">
        <span className="text-3xl ">XXX_2022</span>
        <span>welcome to pei's port</span>
      </div>
      <nav
        className="flex gap-x-4 justify-end items-center px-2 cursor-pointer"
        onClick={onClickShowAccount}
      >
        <span className="font-semibold">SIGNIN / SIGNUP</span>
        <img src={process.env.PUBLIC_URL + "/img/arrow_down.svg"} alt="하단" />
      </nav>
      {account && (
        <RightModal onClickClose={onClickShowAccount}>
          <div className="flex flex-col">
            <div className="p-4 relative">
              <div className="flex justify-between">
                <span>SIGNIN / SIGNUP</span>
                <img
                  src={process.env.PUBLIC_URL + "/img/close.svg"}
                  className="cursor-pointer absolute top-0 right-0"
                  alt="닫기"
                  onClick={onClickShowAccount}
                />
              </div>
              <div className="flex items-center gap-x-6 pt-4">
                <span className="block h-[36px] w-[36px] rounded-full border"></span>
                <span className="font-semibold">newbeee</span>
              </div>
            </div>
            <div
              className="border-t px-4 py-3 flex justify-between cursor-pointer"
              onClick={gotoyprj}
            >
              <span>로그인</span>
              <img
                src={process.env.PUBLIC_URL + "/img/arrow_next.svg"}
                className="cursor-pointer"
                alt="right_arrow"
              />
            </div>
            <div
              className="border-t px-4 py-3 flex justify-between"
              onClick={gotoyprj}
            >
              <span>회원가입</span>
              <img
                src={process.env.PUBLIC_URL + "/img/arrow_next.svg"}
                className="cursor-pointer"
                alt="right_arrow"
              />
            </div>
          </div>
        </RightModal>
      )}
    </header>
  );
};

export default Navbar;
