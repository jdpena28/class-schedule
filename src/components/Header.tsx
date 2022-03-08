import React from 'react'
import {motion} from 'framer-motion'

export const  Header:React.FC = () => {
  return (
    <motion.header
     animate = {{y: ['-100px', '0px']}}
     transition = {{duration: .8}}
    className = "bg-red-500 p-3 md:mt-5 md:mx-20 mx-1">
      <h1 className = "font-secondary text-4xl font-bold text-center text-[#f2f5f2]"><b className="text-black">ND3A</b> CLASS SCHEDULE</h1>
    </motion.header>
  )
}
export default Header

