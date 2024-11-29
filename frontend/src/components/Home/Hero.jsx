import React from 'react';
import NavBar from './Navigation';
import ContentOfHero from './components/ContentOfHero';
import GetStartedButton from './components/Buttons/GetStartedButton';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background Image with Parallax Effect */}
            <motion.div 
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 w-full h-full"
            >
                <div 
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
                    style={{
                        backgroundImage: `url('https://w.wallhaven.cc/full/wq/wallhaven-wqe7wx.jpg')`
                    }}
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/90"></div>
            </motion.div>

            {/* Content */}
            <div className="relative z-10">
                <NavBar />
                
                <div className="container mx-auto px-4 pt-0 pb-32">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        {/* Left Content */}
                        <motion.div 
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="lg:w-1/2 text-center lg:text-left"
                        >
                            <ContentOfHero />
                            
                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mt-12">
                                <GetStartedButton />
                            </div>
                            
                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-8 mt-16">
                                {[
                                    { number: '0+', label: 'Anime Series' },
                                    { number: '4+', label: 'Characters' },
                                    { number: '0+', label: 'Categories' }
                                ].map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                                        className="text-center"
                                    >
                                        <div className="text-3xl lg:text-4xl font-bold text-red-500">{stat.number}</div>
                                        <div className="text-sm lg:text-base text-gray-300 mt-2">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Content - Featured Characters Showcase */}
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="lg:w-1/2"
                        >
                            <div className="relative group">
                                <div className="grid grid-cols-2 gap-4 z-0">
                                    {/* Character Cards */}
                                    {[
                                        'https://w.wallhaven.cc/full/43/wallhaven-43m9j3.jpg',
                                        'https://4kwallpapers.com/images/walls/thumbs_3t/16551.jpg',
                                        'https://w.wallhaven.cc/full/gj/wallhaven-gjrkwd.png',
                                        'https://w.wallhaven.cc/full/wq/wallhaven-wqe7wx.jpg'
                                    ].map((img, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.8 + (index * 0.2) }}
                                            className="relative group overflow-hidden rounded-xl"
                                        >
                                            <img 
                                                src={img}
                                                alt={`Featured Character ${index + 1}`}
                                                className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
        </div>
    );
};

export default Hero;
