import React from 'react'
import { FaBars, } from 'react-icons/fa'
import { BsFillBagFill } from 'react-icons/bs'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaUserAlt } from "react-icons/fa";

export default function Navbar() {
    const [open, setopen] = useState(false);
    return (
        <div className='relative ' >
            <div className=' hidden bg-[#edede9] md:visible md:flex md:items-center md:justify-center md:p-2 md:text-[13px] text-gray-600' >
                Free Express Shipping on all orders with all duties included
            </div>
            <div>
                <div className='flex justify-between items-center bg-white p-5 relative' >
                    <a className='text-black-500 text-[15px] sm:text-[20px] md:hidden' onClick={() => setopen(true)} ><FaBars /></a>
                    <div className='flex justify-center items-center gap-5 xl:gap-8' >
                        <h2 className='sm:text-[20px] font-TitleFont ' >PLASHOE</h2>
                        <ul className='hidden md:flex gap-5 ui:gap-8 nm:gap-4 xl:gap-8 cursor-pointer font-TitleFont text-gray-500 text-[14px]' >
                            <li >MEN</li>
                            <li >WOMEN</li>
                            <li >COLLECTION</li>
                            <li >LOOKBOOK</li>
                            <li >SALE</li>
                            <li >CONTACT</li>
                        </ul>
                    </div>
                    <div className='flex gap-5 xl:gap-7'>
                        <ul className=' hidden gap-3 md:visible md:flex xl:gap-8 pr-5 cursor-pointer'>
                            <li className='font-TitleFont text-[14px] text-gray-500' >OUR STORIES</li>
                        </ul>
                        <a className='text-black-500 sm:text-[20px]'  >< BsFillBagFill /></a>
                        <a className='text-black-500 sm:text-[20px] hidden md:block '  ><FaUserAlt /></a>
                    </div>
                </div>

                <motion.div className='absolute left-0 bg-white w-[80%] top-0  flex flex-col h-screen z-20  sm:w-[100%] ' animate={{ translate: open ? '0%' : '-100%' }} >
                    <span className='absolute  right-0 pr-5 pt-5' onClick={() => setopen(false)} >X</span>
                    <ul className='pt-10 flex flex-col gap-3 pl-5 mt-7 cursor-pointer'>
                        <li className=' border-t-[1px] pt-2'>Home</li>
                        <li className=' border-t-[1px] pt-2 '>Shop Everthing</li>
                        <li className=' border-t-[1px] pt-2 ' >LookBook</li>
                        <li className=' border-t-[1px] pt-2 '  >Sale</li>
                        <li className=' border-t-[1px] pt-2 '  >Story</li>
                        <li className=' border-t-[1px] pt-2 '  >Contact</li>
                    </ul>
                </motion.div>
            </div>
        </div>

    )
}


