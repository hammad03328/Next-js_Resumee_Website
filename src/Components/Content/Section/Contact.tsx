import React from 'react'
import Image from 'next/image'
import {c_data} from '@/Data/ConData'


interface IData{
    id:number,
    src:string;
    heading:string;
    text:string;
}

function Contact() {
    return (
        <section >
            
            <div className='mt-14'>
            <div className='pt-14 text-white'><div className='xs:text-2xl sm:text-3xl font-bold mx-6'>Contact</div>
                <div className='grid xs:grid-cols-1 sm:grid-cols-2 gap-x-32 gap-y-16 mt-8'>
                    {c_data.map((ins:IData)=>(
                            <div key={ins.id} className=' border-bor border-2 transition-all duration-300 hover:border-pri   bg-black flex items-center flex-col py-9'>
                                <Image src={ins.src} alt="pp" width={40} height={40}/>
                                <h4 className='font-semibold text-xl py-4 text-center'>{ins.heading}</h4>
                                <p className='text-center mx-10 font-thin text-gray-100'>{ins.text}</p>
                            </div>
                    ))}
                    
                </div>
            </div>  </div>
        </section>
      )
}

export default Contact