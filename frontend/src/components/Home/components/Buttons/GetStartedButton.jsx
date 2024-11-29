import React from 'react'
import { motion } from 'framer-motion'
const GetStartedButton = () => {
  return (
    <motion.button 
        whileHover={{scale :1.1}}
        whileTap={{scale : 1}}
        initial = {{opacity : 0, y:50}}
        animate = {{opacity : 1, y:0}}
        transition = {{ duration: 0.1, delay: 0.1 }}
        className='bg-red-700/95 text-white mt-20 ml-[43%] rounded-md p-4 text-2xl font-cinzel font-extrabold shadow-xl duration-300 hover:shadow-[0px_0px_10px_red]'>
        GetStarted
    </motion.button>
  )
}

export default GetStartedButton