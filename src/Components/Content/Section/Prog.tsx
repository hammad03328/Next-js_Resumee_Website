import { P_Data } from '@/Data/ProgData'
import C_P from '@/Components/Content/ProgressAnim/C_P'
import Image from 'next/image'
interface IData{
    id:number,
    val:number,
    heading:string,
    image:string
}

function Prog() {
    return (
        <section>
        <div className='mt-28 text-white'>
            <div className=''><div className='xs:text-2xl sm:text-3xl font-bold mx-6'>Coding Skills</div></div>
        <div className='mt-8 w-full h-auto  border-bor border-2 transition-all duration-300 hover:border-pri bg-black '>
              <div className='grid sm:grid-cols-2 xs:my-auto xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4  pt-8 px-4'>

              {P_Data.map((ins:IData)=>(

                    <div key={ins.id} className='flex justify-center '>
                        {/* <div  className='w-40 h-auto text-white text-center'><div><C_P value={ins.val}/></div><div className='font-semibold text-xl'>{ins.heading}</div></div> */}
                        <div  className='flex flex-col hover:border-pri border-bor border-2 py-2 mb-10 w-40 h-auto text-white text-center items-center align-bottom'><div className='mb-2 mt-auto'><Image src={ins.image} alt="" width={80} height={80}/></div><div className='font-semibold text-xl'>{ins.heading}</div></div>
                    </div>
                    ))}
              
              </div>
        </div></div>
        </section>
    )
    }

export default Prog