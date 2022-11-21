import React, { useState } from 'react'
import BlackLabel from './BlackLabel'

const ImgCsv = () => {
  const [photo, setPhoto] = useState([])  
  const [loadedImage, setLoadedImage] = useState([])   
  const onChangeFIle = (e) =>{
    console.log(e)
    let fileUrls = [];
    let cameraArr =[]
    for(let i=0; i<e.target.files.length ; i++){
      let reader = new FileReader()
      reader.readAsDataURL(e.target.files[i])
      cameraArr.push(e.target.files[i])
      setPhoto([...cameraArr])
      reader.onload = () =>{
        fileUrls[i] = reader.result
        console.log(cameraArr, fileUrls)
        setLoadedImage([...fileUrls])
        e.target.value = ""
      }
    }
  };
  const onClickDeletePhoto = () =>{

  }
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
            <label htmlFor="camera-image" className="w-[74px] cursor-pointer">
              <span className="inline-block border border-gray_90 p-6 rounded-md">
                <img src={process.env.PUBLIC_URL + "/img/camera.svg"} alt="카메라" />
              </span>
            </label>
            <div>
              <div className='flex gap-x-4'>
                {loadedImage.map((el)=>(
                  <div className='relative'>
                    <img src={el} className="w-[80px] h-[80px]"/>
                    <img src={process.env.PUBLIC_URL + "/img/close.svg"} alt="닫기" 
                    className='absolute top-0 right-0'
                    onClick={onClickDeletePhoto}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </BlackLabel>
      <BlackLabel title={"csv입력 및 출력"}>
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
            <label htmlFor="camera-image" className="w-[74px] cursor-pointer">
              <span className="inline-block border border-gray_90 p-6 rounded-md">
                <img src={process.env.PUBLIC_URL + "/img/camera.svg"} alt="카메라" />
              </span>
            </label>
            <div>
              <div className='flex gap-x-4'>
                {loadedImage.map((el)=>(
                  <div className='relative'>
                    <img src={el} className="w-[80px] h-[80px]"/>
                    <img src={process.env.PUBLIC_URL + "/img/close.svg"} alt="닫기" 
                    className='absolute top-0 right-0'
                    onClick={onClickDeletePhoto}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </BlackLabel>
    </>

  )
}

export default ImgCsv