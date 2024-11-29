import React from 'react'
import { motion } from 'framer-motion'

const Input = ({ label, LabelIcon, placeholder, type = '', delay, value, id, onChange }) => {
    // Animation for input
    const inputAnimation = {
        hidden: { opacity: 0, x: -150 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1.5, delay: delay }
        }
    }

    // Animation for each letter of the label
    const labelAnimation = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.4
            }
        }
    }

    const characters = label.split("") // Split the label text into characters for the animation

    return (
        <div className='flex flex-col '>
            {/* Label with animation for each character */}
            <motion.label
                className='text-start font-poppins text-white mb-2 ml-2 flex gap-1'
                variants={labelAnimation}
                initial="hidden"
                animate="visible"
            >
                {<LabelIcon size={20} />}
                {characters.map((char, index) => (
                    <motion.span
                        key={index}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { delay: index * 0.2 } }
                        }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </motion.label>

            {/* Input field with motion animation */}
            <motion.div
                variants={inputAnimation}
                initial="hidden"
                animate="visible"
                className="relative"
            >
                {<LabelIcon size={20} className="absolute text-red-600 top-[13px] left-2"/>}
                <input
                    type={type}
                    value={value}
                    id={id}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="h-12 w-full pl-10 rounded-lg border-red-600 border-2 outline-none bg-black text-white font-bold font-raleway"
                />
            </motion.div>
        </div>
    )
}

export default Input
