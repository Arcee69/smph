import React from 'react'
import Homebg from "../../assets/img/home-bg.png"
import Background from "../../assets/img/background_b.png"
import LaptopA from "../../assets/img/laptop-a.png"
import LaptopB from "../../assets/img/laptop-b.png"
import Ipad from "../../assets/img/ipad.png"

import { GoArrowUpRight } from "react-icons/go";

const Home = () => {
  return (
    <div>
                                                    {/* Banner */}
        <div 
            className='w-full flex flex-col items-center justify-center px-[287px] pt-[100px] pb-[100px]'
            style={{ background: `url(${Homebg})`, backgroundRepeat:"no-repeat", backgroundSize:"cover",position: 'relative'}}
        > 
        
            <p className='font-hanken text-[80px] leading-[90px] font-normal text-[#E8E8E8] text-center w-full'>
                We Create Websites and Apps That <span className='font-oleo'>Wow.</span> 
            </p>
            <p className='mt-[27px] text-[#E4E4E4] font-hanken text-[24px] font-normal text-center w-[923px]'>
                a full-service, multi-year partner to ambitious founders, enterprises, and nonprofits, 
                we help scale impact by transforming digital experiences with human-centered design, 
                Engineering solutions, and business strategy.
            </p>
            <div className='flex gap-5'>
                <button 
                    type='button'
                    className='mt-[42px] font-hanken w-[222px] bg-WHITE-_100 h-[60px] text-[24px] text-[#000] text-center'
                    onClick={() => { window.scroll(0, 0)} }
                >
                    Start Project
                </button>
                <button 
                    type='button'
                    className='mt-[42px] font-hanken w-[222px] bg-transparent border border-[#fff] h-[60px] text-[24px] text-[#FFFFFF] text-center'
                    onClick={() => { window.scroll(0, 0)} }
                >
                    Who We Are
                </button>
            </div>
        </div>

                                                {/* About */}
        <section className='w-full mt-[278px]'>
            <div className='flex w-full mx-[30px] items-center'>
                <p className='w-3/12 font-inter font-medium text-[20px] text-[#3D1601]'>
                    <span className='text-[#8D3203]'>Our services.</span> <br/> Strategy, design, software development & innovation.</p>
                <p className=' w-8/12 text-[18px] text-[#3D1601]'>
                    We specialize in turning ordinary products into extraordinary digital experiences. 
                    Our solutions are crafted with individuality and high quality in mind, delivering 
                    tangible value for both companies and users. With intuitive functionality and appealing design, 
                    we aim to simplify everyday life for everyone we reach.
                </p>
            </div>
            <div className='mx-[30px] w-full  grid grid-cols-4 gap-4 mt-[128px]'>
                <div className='flex flex-col w-[300px] border border-y-0 border-l-0 border-r border-[#CCD7E1] pr-[17px]'>
                    <p className='text-[#5D7F9A] text-[30px]'>01</p>
                    <p className='mt-[64px] text-[#00143C] font-inter font-semibold text-xl'>Digital Strategy</p>
                    <p className='text-[#3C5268] text-sm font-sans mt-[24px]'>
                        Does your business need a digital update to stay competitive? Do you have an idea
                        for a new digital venture? We will help you clarify your product vision and map your
                        path to success. This is where we identify what your business and your users need
                        and pinpoint the tools and technology that will make your product a success.
                    </p>
                </div>
                <div className='flex flex-col w-[300px] border border-y-0 border-l-0 border-r border-[#CCD7E1] pr-[17px]'>
                    <p className='text-[#5D7F9A] text-[30px]'>02</p>
                    <p className='mt-[64px] text-[#00143C] font-inter font-semibold text-xl'>UX/UI Design</p>
                    <p className='text-[#3C5268] text-sm font-sans mt-[24px]'>
                        From user research to concept, prototype to launch, UX/UI design is a process. We
                        don’t simply focus on creating something new; we get to the heart of how people
                        want to use your product and align it with the broader needs of your business. This
                        is the first step to bring your product to life and ensure it delivers long-term value.
                    </p>
                </div>
                <div className='flex flex-col w-[300px] border border-y-0 border-l-0 border-r border-[#CCD7E1] pr-[17px]'>
                    <p className='text-[#5D7F9A] text-[30px]'>03</p>
                    <p className='mt-[64px] text-[#00143C] font-inter font-semibold text-xl'>Software Development</p>
                    <p className='text-[#3C5268] text-sm font-sans mt-[24px]'>
                        We build tailor-made software that serves your unique business needs and keeps
                        your customers engaged. From developing a pilot in a matter of weeks, to
                        delivering a complete solution, we offer end-to-end development services that
                        will help your organisation disrupt the market, no matter your business size.
                    </p>
                </div>
                <div className='flex flex-col w-[300px]'>
                    <p className='text-[#5D7F9A] text-[30px]'>04</p>
                    <p className='mt-[64px] text-[#00143C] font-inter font-semibold text-xl'>Innovation & Growth</p>
                    <p className='text-[#3C5268] text-sm font-sans mt-[24px]'>
                        We equip your business for a digital future and put you in the best position to attract
                        a new audience and retain your loyal customer base. We put you in control of
                        your digital portfolio and connect you with our trusted partners in marketing, SEO
                        and other digital professions as your business evolves.
                    </p>
                </div>
            </div>
        </section>

                                            {/* Projects */}
        <section className='mt-[133px] flex flex-col mx-[30px] w-full'>
            <p className='font-hanken text-[#272724] text-[46px] font-light' >A sample of our implemented <br /> <span className='text-[#3D1601] font-semibold'>projects</span></p>
            <div className='flex flex-col mx-20 mt-[185px]'>
                <div className='flex w-full items-center justify-between'>
                    <div className='w-[784px]'>
                        <img src={LaptopA} alt='laptop' className='w-10/12' />
                        <div className='w-[576px] flex flex-col gap-[24px]'>
                            <div className='flex gap-2 items-center mt-[20px]'>
                                <p className='text-[#00143C] font-inter'>Bexchange</p>
                                <GoArrowUpRight />
                            </div>
                            <div className='flex justify-end w-[522px]'>
                                <p className='font-sans w-[259px] text-sm'>
                                    Creating a secure and transparent auctioning website for top financial institutions.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[694px]'> 
                        <img src={Ipad} alt='laptop'  className='w-9/12'/>
                        <div className='w-[576px] flex flex-col gap-[24px]'>
                            <div className='flex gap-2 items-center mt-[20px]'>
                                <p className='text-[#00143C] font-inter'>Humbee</p>
                                <GoArrowUpRight />
                            </div>
                            <div className='flex justify-end w-[422px]'>
                                <p className='font-sans w-[259px] text-sm'>
                                    A platform where consumers can find restaurants that have a focus on sustainability.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full mt-[30px]'>
                    <div className='w-10/12 mx-auto'>
                        <img src={LaptopB} alt='laptop' />
                        <div className='w-8/12 mx-auto flex flex-col gap-[24px]'>
                            <div className='flex gap-2 items-center mt-[20px]'>
                                <p className='text-[#00143C] font-inter'>PIT Self-Placement</p>
                                <GoArrowUpRight />
                            </div>
                            <div className='flex justify-end w-full'>
                                <p className='font-sans w-7/12 text-sm'>
                                    Helping Pit Self-Placement deliver an enhanced, automated user experience via a 
                                    future-proof digital product. 
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

                                        {/* Reviews */}
        <section className='w-full mt-[96px]'>
            <div className='w-10/12 mx-auto flex items-center justify-between'>
                <div className='flex flex-col gap-1.5'>
                    <p className='text-[#101828] text-[60px] font-semibold font-inter'>400+</p>
                    <p className='text-[#667085] text-lg font-inter font-medium'>Projects completed</p>
                </div>
                <div className='flex flex-col gap-1.5'>
                    <p className='text-[#101828] text-[60px] font-semibold font-inter'>600+</p>
                    <p className='text-[#667085] text-lg font-inter font-medium'>Return on investment</p>
                </div>
                <div className='flex flex-col gap-1.5'>
                    <p className='text-[#101828] text-[60px] font-semibold font-inter'>10k</p>
                    <p className='text-[#667085] text-lg font-inter font-medium'>Global downloads</p>
                </div>
                <div className='flex flex-col gap-1.5'>
                    <p className='text-[#101828] text-[60px] font-semibold font-inter'>200+</p>
                    <p className='text-[#667085] text-lg font-inter font-medium'>5-star reviews</p>
                </div>
            </div>
        </section>

                                                    {/* Contact */}
        <section>

        </section>

                                                    {/* Second Banner */}
        <section className='mt-24'>
            <div 
                className='w-full flex flex-col items-center justify-center '
                style={{ background: `url(${Background})`, backgroundRepeat:"no-repeat", backgroundSize:"cover",position: 'relative'}}
            > 
                <div className='w-[621px] flex flex-col gap-[38px] mx-auto my-[50px]'>
                    <div className='flex flex-col gap-[15px]'>
                        <p className='font-roboto text-lg font-normal text-WHITE-_100 text-center'>
                            Need a successful project?
                        </p>
                        <p className='text-WHITE-_100 font-syncopate text-[40px] font-bold text-center'>
                            LETS WORK TOGETHER
                        </p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='flex flex-col cursor-pointer mt-5'>
                            <button 
                                type='button'
                                className='w-[329px] flex items-center justify-center gap-2 bg-WHITE-_100 h-[60px] text-center'
                                onClick={() => { window.scroll(0, 0)} }
                            >
                                <p className='font-bold text-base font-syncopate text-[#2E2E2E]'>Estimate Project</p>
                                <GoArrowUpRight />
                            </button>
                            <div 
                                className='w-[329px] -top-12 right-4 bg-transparent border border-[#fff] h-[60px] relative'
                            >
                            
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>


    </div>
  )
}

export default Home