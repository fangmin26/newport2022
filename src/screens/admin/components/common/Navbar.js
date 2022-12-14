import dayjs from "dayjs";
import React, { useState, useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import {

  startScroll,
} from "../../../../features/admin/commonAdmin";
import PhotoCard from "./PhotoCard";
const Navbar = () => {
  const [inputVal,setInputVal] = useState("");
  const [openPutModal, setOpenPutModal] = useState(false)
  const scrollFunc = useSelector((state) => state.commonAdmin.scrollAction);
  const dispatch = useDispatch();
  const [files, setFiles] = useState([]);

  const [loadedImage, setLoadedImage] = useState([]);
  const onChangeInput = (e) =>{
      setInputVal(e.target.value)
  }

  console.log(inputVal)
  const onScroll = () => {
    dispatch(
      startScroll(window.scrollY || window.pageYOffset > 30 ? true : false)
    );
  };

  const allLists = [
    {id:1, tagname:"tagname1", content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing"},
    {id:2, tagname:"tagname2", content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing"},
    {id:3, tagname:"tagname3", content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing"},
    {id:4, tagname:"tagname4", content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing"},

  ]



  const searchList = (el) =>{
    return(
      <>
        <span className="text-sm font-semibold bg-gray-300 text-white p-2 rounded inline-block">{el.tagname}</span>
        <div>
        <p>{el.content}</p>
        </div>
        </>
    )
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onAddThumbnail = (e) => {
    let fileUrls = [];
    let cameraArr = [];
    let alertnum = 0;
      for (let i = 0; i < e.target.files.length; i++) {
      let reader = new FileReader()
      reader.readAsDataURL(e.target.files[i])
      const includesLastModified = files.filter((el)=>(el.lastModified === e.target.files[i].lastModified && el.name === e.target.files[i].name))
      //같은 파일 제외하고 배열 저장
      if(includesLastModified.length===0){
          cameraArr.push(e.target.files[i])
          setFiles(files.concat(cameraArr))
          reader.onload = () => {
            fileUrls[i] = reader.result
            setLoadedImage(loadedImage.concat(fileUrls))
            e.target.value = ""
          }
    }
  }
}
const onDeleteValue = (el,idx)=>{
  const filterLoaded = loadedImage.filter((img)=>img!==el)
  setLoadedImage(filterLoaded)
  const filterFiles = files.filter((img)=>img!==files[idx])
  setFiles(filterFiles)
}
const [contents, setContents] = useState(null)
  const QuillRef = useRef();
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ size: ["small", false, "large", "huge"] }, { color: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
            { align: [] },
          ],
          ["image", "video"],
        ],

      },
    }),
    []
  );
  console.log(contents,">?")
  console.log(files,'>?')
  return (
    <>
     <header
      className={
        scrollFunc
          ? "fixed top-0 right-0 w-full backdrop-blur-md border-b px-12 flex justify-between transition-all duration-300 ease-in-out h-[70px] "
          : "fixed top-0 right-0 w-full backdrop-blur-md border-b px-12 flex justify-between transition-all duration-300 ease-in-out h-[120px]"
      }>
        <div className="flex flex-col justify-center items-center font-semibold border-r pr-12">
          <span className="text-3xl ">XXX_{dayjs().format("YYYY")}</span>
          <span>pei BLOG</span>
          <span className="bg-red-100" onClick={()=>setOpenPutModal(!openPutModal)}>clickandPut</span>
        </div>
        <div
          className="flex justify-end items-center w-2/3 ">
          <input 
          className={"border p-2 h-[48px] outline-none transition-all  duration-300 ease-linear "+(inputVal!==""?" w-full":" w-[200px]")}
          value={inputVal||""}
          placeholder="SEARCH"
          onChange={onChangeInput}
          // onClick={onClickShowAccount}
          />
        </div>
      </header>
      {inputVal!==""&&
      <ul className="absolute top-0 left-0 mt-[120px] bg-white w-full flex justify-end flex-col">  
        {allLists.map((el)=>(
          <li key={el.id} className="px-12 py-6 border-b flex items-start gap-x-4">
          {searchList(el)}
          </li>
        ))}
      </ul>
      }
      {
        openPutModal?
        <div className="z-10 absolute top-0 right-0 w-[800px] h-full bg-white p-6 shadow-lg">
          <div className="flex flex-col gap-y-4">
            <div className="flex gap-x-4 items-center">
                <label className="w-[100px]">subject 추가</label>
                <input className="border w-full p-2 outline-none"/>
                <span className="bg-gray-200 p-2 w-[100px] text-center">추가</span>
            </div>
            <div className="flex gap-x-4 items-center">
              <label className="w-[100px]">subject</label>
              <select className="p-2 outline-none border w-full">
                <option>library</option>
                <option>framework</option>
                <option>language</option>
              </select>
            </div>
            <div className="flex gap-x-4 items-center">
            <label className="w-[100px]">title</label>
              <input className="border w-full p-2 outline-none"/>
            </div>
            <div className="flex gap-x-4 items-center">
             <label className="w-[100px]">content</label>
              <ReactQuill
               ref={(element) => {
                  if (element !== null) {
                    QuillRef.current = element;
                  }
                }}
                value={contents}
                onChange={setContents}
                modules={modules}
                theme="snow"
                placeholder="내용을 입력해주세요."
              />
            </div>
            <div className="flex flex-wrap gap-x-4 items-center">
             <label className="w-[100px]">content</label>
             <PhotoCard onAddThumbnail={onAddThumbnail} />
             {loadedImage.map((el,idx)=>(
                <li key={idx} className="w-[200px] relative">
                  <span 
                  onClick={()=>onDeleteValue(el,idx)} 
                   className="absolute right-3 top-3 bg-gray-100">닫기</span>
                  <img src={el} className="w-full h-auto"/>
                </li>
              ))}
            </div>
            <div>여기에 npm으로 만든 text editor을 넣기, 만든 에디터는 댓글작성시 넣을수 있게 하기</div>
            <div className="bg-gray-100 roudned p-2 text-center"
          
            >submit</div>
          </div>
        </div>
        :""
      }

    </>

  );
};

export default Navbar;
