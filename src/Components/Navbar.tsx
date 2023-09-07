"use client";
import React, { useState } from 'react';
import Spacer from "@/Components/Spacer"
import Image from "next/image";


  function Navbar() {
    let [col,colSt]=useState(false);
    let [open,setOpen]=useState(false);
    
    const bg_col=()=>{
      var a=window.scrollY;
      // console.log(a)
      if(a>=50){colSt(true)}
      else{colSt(false)}
      // console.log(col)
    }

    if(process.browser){window.addEventListener('scroll',bg_col);}

    return (
        <Spacer>
            <div className={` ${col ? "bg-bor rounded-b-lg bg-opacity-100 text-md" : "bg-none text-xl"} mt-8 static py-2 pl-2 pr-4`}>
            
            <div className="  overflow-hidden md:flex justify-between items-center text-white sm:w-full z-0">
                  <div className='static xs:flex xs:justify-between'>
                    <div className="font-semibold relative group cursor-pointer overflow-hidden">
                      <div className="transition-all group-hover:-translate-y-10 duration-500 font-bold"><span className="text-gray-500">Hammad</span> Wahab</div>
                      <div className="absolute transition-all group-hover:-translate-y-6 duration-500 font-bold"><span className="text-gray-500">Download</span> CV</div>
                    </div>
                    <div onClick={()=>setOpen(!open)} className="static md:hidden sm:px-11">
                      <Image src={open ? "/cross.svg" : "/list.svg"} alt="list img" width={20} height={20}/>
                    </div>
                  </div>
                  <div className={` static ${open ? 'h-screena  xs:bg-slate-50a xs:bg-bor xs:bg-opacity-30a mt-5' : 'hidden'} sm:bg-opacity-0 md:flex sm:gap-8 items-center`}>

                
                 <div className="font-semibold relative group cursor-pointer overflow-hidden">
                 <a href="#hom">
                    <div className="transition-all group-hover:-translate-y-10 duration-500 font-bold text-gray-500">Home</div>
                  <div className="absolute transition-all group-hover:-translate-y-7 duration-500  font-bold ">Home</div>
                  </a>
                  </div>

                  <div className="font-semibold relative group cursor-pointer overflow-hidden">
                    <a href={"#res"}>
                    <div className="transition-all group-hover:-translate-y-10 duration-500 font-bold text-gray-500">Resume</div>
                  <div className="absolute transition-all group-hover:-translate-y-7 duration-500 font-bold ">Resume</div>
                  </a>
                  </div>

                  <div className="font-semibold relative group cursor-pointer overflow-hidden">
                    <a href={"#wor"}>
                    <div className="transition-all group-hover:-translate-y-10 duration-500 font-bold text-gray-500">Work</div>
                  <div className="absolute transition-all group-hover:-translate-y-7 duration-500 font-bold ">Work</div>
                  </a>
                  </div>

                  <div className="font-semibold relative group cursor-pointer overflow-hidden">
                    <a href={"#tea"}>
                    <div className="transition-all group-hover:-translate-y-10 duration-500 font-bold text-gray-500">Team</div>
                  <div className="absolute transition-all group-hover:-translate-y-7 duration-500 font-bold ">Team</div>
                  </a>
                  </div>

                  <div className="font-semibold relative group cursor-pointer overflow-hidden">
                    <a href={'/#con'}>
                    <div className="transition-all group-hover:-translate-y-10 duration-500 font-bold text-gray-500">Contact</div>
                  <div className="absolute transition-all group-hover:-translate-y-7 duration-500 font-bold ">Contact</div>
                  </a>
                  </div>

                    </div>
                    
         </div>
         </div>
            
     </Spacer>
  )
}



export default Navbar