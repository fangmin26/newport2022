import React, { useCallback, useEffect, useState } from 'react'
import { CSVLink } from 'react-csv'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { headers, ToyPrjTrList } from '../../../../common/Data/ToyPrjTrList'
import toastCommonProps from '../../../../common/Toast'
import { handleClickPage } from '../../../../features/admin/commonAdmin'
import { BDButton } from '../../../mobile/components/common/Button'
import JustFront from '../../toyprj/JustFront'
import BlackLabel from './BlackLabel'
import Csvadd from './Csvadd'

const ImgCsv = () => {
  const dispatch = useDispatch();
  const [filteringToyPrjList, setFilteringToyPrjList] = useState([]);
  const [photo, setPhoto] = useState([])  
  const [loadedImage, setLoadedImage] = useState([]);
  const page = useSelector((state) => state.commonAdmin.clickedPage);
  const perPage = 4;
  const [pages, setPages] = useState(0);
  const eachPage = filteringToyPrjList.slice(
    (page - 1) * perPage,
    page * perPage
  );
  const [csvadd, setCsvadd] = useState(false)
  //page 가져오기
  const handlePageFn = (page) => {
    dispatch(handleClickPage(page));
  };   
  const onChangeFIle = (e) =>{
    let fileUrls = [];
    let cameraArr =[]
    if(e.target.files.length + loadedImage.length >5){
      toast(<p>5개 이하의 파일을 입력해주세요.</p>, toastCommonProps('top-right', 'toast_fail',1000))
    }else{
      if(loadedImage.length === 0){
        for(let i=0; i<e.target.files.length ; i++){
          let reader = new FileReader()
          reader.readAsDataURL(e.target.files[i])
          cameraArr.push(e.target.files[i])
          setPhoto([...cameraArr])
          reader.onload = () =>{
            fileUrls[i] = reader.result
            setLoadedImage([...fileUrls])
            e.target.value = ""
          }
        }
      }else{ 
        for(let i=0; i<e.target.files.length ; i++){
          let reader = new FileReader()
          reader.readAsDataURL(e.target.files[i])
          const dupPhoto = photo.filter((el)=>el.name === e.target.files[i].name)
          cameraArr.push(e.target.files[i])
          if(dupPhoto.length === 0){
            setPhoto(photo.concat(cameraArr))
          }
          reader.onload = () =>{
            fileUrls[i] = reader.result
            const dup = loadedImage.filter((el)=>el === fileUrls[i])
            if(dup.length === 0){
              setLoadedImage(loadedImage.concat(...fileUrls))
            }else{
              toast(<p>중복되는 이미지가 있습니다.</p>, toastCommonProps('top-right', 'toast_fail',1000))
            }
            e.target.value = ""
          }
        }
      }
    }
  };
  const onClickDeletePhoto = (idx) =>{
    const filterLoaded = loadedImage.filter((img)=>img !==loadedImage[idx]);
    const filterPhoto = photo.filter((img)=>img !== photo[idx])
    setLoadedImage(filterLoaded)
    setPhoto(filterPhoto)
  }

  const onClickShowCsv = () =>{
    setCsvadd(!csvadd)
  }

  const MakeTable = useCallback((lists)=>{
    setFilteringToyPrjList(lists)
    setPages(Math.ceil(lists.length/perPage))
  },[setFilteringToyPrjList,setPages]);

  return (
    <>
      <BlackLabel title={"img 미리보기 화면 출력"}>
        <div className='py-4 h-[240px]'>
          <input
            name="camera"
            type="file"
            multiple
            id="camera-image"
            accept="image/*"
            onChange={(e) => onChangeFIle(e)}
            className="hidden"
          />
          <div className='flex gap-x-4'>
            <label htmlFor="camera-image" className="w-[80px] cursor-pointer">
              <span className="inline-block border border-gray_90 w-[80px] h-[80px] flex justify-center items-center">
                <img src={process.env.PUBLIC_URL + "/img/camera.svg"} alt="카메라" />
              </span>
            </label>
            <div>
              <div className='flex gap-x-4'>
                {loadedImage.map((el,idx)=>(
                  <div className='relative w-[80px] h-[80px] overflow-hidden' key={idx}
                  style={{
                    backgroundImage: `url(${el})`
                  }}
                  >
                    <img src={process.env.PUBLIC_URL + "/img/close.svg"} alt="닫기" 
                    className='absolute top-0 right-0 w-[36px] cursor-pointer'
                    onClick={()=>onClickDeletePhoto(idx)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p>5개 이하의 파일을 입력해주세요</p>
        </div>
      </BlackLabel>
      <BlackLabel title={"csv입력 및 출력"}>
        <div className='flex gap-x-2 pt-6'>
          <CSVLink
          headers={headers}
          data={filteringToyPrjList}
          filename="toyprj"
          target="_blank"
          >
            <BDButton
              title={"csv다운로드"}
              hoverBdColor ={"hover:outline-black"}
              bdColor = {"outline-black"}
              bgColor={"bg-gray-100"} 
              hoverBgColor={"hover:bg-gray-200"}
              textSize={"text-sm"}
              textColor={"text-[#000]"}
            />
          </CSVLink>
          <BDButton
            title={"csv데이터추가"}
            hoverBdColor ={"hover:outline-black"}
            bdColor = {"outline-black"}
            bgColor={"bg-gray-100"} 
            hoverBgColor={"hover:bg-gray-200"}
            textSize={"text-sm"}
            textColor={"text-[#000]"}
            onClickFunc={onClickShowCsv}
            />
        </div>

        {csvadd?<Csvadd onClickShowCsv={onClickShowCsv} MakeTable={MakeTable}/>:""}
        {filteringToyPrjList.length > 0 ? (
        <JustFront
          handlePageFn={handlePageFn}
          page={page}
          perPage={perPage}
          pages={pages}
          eachPage={eachPage}
        />
      ) : (
        <div className="pt-6">
          <div className="bg-gray-100 p-4">csv 파일을 다운로드 받으시고 데이터를 추가해주세요.</div>
        </div>
      )}
      </BlackLabel>
    </>

  )
}

export default ImgCsv