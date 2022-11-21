export const LeftLabelInput = ({labelWidth,labelName,inputName,onChangeFc,onClickFc}) =>{
  return(
    <div className='w-full flex items-center gap-x-2 '>
    <label htmlFor={inputName} className={labelWidth}>{labelName}</label>
    {labelName==="비밀번호"?
      <input id={inputName} name ={inputName} className='w-full rounded outline-none px-3 py-2'
      type="password"
      onChange={onChangeFc}
      onKeyPress={(e) => {
        if (e.key === "Enter") onClickFc();
      }}
      />:
      <input id={inputName} name ={inputName} className='w-full rounded outline-none px-3 py-2'
      type="text"
      onChange={onChangeFc}
      onKeyPress={(e) => {
        if (e.key === "Enter") onClickFc();
      }}
      />
   }
  </div>
  )
}

export const LeftLabelInputAdmin = ({labelWidth,labelName,inputName,onChangeFc,onClickFc}) =>{
  return(
    <div className='w-full flex items-center gap-x-2 '>
    <label htmlFor={inputName} className={labelWidth}>{labelName}</label>
    {labelName==="비밀번호"?
      <input id={inputName} name ={inputName} className='w-full border-b outline-none py-2'
      type="password"
      onChange={onChangeFc}
      onKeyPress={(e) => {
        if (e.key === "Enter") onClickFc();
      }}
      />:
      <input id={inputName} name ={inputName} className='w-full border-b outline-none py-2'
      type="text"
      onChange={onChangeFc}
      onKeyPress={(e) => {
        if (e.key === "Enter") onClickFc();
      }}
      />
   }
  </div>
  )
}

export const Input = ({inputName,onChangeFc,onClickFc, reg}) =>{
  return(
    <div className='w-full flex items-center gap-x-2 '>
      <label htmlFor={inputName}>{inputName}</label>
      <input id={inputName} name ={inputName} 
      className=
      {reg?'w-full border border-black outline-none py-2 px-2':
      'w-full border border-red-500 outline-none py-2 px-2'
      }
      
      type="text"
      onChange={onChangeFc}
      onKeyPress={(e) => {
        if (e.key === "Enter") onClickFc();
      }}
      />
    </div>
  )
}