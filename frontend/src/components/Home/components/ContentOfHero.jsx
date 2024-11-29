import React from 'react'
import { motion } from 'framer-motion'

const ContentOfHero = () => {
    const text = 'Welcome to Our Website'
    const pragraph = 'Discover amazing features and enjoy an immersive experience.'

    const lettersOfPragraph = pragraph.split('');
    const charecters = text.split('');

    const containerAnimation = {
        hidden : {
            opacity : 0,
        },
        visible : {
            opacity : 1,
            transition : {
                delayChildren : 0.1,
                staggerChildren : 0.1
            }
        }
    }

    const charectersAnimation = {
        hidden : {
            opacity : 0,
        },
        visible : {
            opacity : 1,
            transition : {
                duration : 0.2
            }
        }
    }

    const pragraphAnimation = {
        hidden : {
            opacity : 0,
            y : -50
        },
        visible : {
            opacity : 1,
            y : 0,
            transition : {
                duration : 0.1
            }
        }
    }
    return (
        <div className='text-center p-16 flex flex-col justify-center items-center mt-24'>
            <motion.h1 
                variants={containerAnimation}
                initial="hidden"
                animate="visible"
                className=" lg:text-[90px] text-red-500 font-bold text-center font-mystery">
                {charecters.map((char, index) => (
                    <motion.span 
                        variants={charectersAnimation}
                        key={index} className="inline-block"
                        >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </motion.h1>
            <motion.p 
                variants={containerAnimation}
                initial="hidden"
                animate="visible"
                className="text-lg lg:text-4xl font-cinzel font-bold text-center mt-4 max-w-2xl"
                >
                {lettersOfPragraph.map((char, index) => (
                    <motion.span 
                        variants={pragraphAnimation}
                        key={index} className="inline-block"
                        >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </motion.p>
        </div>
    )
}

export default ContentOfHero