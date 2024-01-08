import React from 'react'
import Logo from "../../assets/svg/logo.svg"

const Header = () => {
  return (
    <div className='flex items-center justify-between w-full bg-WHITE-_100  '>
        <div className='w-[738px] mx-[30px]' >
            <img src={Logo} alt='Logo' className='w-[100px]' />
        </div>
        <div className='flex w-full '>
            <div className='flex  w-[200px] py-[15px] px-[80px] border border-y-0 border-solid border-[#8D3203] border-r-0'>
             <a href='' >Home</a>
            </div>
            <div className='flex  w-[200px] py-[15px] px-[80px] border border-y-0 border-solid border-[#8D3203] border-r-0 '>
             <a href='' >Services</a>
            </div>
            <div className='flex  w-[200px] py-[15px] px-[80px] border border-y-0 border-solid border-[#8D3203] border-r-0'>
             <a href='' >Work</a>
            </div>
            <div className='flex  w-[200px] py-[15px] px-[80px] border border-y-0 border-solid border-[#8D3203] border-r-0'>
             <a href='' >About</a>
            </div>
            <div className='flex  w-[200px] py-[15px] px-[80px] border border-y-0 border-solid border-[#8D3203] border-r-0'>
             <a href='' >Contact</a>
            </div>
        </div>

    </div>
  )
}

export default Header