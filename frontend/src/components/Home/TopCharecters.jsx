import React from 'react'
import { TopCharectersCradsHorizontal } from './components/Crads/TopCharectersCards'

const TopCharecters = () => {
    const PcView = {
        cardsHoler: 'lg:text-5xl lg:p-4 lg:h-auto lg:justify-center lg:items-center lg:w-full lg:flex lg:gap-4 lg:overflow-hidden'
    }
    const MobileView = {
        cardsHoler: 'grid gap-6 mx-auto w-full p-6'
    }
    
    const characters = [
        {
            imageindex: 0,
            name: 'Ichigo Kurosaki',
            animeName: 'Bleach',
            index: 1,
            rate: 9.7,
            x: -250,
        },
        {
            imageindex: 1,
            name: 'Yagami Light',
            animeName: 'Death Note',
            index: 1.4,
            rate: 9.6,
            x: 250,
        },
        {
            imageindex: 2,
            name: 'Son Goku',
            animeName: 'Dragon Ball',
            index: 1.4,
            rate: 9.6,
            x: -250,
        },
        {
            imageindex: 3,
            name: 'Roronoa Zoro',
            animeName: 'One Piece',
            index: 1.4,
            rate: 9.6,
            x: 250,
        }
    ];
    
    return (
        <section className="bg-gradient-to-b from-gray-900 to-black py-10">
            <div className="container mx-auto px-4">
                <header className="mb-10">
                    <h4 className="text-4xl md:text-6xl font-bold text-white font-lora">
                        Top Characters
                    </h4>
                    <p className="text-gray-400 mt-2">Discover the most popular anime characters</p>
                </header>
                
                <div className={`${PcView.cardsHoler} ${MobileView.cardsHoler}`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-7xl mx-auto">
                        {characters.map((char, index) => (
                            <TopCharectersCradsHorizontal
                                key={index}
                                {...char}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopCharecters