import React from 'react'
import Logo from "../../assets/svg/logo.png"

const Footer = () => {
  return (
    <footer className='bg-WHITE-_100 w-full'>
        <div className='w-10/12 mx-auto flex flex-col gap-[35px] my-10'>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col gap-[42px]'>
                    <img src={Logo} alt='logo' className=' w-[100px]'/>
                    <div className='flex items-center gap-10'>
                        <p className='text-base cursor-pointer'>Projects</p>
                        <p className='text-base cursor-pointer'>Services</p>
                        <p className='text-base cursor-pointer'>Careers</p>
                        <p className='text-base cursor-pointer'>Help</p>
                        <p className='text-base cursor-pointer'>Privacy</p>
                    </div>
                </div>
                <div></div>
            </div>
            <hr />
            <div className='flex items-center justify-between'>
                <p className='text-[#98A2B3]'>&copy; 2024 SMPH Tech. All rights reserved.</p>
                <div className='flex gap-10'>
                    <p className='text-[#98A2B3] font-inter text-sm'>Terms</p>
                    <p className='text-[#98A2B3] font-inter text-sm'>Privacy</p>
                    <p className='text-[#98A2B3] font-inter text-sm'>Cookies</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer