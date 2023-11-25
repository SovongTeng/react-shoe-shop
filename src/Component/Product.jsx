import React from 'react'
import { FaBars, } from 'react-icons/fa'
import shoe_1 from './../Image/shoe-1.jpg'
import shoe_2 from './../Image/shoe-2.jpg'
import shoe_3 from './../Image/shoe-3.jpg'
import shoe_4 from './../Image/shoe-4.jpg'
import shoe_5 from './../Image/shoe-5.jpg'
import shoe_6 from './../Image/shoe-6.jpg'
import { CiStar } from "react-icons/ci";

const product = [
    { index: 1, id: 1, title: `Running's Black Running `, price: `75.90`, icon: <CiStar />, url: shoe_1 },
    { index: 1, id: 2, title: `Man classic Blue `, price: `69.00`, icon: <CiStar />, url: shoe_2 },
    { index: 1, id: 3, title: `Man Classic Mint `, price: `79.90`, icon: <CiStar />, url: shoe_3 },
    { index: 1, id: 4, title: `Men's Earth-Tone Sneaker`, price: `74.90`, icon: <CiStar />, url: shoe_4 },
    { index: 1, id: 5, title: `Men's Green Running`, price: `89.90`, icon: <CiStar />, url: shoe_5 },
    { index: 1, id: 6, title: `Men's Moonstone `, price: `74.90`, icon: <CiStar />, url: shoe_6 },
]


export default function Product() {
    return (
        <div className='bg-[#edede9] h-auto  pl-[20px] pr-[20px] ' >
            <div className='bg-white lg:max-w-[1200px] m-auto  vlg:h-[1050px]' >
                <div className='pr-[30px] pl-[30px] lg:pr-[70px] lg:pl-[70px]' ><h1 className='text-[40px]' > Men</h1></div>
                <div className='flex  justify-between mt-5 pr-[30px] pl-[30px] lg:pr-[70px] lg:pl-[70px]' >
                    <div className='flex items-center bg-gray-700 text-white w-[60px] text-[10px] gap-2 justify-center sm:w-[120px] sm:h-[30px] er:[80px] bn:w-[120px]' >
                        <a href="" className='text-[6px] sm:text-[10px] bn:text-[13px]' ><FaBars /></a>
                        <p className='font-TitleFont text-[6px] sm:text-[10px] er:text-[13px]'  >FILTER SHOES</p>
                    </div>
                    <div><p className='font-ShowItemFont text-black  text-[10px] sm:text-[15px] er:text-[13px]' >show all 8 result</p></div>
                </div>
                <div className='grid grid-cols-2 place-items-center gap-5 mt-5 md:grid-cols-3 pr-[30px] pl-[30px] lg:pr-[70px] lg:pl-[70px] lg:gap-10' >
                    {product.map((product, index,) => (
                        <div key={product.id} className='w-[100%] h-[200px]  er:h-[240px] df:h-[250px] kl:h-[300px] md:h-auto sm:h-auto lg:h-auto relative cursor-pointer group' >
                            {product.id == 2 ? (<div className='w-[30px] h-[30px] bg-gray-700 text-white absolute z-10 right-[-10px] top-[-10px] rounded-full text-[13px] flex items-center justify-center sm:w-[40px] sm:h-[40px]' >Sale!</div>) : <></>}
                            {product.id == 4 ? (<div className='w-[30px] h-[30px] bg-gray-700 text-white absolute z-10 right-[-10px] top-[-10px] rounded-full text-[13px] flex items-center justify-center sm:w-[40px] sm:h-[40px]' >Sale!</div>) : <></>}
                            {product.id == 6 ? (<div className='w-[30px] h-[30px] bg-gray-700 text-white absolute z-10 right-[-10px] top-[-10px] rounded-full text-[13px] flex items-center justify-center sm:w-[40px] sm:h-[40px]' >Sale!</div>) : <></>}
                            {product.index == 1 ? (<div className=' w-full h-[30px] absolute z-10 bottom-[89px] bg-gray-800 flex items-center justify-center text-white opacity-0  group-hover:opacity-100  duration-700' >Quicks View</div>) : <></>}
                            <div className='overflow-hidden' ><img className='hover:scale-[1.2] w-[100%] h-[100%]  duration-700 ' src={product.url} alt='' /></div>
                            <div className='lg:flex lg:items-center lg:justify-center lg:flex-col lg:pt-[10px] gap-2' >
                                <p className='text-[12px] font-ProductFont lg:text-[17px] ' >{product.title}</p>
                                <p className='text-[12px] font-NavlistFont lg:text-[13px] text-gray-500' >{product.price}</p>
                                <div className='flex' > {product.icon} {product.icon} {product.icon} {product.icon}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
