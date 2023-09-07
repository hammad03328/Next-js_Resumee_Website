"use client";
import React, { useState } from 'react'
import Image from 'next/image'

function C_box() {
     let [co,colS]=useState(false);
    
    const bx_col=()=>{
      var a=window.scrollY;
      // console.log(a)
      if(a>=400){colS(true)}
      else{colS(false)}
      // console.log(col)
    }

    if(process.browser){window.addEventListener('scroll',bx_col);}
return (
        <div className={`transition-all absolute flex place-items-left h-screen  w-7 cursor-pointer ${co ? "duration-300 s:ml-0 xs:-ml-3":"-ml-16"} `}>
            <div className='text-pri flex ml-8 w-auto left-0 rotate-90 my-auto origin-left text-gray-300a font-semibold'>
                <span>Follow_me___   </span>
                <span className=' w-6 h-7 mx-2 hover:animate-bounce'><Image className='-rotate-90' src="/S_media/insta.svg" alt="ins" width={20} height={20}/></span>
                <span className=' w-6 h-7 mx-2 hover:animate-bounce'><Image className='-rotate-90' src="/S_media/Faceb.svg" alt="ins" width={15} height={20}/></span>
                <span className=' w-6 h-7 mx-2 hover:animate-bounce'><Image className='-rotate-90' src="/S_media/L_din.svg" alt="ins" width={18} height={20}/></span>
                <span className=' w-6 h-7 mx-2 hover:animate-bounce'><Image className='-rotate-90' src="/S_media/G_hub.svg" alt="ins" width={19} height={20}/></span>
            </div>
        </div>
   )
}

export default C_box


