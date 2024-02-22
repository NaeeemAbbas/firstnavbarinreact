import React from 'react'

const Button = ({children}) => {
  return (
    <button className='bg-black text-white p-3 rounded-md'>{children}</button>
  )
}

export default Button