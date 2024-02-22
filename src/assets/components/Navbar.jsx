import React, { useState } from 'react'
import { VscAccount } from "react-icons/vsc";
import { VscChecklist } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    let join = [
        { name: "Home", link: "/" },
        { name: "About", link: "/" },
        { name: "Contact", link: "/" },
        { name: "Help", link: "/" },

    ]


    return (
        <>

            <div className=' flex justify-between items-center bg-green-700 py-6 rounded-xl'>
                <h1 className="text-9xl "><VscAccount />
                </h1>
                <ul className={`${isOpen ? 'block' : 'hidden'} md:flex gap-8 text-3xl `}>
                    {
                        join.map((all, ind) => (
                            <li key={ind}>
                                <a href={all.link}>{all.name}</a>
                            </li>
                        ))
                    }

                </ul>
                <button onClick={()=> setIsOpen(!isOpen)}>
                {
                    isOpen ? (<VscChromeClose className='block md:hidden' />): (<VscChecklist className='block md:hidden' />)
                }
                    
                </button>
                <button className='flex px-8 text-4xl'>Login</button>
            </div>
        </>
    )
}

export default Navbar;