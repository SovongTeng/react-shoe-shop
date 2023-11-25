import React from 'react'
import Bannar from './../Image/Bannar.jpg'

export default function Banner() {
    return (
        <div className='bg-[#edede9] pt-[50px]'  >
            <div className='w-full h-[600px] flex items-center justify-center relative z-10' >
                {/* <img className='w-[100%] h-[100%] object-cover' src={Bannar} alt="" /> */}
                <img className='w-[100%] h-[100%] object-cover' src="https://i.ytimg.com/vi/y0CDR6XbdGw/maxresdefault.jpg" alt="" />
                <div className='absolute flex items-center justify-center flex-col gap-[20px]  text-center p-[10px] text-white z-10' >
                    <h1 className='text-center text-[30px]'  >Better for people & the Planet</h1>
                    <p>Ut eget at et aliquam sit quis nisl, pharetra et ac pharetra est dictum in vulputate</p>
                    <div className='flex flex-col gap-[30px] w-full pl-[10px] pr-[10px] justify-center items-center lg:flex-row' >
                        <button className='w-[100%] bg-white h-[30px] text-black md:w-[90%] lg:w-[70%] lg:h-[40px] hover:bg-black hover:text-white duration-700' >SHOE MEN</button>
                        <button className='w-[100%] bg-white h-[30px] text-black md:w-[90%] lg:w-[70%] lg:h-[40px] hover:bg-black hover:text-white duration-700' >SHOE WOMEN</button>
                    </div>
                </div>
                <div className='absolute w-full h-full bg-black opacity-30 '>
                </div>
            </div>
        </div>
    )
}
