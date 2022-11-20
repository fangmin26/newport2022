import React, { useState } from "react";
//import { ToyPrjTrList } from "../../../common/Data/lists";
import Pagination from "pagination-peiss";
import { ToyPrjTHEAD } from "../../../common/Data/AppLists";
import ToyCenter from "../components/toyprj/ToyCenter";

const JustFront = ({ handlePageFn, page, perPage, pages, eachPage }) => {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState([]);
  const showClickClose = (el) => {
    setOpenModal(!openModal);
    setData(el);
  };
  return (
    <>
      <div className="px-[48px] pt-3">
        <div className="flex justify-center py-4">
          <Pagination
            totalCount={pages}
            pagePerList={perPage}
            activePage={page}
            onClick={(page) => handlePageFn(page)}
            prevText={"prev"}
            nextText={"next"}
            prevEndText={"start"}
            nextEndText={"end"}
          />
        </div>
        <table className=" w-full text-left">
          <thead className="bg-black text-white">
            <tr>
              {ToyPrjTHEAD.map((el) => (
                <th className={el === "제목" ? "p-2" : "p-2"} key={el}>
                  {el}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {eachPage.map((el, idx) => (
              <tr
                className="border-t border-black hover:bg-gray-100 cursor-pointer"
                key={idx}
                onClick={() => showClickClose(el)}
              >
                <td className="p-2">{idx + 1 + perPage * (page - 1)}</td>
                <td className="p-2">{el.title}</td>
                <td className="p-2">
                  {el.develop !== undefined ? el.develop : el.book}
                </td>
                <td className="p-2">{el.createdAt}</td>
                <td className="p-2">{el.updatedAt}</td>
                <td className="p-2">{el.adminId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {openModal && <ToyCenter showClickClose={showClickClose} data={data} />}
    </>
  );
};

export default JustFront;
