import React from 'react'

const Button = ({children}) => {
  return (
    <button className='bg-black text-green-700 mx-6 p-3 rounded-[12rem] gap-8 px-8 '>{children} Hello World</button>
  )
}

export default Button