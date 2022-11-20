import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToyPrjTrList } from "../../../../common/Data/ToyPrjTrList";
import { handleClickPage } from "../../../../features/admin/commonAdmin";
import JustFront from "../../toyprj/JustFront";

const Pagination = () => {
  //이페이지는 백엔드로해야함 결국 백엔드 연결해야함 ㅋ
  const dispatch = useDispatch();
  const page = useSelector((state) => state.commonAdmin.clickedPage);
  const [filters, setFilters] = useState({
    firstFilter: "개발언어",
    secondFilter: "개발",
  });
  const [filteringToyPrjList, setFilteringToyPrjList] = useState([]);
  const perPage = 4;
  const [pages, setPages] = useState(0);

  const eachPage = filteringToyPrjList.slice(
    (page - 1) * perPage,
    page * perPage
  );
  //page 가져오기
  const handlePageFn = (page) => {
    dispatch(handleClickPage(page));
  };
  const FilterLists = useCallback(
    (lists) => {
      setFilteringToyPrjList(lists);
      setPages(Math.ceil(lists.length / perPage));
    },
    [setFilteringToyPrjList, setPages]
  );
  //filter 가져오기
  const onClickFilter = (e, el, label) => {
    const div = document.querySelectorAll(".pei_listwidth");
    if (div !== undefined) {
      for (let i = 0; i < div.length; i++) {
        if (i === 0) {
          div[0].classList.add("pei_listwidth_active");
        } else {
          div[i].classList.remove("pei_listwidth_active");
        }
      }
    }
    handlePageFn(1);
    if (label === "개발") {
      setFilters({ ...filters, firstFilter: el });
      const filteringTitle = ToyPrjTrList.filter(
        (filt) => filt.develop === el || filt.book === filters.secondFilter
      );
      FilterLists(filteringTitle);
    } else {
      setFilters({ ...filters, secondFilter: el });
      const filteringTitle = ToyPrjTrList.filter(
        (filt) => filt.develop === filters.firstFilter || filt.book === el
      );
      FilterLists(filteringTitle);
    }
  };

  useEffect(() => {
    const filteringTitle = ToyPrjTrList.filter(
      (filt) =>
        filt.develop === filters.firstFilter ||
        filt.book === filters.secondFilter
    );
    FilterLists(filteringTitle);
  }, [FilterLists]);

  const filterArrFnc = (label, arrr) => {
    return (
      <div className="flex gap-x-6 items-center">
        <span className="text-sm">{label}</span>
        <div className="flex gap-x-2 items-center cursor-pointer">
          {label === "개발"
            ? arrr.map((el, idx) => (
                <p
                  key={idx}
                  className={
                    el === filters.firstFilter
                      ? "border-b border-black font-semibold"
                      : ""
                  }
                  onClick={(e) => onClickFilter(e, el, label)}
                >
                  {el}
                </p>
              ))
            : arrr.map((el, idx) => (
                <p
                  key={idx}
                  className={
                    el === filters.secondFilter
                      ? "border-b border-black font-semibold"
                      : ""
                  }
                  onClick={(e) => onClickFilter(e, el, label)}
                >
                  {el}
                </p>
              ))}
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="px-[32px] py-6 flex justify-between w-full">
        <div className="flex flex-col gap-y-4 ">
          {filterArrFnc("개발", [
            "개발언어",
            "라이브러리",
            "프레임워크",
            "오류 및 버그",
          ])}
          {filterArrFnc("독서", ["개발", "자기계발"])}
        </div>
      </div>
      {filteringToyPrjList.length > 0 ? (
        <JustFront
          handlePageFn={handlePageFn}
          page={page}
          perPage={perPage}
          pages={pages}
          eachPage={eachPage}
        />
      ) : (
        <div className="px-[48px]">
          <div className="bg-gray-100 p-4">검색 결과가 없습니다.</div>
        </div>
      )}
    </>
  );
};

export default Pagination;
