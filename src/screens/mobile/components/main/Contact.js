import React, { useState } from 'react'
import { MainContactLists0, MainContactLists1, MainContactOptinos } from '../../../../common/Data/AppLists'
import { ApiBox } from '../common/ApiBox'
import SelectBox from '../common/SelectBox'

const Contact = () => {
  const [selectName,setSelectName] = useState("contact")
  const onChangeSelectName = (e) =>setSelectName(e.target.value);
  return (
    <div className='flex flex-col gap-y-6 h-screen p-6'>
      <div className='w-full h-[400px] border'>
        character
      </div>
      <SelectBox
      onChangeFc={onChangeSelectName}
      options={MainContactOptinos}
      />
      <div className='flex flex-col gap-y-2'>
        <div className='text-xs flex'>
          <span className='block px-2 border-r'>My Key</span>
          <span className='block px-2'>My Value</span>
        </div>
        {
          selectName === "contact"?
          <ApiBox
          contact={true}
          list ={MainContactLists0}
          />:
          <ApiBox
          contact={true}
          list ={MainContactLists1}
          />
        }
      </div>
  </div>
  )
}

export default Contact