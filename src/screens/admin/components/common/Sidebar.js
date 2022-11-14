import React from 'react'
import { useSelector } from 'react-redux';
import { SideBarLists } from '../../../../common/Data/AdminLists';
import SidebarList from './SidebarList';

const Sidebar = () => {
  //navigation 접을때 토글 boolean
  const sideToggle = useSelector((state) => state.commonAdmin.navActive);
  return (
    <aside
    className={
      sideToggle
      ? "fixed top-0 right-0 h-full flex-shrink-0 md-block md:w-[100px] bg-white border-l"
      : "fixed top-0 right-0 h-full flex-shrink-0 md-block md:w-[220px] bg-white border-l"
    }
    >
      <ul className='pt-[100px]'>
        {SideBarLists.map((el,idx)=>(
          <SidebarList el={el} key={idx} idx={idx}/>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar