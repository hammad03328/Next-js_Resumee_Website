import Link from "next/link"
import { FC } from "react"

const Button:FC<{text:string, link:string}>=({text,link}) =>{
  const gt=()=>{<a href={link}></a>}
  return (

    <div >
    <a href={link}>
    <div className=" bg-black px-4 py-1  font-extrabold text-lg text-white text-center font-mono transition-all hover:scale-110 duration-150 hover:bg-[#1cca73] hover:text-black shadow-[#92efc0] rounded-tl-lg rounded-br-lg shadow-none ring-2 ring-[#4bffa5] hover:ring-black cursor-pointer active:bg-[#076033]">{text}</div>
    </a>
    </div>
  )
}

export default Button