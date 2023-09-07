"use client"
import React from 'react';
import { Inter } from 'next/font/google'
import Typewriter from 'typewriter-effect';
import Spacer from '@/Components/Spacer';
import Button from '@/Components/Button';
import ServiceSec from '@/Components/Content/Section/ServiceSec';
import Pricing from '@/Components/Content/Section/Pricing'
import Contact from '@/Components/Content/Section/Contact'
import Knowl from '@/Components/Content/Section/Knowl';
import Prog from '@/Components/Content/Section/Prog';
import B_P from '@/Components/Content/Section/B_Prog';
import Team from '@/Components/Content/Section/Team';
import Projo from '@/Components/Content/Section/projo';
import C_form from '@/Components/Content/Section/C_form';
import Profilee from '@/Components/Content/Section/profilee';
import Image from 'next/image';
import Link from 'next/link';




// import Spacer from '@/Components/Spacer'
// import Layout from '@/app/layout'

// const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  return (
    
    <main>
      <section id="hom">
      <div><div className=" xs:bg-no-repeat sm:bg-cover xs:bg-contain absolute bg-fixed xs:bg-[url('/Profile/pf1.png')] sm:bg-[url('/Profile.jpg')] w-full h-screen -z-10 top-0"></div>
        <div>
          <div className="flex sm:justify-end sm:-mt-32 xs:justify-center place-items-center xs:mt-32 sm:items-center h-screen">
              <div className=" container  md:w-3/5  ">
                <div className='align-middle xs:-mt-28 sm:mt-40'>
                  <div className=' text-[#4bffa5] font-bold md:text-5xl sm:text-3xl xs:text-2xl  flex justify-center '>
                    <Typewriter
                      options={{
                      strings: ['I Love Wordpress!!', 'I code cool Websites!!', 'I love digital marketing!!'],
                    autoStart: true,
                      loop: true,
                      }}
                    />
                  </div>
                  <div className="font-normal text-white bottom-0 sm:mt-4 xs:mt-2 mx-16 text-center md:text-2xl sm:text-xl"><span>Hello, I’m</span><span className="text-[#4bffa5]"> Hammad Wahab,</span> UX/UI Designer and Front-end Developer Based in Pakistan.</div>
                </div>
                <div className='flex justify-center gap-8 s:mt-6 xs:mt-3 transition-all'>
                      <div className='group'><Link href="https://www.instagram.com/"><Image className='cursor-pointer xs:scale-95 s:scale-100 group-hover:animate-bounce xs:animate-bounce s:animate-none' src="/S_media/insta.svg" alt="ins" width={30} height={100}/></Link></div>
                      <div className='group'><Link href="https://www.facebook.com/"><Image className='cursor-pointer xs:scale-95 s:scale-100 group-hover:animate-bounce xs:animate-bounce s:animate-none' src="/S_media/Faceb.svg" alt="fb" width={20} height={100}/></Link></div>
                      <div className='group'><Link href="https://www.linkedin.com/login"><Image className='cursor-pointer xs:scale-95 s:scale-100 hover:scale-110a group-hover:animate-bounce xs:animate-bounce s:animate-none' src="/S_media/L_din.svg" alt="ln" width={30} height={100}/></Link></div>
                      <div className='group'><Link href="https://github.com/login"><Image className='cursor-pointer xs:scale-95 s:scale-100 hover:scale-110a group-hover:animate-bounce xs:animate-bounce s:animate-none' src="/S_media/G_hub.svg" alt="git" width={30} height={100}/></Link></div>
                    </div>
                    
                    <div className=' flex justify-center xs:mt-3 s:mt-7'>
                      <div className='shadow-2xl shadow-[#92efc0] '><Button text="Contact Now" link="#msg"/></div>                    
                    </div>
                    
              </div>
          </div>
        </div>
      </div></section>
      <Spacer><div className='xs:-mt-48  sm:mt-14 xs:ml-4 sm:ml-0 bg-[url(/line.svg)] bg-cover bg-center bg-fixed w-full xs:-mt-14a'>
        {/* w-fit 499 k bad sahi he */}
        <div className='bg-blacka'>
        <div className='text-white h-6 container '><div className=' h-3 pt-4 text-opacity-5'></div></div>
        <div className=''>

        {/* ------Profile Section Start----- */}
        <section id='res'><Profilee/></section>

        {/* ------Service Section Start----- */}
        <ServiceSec/>

        {/* ------Pricing Section Start----- */}
        <Pricing/>

        {/* ------Circular Progress Section Start----- */}
        <Prog/>
        
        {/* ------Bar Progress Section Start----- */}
        <B_P/>
    
        {/* ------Knowledge Section Start----- */}
        <section id="kno"><Knowl/></section>
        
        {/* ------Knowledge Section Start----- */}
        <section id="tea"><Team/></section>
       
        {/* ------Knowledge Section Start----- */}
        <section id="wor"><Projo/></section>

        {/* ------Contact Section Start----- */}
        <section id="con"><Contact/></section>
        
        <section id="msg"><C_form/></section>
        


        </div>
        
    <div>hhh</div>
    </div></div></Spacer>
    </main> 
    
  )
}
