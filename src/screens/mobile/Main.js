import React from 'react';
import {  useSelector } from 'react-redux';
import MainTab from './components/common/MainTab';
import MainCont from './components/main/MainCont';

const Main = () => {

  return (
    <div className='h-screen'>
      <MainTab/>
      <div className='absolute top-0 left-0 w-5/6'>
        <MainCont />
      </div>
    </div>
  )
}

export default Main