import React from 'react'
import {motion } from 'framer-motion'
import LoadingAnimation from './LoadingAnimation'

const AuthButton = ({text, Icon, onClick, isLoading}) => {

  return (
    <motion.button 
        onClick={onClick}
        whileHover={{scale :1.1}}
        whileTap={{scale : 1}}
        initial = {{opacity : 0, y:50}}
          animate={{ opacity : 1, y:0, transition: { duration: 1.4, delay: 0.5 } }}
        className='bg-red-700/95 text-white w-[330px] h-[50px] p-1 rounded-lg text-2xl 
                font-cinzel font-extrabold shadow-xl hover:shadow-[0px_0px_10px_red]
                flex justify-center items-center'
    >
        {<Icon size={30} className='mr-1 mb-1'/>}{text}
        <LoadingAnimation loading={isLoading} />
    </motion.button>
  )
}

export default AuthButton