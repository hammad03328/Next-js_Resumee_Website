import {MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { T_Data } from "@/Data/T_Data"

const slide_L=()=>{
var slider=document.getElementById("slider")
if (slider !== null) {slider.scrollLeft=slider.scrollLeft-250}
}
const slide_R=()=>{
var slider=document.getElementById("slider")
if (slider !== null) {slider.scrollLeft=slider.scrollLeft+250}
}


function Team() {
  return (
  <section>
  <div className="pt-28">
    <div className='xs:text-2xl sm:text-3xl font-bold mx-6 text-white'>Team Members</div>
    <div className='w-full bg-black border-2 border-bor mt-10 transition-all duration-300 hover:border-pri'>
      <div className="relative flex justify-items-center my-8">
      <MdChevronLeft onClick={slide_L} size={40} className=" active:text-bor transition-transform hover:scale-125 duration-300 rounded-md self-center text-pri absolutea left-0"/>
        <div id='slider' className=" scrollbar-none item-center snap-mandatory snap-always flex-1 flex-shrink-0 flex flex-row  w-[90%] h-[100%] gap-10 overflow-x-scroll scroll whitespace-nowrap scroll-smooth snap-x ">
          
          {T_Data.map((item)=>(
            
            <div key={item.id} className="scroll-smooth scroll-pl-96 border-bor border-2 bg-black rounded-xl mx-4 snap-center h-full flex-shrink-0 "><img className="w-[300px] h-[320pxa] inline-block  px-14 cursor-pointer ease-in-out duration-300 snap-center mt-4"
            src={item.src} /><div className="text-white text-center mt-4 font-bold">{item.Name}</div><div className="text-gray-200 text-center mb-4">{item.Exp}</div></div>
            
          ))}
        </div>
        <MdChevronRight onClick={slide_R} size={40} className=" active:text-bor transition-transform hover:scale-125 duration-300 rounded-md self-center  text-pri absolutea left-0"/>
      </div>
    </div></div>
  </section>
  )
}

export default Team