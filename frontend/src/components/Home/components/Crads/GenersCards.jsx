import React from 'react'
import { motion } from 'framer-motion'

const GenersCards = ({ Icon, index, kind, description, color, animeCount }) => {
    const colorVariants = {
        red: {
            bg: 'bg-red-600/10',
            border: 'border-red-600/30',
            text: 'text-red-500',
            shadow: 'hover:shadow-red-500/50',
            iconBg: 'bg-red-500/20'
        },
        purple: {
            bg: 'bg-purple-600/10',
            border: 'border-purple-600/30',
            text: 'text-purple-500',
            shadow: 'hover:shadow-purple-500/50',
            iconBg: 'bg-purple-500/20'
        },
        yellow: {
            bg: 'bg-yellow-600/10',
            border: 'border-yellow-600/30',
            text: 'text-yellow-500',
            shadow: 'hover:shadow-yellow-500/50',
            iconBg: 'bg-yellow-500/20'
        },
        blue: {
            bg: 'bg-blue-600/10',
            border: 'border-blue-600/30',
            text: 'text-blue-500',
            shadow: 'hover:shadow-blue-500/50',
            iconBg: 'bg-blue-500/20'
        },
        green: {
            bg: 'bg-green-600/10',
            border: 'border-green-600/30',
            text: 'text-green-500',
            shadow: 'hover:shadow-green-500/50',
            iconBg: 'bg-green-500/20'
        },
        orange: {
            bg: 'bg-orange-600/10',
            border: 'border-orange-600/30',
            text: 'text-orange-500',
            shadow: 'hover:shadow-orange-500/50',
            iconBg: 'bg-orange-500/20'
        }
    };

    const colors = colorVariants[color];

    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`relative group rounded-2xl p-6 ${colors.bg} border ${colors.border}
                       backdrop-blur-sm hover:backdrop-blur-lg transition-all duration-300
                       hover:scale-[1.02] cursor-pointer shadow-lg ${colors.shadow}`}
        >
            {/* Icon Container */}
            <div className={`w-16 h-16 rounded-full ${colors.iconBg} flex items-center justify-center mb-6
                           group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`text-4xl ${colors.text}`} />
            </div>

            {/* Content */}
            <div className="space-y-4">
                <h3 className={`text-2xl font-bold ${colors.text} font-cinzel`}>
                    {kind}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed min-h-[60px]">
                    {description}
                </p>

                {/* Stats and Action */}
                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                    <div className="text-gray-400">
                        <span className="text-sm">Available Anime</span>
                        <p className={`text-lg font-bold ${colors.text}`}>{animeCount}+</p>
                    </div>
                    
                    <button className={`px-4 py-2 rounded-full ${colors.bg} ${colors.text} 
                                     font-semibold text-sm group-hover:scale-105 transition-transform duration-300`}>
                        Explore
                    </button>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className={`absolute top-0 right-0 w-24 h-24 ${colors.bg} rounded-full blur-3xl opacity-20
                           group-hover:opacity-40 transition-opacity duration-300`} />
        </motion.div>
    )
}

export default GenersCards