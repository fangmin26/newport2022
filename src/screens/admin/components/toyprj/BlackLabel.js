import React from 'react'

const BlackLabel = ({title,children}) => {
  return (
    <div className="pt-4">
        <p className="py-2 bg-black text-white px-4">
          {title}
        </p>
        <div className="px-4">
          {children}
        </div>
      </div>
  )
}

export default BlackLabel