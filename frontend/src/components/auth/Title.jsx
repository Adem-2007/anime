import React from "react";
import { motion } from "framer-motion";


const Title = ({ text = "", Icon }) => {
    const characters = text.split("");

    // Animation Variants
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Delay for each character
            },
        },
    };

    const characterAnimation = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            variants={characterAnimation}
            initial = 'hidden'
            animate = 'visible'
            className="flex items-center text-white">

             {/* Icon for the Register */}
             {<Icon size={50} className="mr-2" />}

            {/* The title of auth */}
            <motion.h3
                className="text-4xl font-cinzel font-extrabold text-white mt-2 flex"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {characters.map((char, index) => (
                    <motion.span
                        key={index}
                        variants={characterAnimation}
                        className="mx-1" // Adjust spacing between characters
                    >
                        {char === " " ? "\u00A0" : char} {/* Preserve spaces */}
                    </motion.span>
                ))}
            </motion.h3>
        </motion.div>
    );
};

export default Title;
