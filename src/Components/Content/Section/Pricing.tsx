import React from 'react'
import Image from 'next/image'
import {PriData} from '@/Data/PriData'
import Button from '@/Components/Button'
 
interface IData{
    id:number,
    src:string;
    price :string,
    heading:string;
    t1:string;
    t2:string;
    t3:string;
    t4:string;
    t5:string;
}

function ServiceSec() {

  return (
    <section>
        <div className='mt-28 text-white'><div className='xs:text-2xl sm:text-3xl font-bold mx-6'>Pricing</div>
            <div className='grid xs:grid-cols-1 sm:grid-cols-2 gap-x-32 gap-y-16 mt-8'>
                {PriData.map((ins:IData)=>(
                        <div key={ins.id} className=' border-bor border-2 transition-all duration-300 hover:border-pri bg-black flex items-center flex-col py-9'>
                            <Image src={ins.src} alt="pp" width={60} height={50}/>
                            <p className='text-center mx-10  text-gray-200 py-4'>{ins.heading}</p>
                            <h4 className='font-bold text-5xl pb-4 text-center'><span className='align-text-top text-sm text-gray-500'>$ </span>{ins.price}<span className='align-text-bottom text-xs text-gray-500'> hour</span></h4>
                            <h4 className=' pb-4 text-center text-gray-200'>{ins.t1}</h4>
                            <h4 className=' pb-4 text-center text-gray-200'>{ins.t2}</h4>
                            <h4 className=' pb-4 text-center text-gray-200'>{ins.t3}</h4>
                            <h4 className=' pb-4 text-center text-gray-200'>{ins.t4}</h4>
                            <h4 className=' pb-4 text-center text-gray-200'>{ins.t5}</h4>
                            <div><Button text="Buy Now" link=""/></div>
                        </div>
                ))}
                
            </div>
        </div>  
    </section>
  )
}

export default ServiceSec