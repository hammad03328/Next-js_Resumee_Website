import React from 'react'
import Image from 'next/image'
import {k_Data} from '@/Data/KnoData'
interface IData{
    id:number,
    src:string;
    t:string;
}
function Knowledge() {
    return (
        <section>
        <div>
            <div className=' mt-28 text-white '><div className='xs:text-2xl sm:text-3xl font-bold mx-6'>Knowledge</div></div>
            <div className=' w-full h-auto  border-bor border-2 transition-all duration-300 hover:border-pri bg-black mt-10'> 
               {/* <div className='text-justify grid grid-flow-row sm:grid-cols-2 xs:grid-col-1  gap-x-24 xs:py-4 xs:px-4 sm:py-10 sm:px-16 text-white'>
                    {k_Data.map((ins:IData)=>(
                        <div ><div key={ins.id} className=' flex  m-auto space-x-2 xs:place-items-baseline mb-2'><Image src={ins.src} alt="pp" width={15} height={15}/><div className='font-semibold xs:text-xs sm:text-lg'>{ins.t}</div></div></div> 
                    ))}
                </div> */}

<div className='text-justify grid xs:grid-cols-1 s:grid-cols-2 gap-x-24 xs:py-4 xs:px-4 sm:py-10 sm:px-16 text-white'>
  {k_Data.map((ins:IData) => (
    <div key={ins.id} className='flex items-center space-x-2 xs:place-items-baseline mb-2'>
      <Image src={ins.src} alt="pp" width={15} height={15} />
      <div className='font-semibold xs:text-xs sm:text-lg'>{ins.t}</div>
    </div> 
  ))}
</div>

            </div>
        </div>
    </section>
    )
}

export default Knowledge