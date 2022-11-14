import React from 'react'

const ProjectList = ({el}) => {
  return (
    <div className='border-b px-12 py-6'>
      <h2 className='font-bold'>{el.title}</h2>
      <p>-description: {el.description}</p>
      <p>-project 기간: {el.projectDate}</p>
      <p>-사용 언어,프레임워크: {el.tools}</p>
      <p>-개발내역</p>

        {el.whattodo.length>0 &&
          <ul className='pl-4'>
            {el.whattodo.map((todo,idx)=>(
              <li 
              key={idx}
              className='border-l border-black pl-4'>
                {todo}
              </li>
            ))}
          </ul>
        }
    </div>
  )
}

export default ProjectList