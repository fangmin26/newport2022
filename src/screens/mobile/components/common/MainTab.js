import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { MainTabLists } from '../../../../common/Data/AppLists';
import { toggleNavigation } from '../../../../features/mobile/commonApp';

const MainTab = () => {
  const dispatch = useDispatch();
  const onClickSetTab = (e) =>{
    dispatch(toggleNavigation(e.target.innerText));
  }
  const commonTabCss = 'border-t border-r border-black text-black bg-white hover:bg-gray-200 h-1/5 p-2';
  const ActiveTabCss = 'bg-black text-white h-1/5 p-2';
  const tabName = useSelector((state)=>state.commonApp.navActive);
  return (
    <div className='border-black border-l absolute top-0 right-0 w-1/6 h-full py-6 bg-gray-100 font-semibold cursor-pointer text-right'>
    {MainTabLists.map((el,idx)=>(
      <div className={tabName === el? ActiveTabCss:
        ( idx +1 === MainTabLists.length ?
          commonTabCss +" border-b"
          :commonTabCss)}
      key={el}
      onClick={onClickSetTab}
      >
        <div>{el}</div>
      </div>
    ))}
  </div>
  )
}

export default MainTab