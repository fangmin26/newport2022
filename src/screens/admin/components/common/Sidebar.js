import React from 'react'
import { useSelector } from 'react-redux';
import { SideBarLists } from '../../../../common/Data/AdminLists';
import SidebarList from './SidebarList';

const Sidebar = () => {
  const scrollFunc = useSelector((state)=>state.commonAdmin.scrollAction)
  return (
    <aside
    className="fixed top-0 right-0 h-full flex-shrink-0 md-block w-1/6 bg-white border-l">
      <ul className=
      {scrollFunc?'pt-[60px] transition-all duration-300 ease-in-out':'pt-[120px] transition-all duration-300 ease-in-out'}>
        {SideBarLists.map((el,idx)=>(
          <SidebarList el={el} key={idx} idx={idx}/>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar