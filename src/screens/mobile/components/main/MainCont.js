import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Contact from './Contact';
import Skillset from './Skillset';
import Intro from './Intro';

const MainCont = () => {
  const tabName = useSelector((state)=>state.commonApp.navActive); 
  return (
    <>
      {tabName ==="intro"?
        <Intro/>
      :tabName === "prj"?
      <div>{tabName}</div>
      :tabName ==="skillset"?
        <Skillset/>
      :tabName === "toyprj"?
      <div>{tabName}</div>
      : <Contact/>
    }
    </>
  )
}

export default MainCont