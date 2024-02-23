import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/components/Navbar'
import Button from './assets/components/Button'
import Hero from './assets/Hero'

function App() {
  
  const button =[
    {
      title: "Login"
    },
    {
      title: "Submit"
    },
    {
      title: "SignIn"
    },
    {
      title: "Login"
    }
  ]

  return (
   <> 
   <Navbar/>
   {
    button.map((btn, ind)=>(

      <Button key={ind}>{btn.title}</Button>
    ))
   }
   <Hero/>
  
    </>
  )
}

export default App
