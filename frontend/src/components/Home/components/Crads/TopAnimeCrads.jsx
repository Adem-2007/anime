import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaBookmark } from 'react-icons/fa';

export const TopAnimeCradsHorizontal = ({ image, title, rating, episodes, status, genres, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative overflow-hidden rounded-2xl bg-gray-900 shadow-xl hover:shadow-2xl 
                       transition-all duration-300 transform hover:scale-[1.02]"
        >
            <div className="relative h-[300px] md:h-[400px]">
                {/* Background Image */}
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-4">
                    {/* Title and Rating */}
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-abril">{title}</h3>
                            <div className="flex items-center gap-2">
                                <span className="text-yellow-400 font-bold">{rating}</span>
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className="text-yellow-400 w-4 h-4" />
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex gap-3">
                            <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                                <FaBookmark className="text-yellow-400 w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Details */}
                    <div className="grid grid-cols-2 gap-4 text-sm md:text-base">
                        <div>
                            <p className="text-gray-400">Episodes</p>
                            <p className="text-white font-semibold">{episodes}</p>
                        </div>
                        <div>
                            <p className="text-gray-400">Status</p>
                            <p className={`font-semibold ${status === 'Ongoing' ? 'text-green-400' : 'text-blue-400'}`}>
                                {status}
                            </p>
                        </div>
                    </div>

                    {/* Genres */}
                    <div className="flex flex-wrap gap-2">
                        {genres.map((genre, index) => (
                            <span 
                                key={index}
                                className="px-3 py-1 rounded-full bg-red-600/20 text-red-400 text-sm font-medium"
                            >
                                {genre}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export const TopAnimeCradsVertical = ({ image, title, rating, episodes, status, genres, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="group relative h-full min-h-[850px] rounded-2xl overflow-hidden shadow-xl 
                       hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
        >
            {/* Background Image */}
            <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 space-y-6">
                {/* Title and Rating */}
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-4xl font-bold text-white mb-3 font-abril">{title}</h3>
                        <div className="flex items-center gap-3">
                            <div className="bg-yellow-400/20 px-4 py-2 rounded-full">
                                <span className="text-2xl text-yellow-400 font-bold">{rating}</span>
                            </div>
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-400 w-6 h-6" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Details */}
                <div className="grid grid-cols-2 gap-8  p-6 rounded-xl backdrop-blur-sm">
                    <div>
                        <p className="text-gray-400 text-lg mb-2">Episodes</p>
                        <p className="text-white font-bold text-2xl">{episodes}</p>
                    </div>
                    <div>
                        <p className="text-gray-400 text-lg mb-2">Status</p>
                        <p className={`font-bold text-2xl ${status === 'Ongoing' ? 'text-green-400' : 'text-blue-400'}`}>
                            {status}
                        </p>
                    </div>
                </div>

                {/* Genres */}
                <div className="space-y-3">
                    <h4 className="text-white/80 text-xl">Genres</h4>
                    <div className="flex flex-wrap gap-3">
                        {genres.map((genre, index) => (
                            <span 
                                key={index}
                                className="px-6 py-2 rounded-full bg-red-600/30 text-red-400 text-lg font-medium
                                          transition-colors cursor-pointer"
                            >
                                {genre}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex justify-between items-center">
                        <div className="text-white/70">
                            <span className="text-lg">Popularity Rank</span>
                            <div className="text-white font-bold text-2xl">#1 Most Popular</div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
