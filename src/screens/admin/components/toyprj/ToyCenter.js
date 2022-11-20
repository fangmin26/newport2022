import React from "react";
import { CenterModal } from "../common/ModalCustom";

const ToyCenter = ({ showClickClose, data }) => {
  return (
    <CenterModal onClickClose={showClickClose}>
      <div className="px-16 py-6 ">
        <img
          src={process.env.PUBLIC_URL + "/img/close.svg"}
          className="cursor-pointer absolute top-0 right-0"
          alt="닫기"
          onClick={showClickClose}
        />
        <div className="pt-4 flex flex-col gap-y-2">
          <p>제목 :{data.title}</p>
          <p>개발/독서 :{data.book !== undefined ? data.book : data.develop}</p>
          <p>작성날짜 :{data.createdAt}</p>
          <p>수정날짜 :{data.updatedAt}</p>
          <p>작성자 :{data.adminId}</p>
        </div>
      </div>
    </CenterModal>
  );
};

export default ToyCenter;
