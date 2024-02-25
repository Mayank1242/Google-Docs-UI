import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { IoIosDownload } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data,refernce}) {
    
  return (
    <div>
    <motion.div drag dragConstraints={refernce} whileDrag={{scale:1.2}} className= 'relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
    <FaRegFileAlt className=''/>

    <p className='text-sm leading-right mt-5 font-semibold'>{data.desc}</p>
   
    <div className='footer absolute bottom-0  w-full   left-0'>
               <div className='flex items-center justify-between px-8 py-3 mb-5'>
                <h5> {data.filesize}</h5>
               <span className='w-5 h-5 bg-zinc-600 rounded-full flex items-center justify-center'>
               {data.close ? <IoCloseSharp /> : <IoIosDownload size='1em'  /> }
              
               </span>
               </div>    

               {
                data.tag.isOpen && (
                <div className={`tag w-full py-4 ${data.tag.tagColor == "blue" ? "bg-blue-700" : "bg-green-600"} flex items-center justify-center`}>
              <h3 className='text-md font-semibold'> {data.tag.tagTitle}</h3>
            </div>) 
               }
            
    </div>
    </motion.div>
    </div>
  )
}

export default Card