import React from 'react'
import { motion } from 'framer-motion'
import { TopAnimeCradsHorizontal, TopAnimeCradsVertical } from './components/Crads/TopAnimeCrads'

const TopAnime = () => {
    const animeList = [
        {
            image: 'https://4kwallpapers.com/images/wallpapers/one-piece-monkey-d-3840x2160-16927.jpg',
            title: 'One Piece',
            rating: 9.8,
            episodes: 1084,
            status: 'Ongoing',
            genres: ['Action', 'Adventure', 'Comedy'],
            index: 0.4
        },
        {
            image: 'https://4kwallpapers.com/images/walls/thumbs_3t/16551.jpg',
            title: 'Bleach',
            rating: 9.6,
            episodes: 366,
            status: 'Completed',
            genres: ['Action', 'Adventure', 'Fantasy'],
            index: 1.4
        },
        {
            image: 'https://4kwallpapers.com/images/walls/thumbs_3t/18829.jpg',
            title: 'Dragon Ball',
            rating: 9.7,
            episodes: 153,
            status: 'Completed',
            genres: ['Action', 'Adventure', 'Fantasy'],
            index: 2.4
        }
    ];

    return (
        <section className="bg-gradient-to-b from-black to-gray-900 py-16">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white font-lora mb-4">
                        Top Anime Series
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Discover the most popular and highly-rated anime series
                    </p>
                </motion.div>

                {/* Anime Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column - Horizontal Cards */}
                    <div className="space-y-8">
                        {animeList.slice(0, 2).map((anime, index) => (
                            <TopAnimeCradsHorizontal 
                                key={index}
                                {...anime}
                            />
                        ))}
                    </div>

                    {/* Right Column - Vertical Card (Desktop Only) */}
                    <div className="hidden lg:block">
                        <TopAnimeCradsVertical 
                            {...animeList[2]}
                        />
                    </div>

                    {/* Mobile-only Card for the Third Anime */}
                    <div className="lg:hidden">
                        <TopAnimeCradsHorizontal 
                            {...animeList[2]}
                        />
                    </div>
                </div>

                {/* View More Button */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full
                                     transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-600/50">
                        Explore More Anime
                    </button>
                </motion.div>
            </div>
        </section>
    )
}

export default TopAnime