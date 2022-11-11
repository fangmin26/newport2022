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