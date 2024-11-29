import React from 'react';
import { motion } from 'framer-motion';
import { MdWarning, MdCheckCircle } from 'react-icons/md'; // Warning and Success icons from Material Design

const ErrorMessage = ({ Error, Message }) => {
    return (
        <>
            {Message && (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.9, type: 'spring', ease: 'easeInOut' }}
                    className={`text-center absolute z-50 p-2 rounded w-[300px] top-3 right-2 
                        ${Error
                            ? 'bg-gray-800 border-b-4 text-red-600 border-red-600'
                            : 'bg-gray-800 border-b-4 text-green-600 border-green-600'
                        }`}
                >
                    {/* Conditionally render the icon based on the error state */}
                    {Error ? (
                        <MdWarning size={24} className="inline-block mr-2" />
                    ) : (
                        <MdCheckCircle size={24} className="inline-block mr-2" />
                    )}
                    {Message}
                </motion.p>
            )}
        </>
    );
};

export default ErrorMessage;
