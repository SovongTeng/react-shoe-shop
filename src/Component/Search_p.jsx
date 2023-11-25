import React from 'react'
import { SlArrowRight } from "react-icons/sl";

export default function Search_p() {
    return (
        <div className='bg-[#edede9] flex  justify-center p-4 h-[70px] md:h[300px] gap-1' >
            <input className='p-1 w-[238px] md:hidden ' type="text" placeholder='Search' />
            <div className='flex items-center justify-center text-white w-8 bg-stone-500 md:hidden' ><SlArrowRight /></div>
        </div>
    )
}
