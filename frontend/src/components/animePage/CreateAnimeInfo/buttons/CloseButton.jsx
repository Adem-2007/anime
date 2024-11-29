import React, { useState } from 'react'

const CloseButton = ({onclick}) => {
    return (
        <>
        <button
            onClick={onclick}
            className=" fixed top-[90px]  text-xl text-gray-300 hover:text-white transition-transform transform hover:scale-110"
            aria-label="Close Modal"
        >
            ✖
        </button>
        </>
    )
}

export default CloseButton