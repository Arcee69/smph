import React from 'react'
import Logo from "../../assets/svg/logo.png"

const Header = () => {
  return (
    <div className='flex items-center justify-between w-full bg-WHITE-_100 mt-2 mb-5 '>
        <div className='w-[738px] mx-[30px]' >
            <img src={Logo} alt='Logo' className='w-[100px]' />
        </div>
        <div className='flex mx-3 gap-[50px] '>
            {/* <div className='flex  w-[200px] py-[15px] px-[80px] border border-y-0 border-solid border-[#8D3203] border-r-0'>
             <a href='' >Home</a>
            </div> */}
            <div className='flex items-center justify-center  w-[100px] border border-l-0 border-t-0 border-b-[#fff] border-solid border-r-0 hover:border-b-[#8D3203] '> {/*  w-[200px] py-[15px] px-[80px] */}
             <a href='' >Services</a>
            </div>
            <div className='flex items-center justify-center  w-[100px] border border-l-0 border-t-0 border-b-[#fff] border-solid border-r-0 hover:border-b-[#8D3203] '> {/*  w-[200px] py-[15px] px-[80px] */}
             <a href='' >Portfolio</a>
            </div>
            <div className='flex items-center justify-center  w-[100px] border border-l-0 border-t-0 border-b-[#fff] border-solid border-r-0 hover:border-b-[#8D3203] '> {/*  w-[200px] py-[15px] px-[80px] */}
             <a href='' >About</a>
            </div>
            <div className='flex items-center justify-center  w-[100px] border border-l-0 border-t-0 border-b-[#fff] border-solid border-r-0 hover:border-b-[#8D3203] '> {/*  w-[200px] py-[15px] px-[80px] */}
             <a href='' >Contact</a>
            </div>
        </div>

    </div>
  )
}

export default Header