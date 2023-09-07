import React from 'react'
import B_p from '@/Components/Content/ProgressAnim/B_P'
import { BPData } from '@/Data/BPData'

interface IData{
    id:number,
    val:number,
    heading:string,
}
function B_Prog() {
    return (<section>
    <div>
        <div className='mt-28'><div className='xs:text-2xl sm:text-3xl font-bold mx-6 text-white'>Design Skills</div></div>
        <div className=' w-full  border-bor border-2 bg-black mt-8 transition-all duration-300 hover:border-pri'>
            

{BPData.map((ins:IData)=>(


<div key={ins.id}className='pb-5 p-5'>
              <div className='text-gray-200 px-2 text-xl font-semibold'><div>{ins.heading}</div><div className=''><B_p value={ins.val}/></div></div> 
              </div>
))}

             




            </div>
            </div>
    </section>
      )
}

export default B_Prog