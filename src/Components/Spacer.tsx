import { FC } from "react"

const Spacer:FC<{children:React.ReactNode}>=({children})=> {
  return (
    <div className="xs:mx-[30px] sm:mx-[60px] mx-auto ">
        {children}
    </div>
  )
}

export default Spacer
