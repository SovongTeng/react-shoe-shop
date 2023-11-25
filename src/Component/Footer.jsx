import React from 'react'

export default function Footer() {
    return (
        <div className='flex flex-col justify-center items-center gap-3 p-5 md:flex-row md:gap-6' >
            <div>Secure payment</div>
            <div className='w-[1px] h-[10px] bg-black' ></div>
            <div>Express shipping</div>
            <div className='w-[1px] h-[10px] bg-black' ></div>
            <div>Free return</div>
        </div>
    )
}
