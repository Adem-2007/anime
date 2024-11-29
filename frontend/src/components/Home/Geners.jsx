import React from 'react'
import GenersCards from './components/Crads/GenersCards'
import { GiCrystalBall, GiTreasureMap, GiSwordsPower, GiRobotGolem } from 'react-icons/gi'
import { BiAtom } from 'react-icons/bi'
import { FaLaughSquint } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Geners = () => {
    const genres = [
        {
            Icon: GiCrystalBall,
            kind: "Magic",
            description: "Explore mystical worlds and supernatural powers",
            color: "red",
            animeCount: 0,
            index: 0
        },
        {
            Icon: BiAtom,
            kind: "Science Fiction",
            description: "Discover futuristic technologies and scientific adventures",
            color: "purple",
            animeCount: 0,
            index: 1
        },
        {
            Icon: GiTreasureMap,
            kind: "Adventure",
            description: "Join epic quests and thrilling journeys",
            color: "yellow",
            animeCount: 0,
            index: 2
        },
        {
            Icon: GiSwordsPower,
            kind: "Action",
            description: "Experience intense battles and dynamic combat",
            color: "blue",
            animeCount: 0,
            index: 3
        },
        {
            Icon: FaLaughSquint,
            kind: "Comedy",
            description: "Enjoy hilarious moments and light-hearted fun",
            color: "green",
            animeCount: 0,
            index: 4
        },
        {
            Icon: GiRobotGolem,
            kind: "Mecha",
            description: "Dive into the world of giant robots and technology",
            color: "orange",
            animeCount: 0,
            index: 5
        }
    ];

    return (
        <section className="bg-gradient-to-b from-gray-900 to-black py-16">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white font-lora mb-4">
                        Anime Genres
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Explore different anime categories and find your favorite genre
                    </p>
                </motion.div>

                {/* Genres Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {genres.map((genre, index) => (
                        <GenersCards 
                            key={index}
                            {...genre}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Geners