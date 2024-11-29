import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaHeart, FaBookmark } from 'react-icons/fa';

export const TopCharectersCradsHorizontal = ({ name, index, imageindex, animeName, rate, x }) => {
    const images = [
        'https://4kwallpapers.com/images/walls/thumbs_3t/16551.jpg',
        'https://w.wallhaven.cc/full/43/wallhaven-43m9j3.jpg', 
        'https://w.wallhaven.cc/full/gj/wallhaven-gjrkwd.png',
        'https://w.wallhaven.cc/full/wq/wallhaven-wqe7wx.jpg'
    ];

    const currentImage = images[imageindex % images.length];

    const PcView = {
        card: 'lg:relative lg:w-[600px] lg:h-[660px] lg:rounded-xl lg:shadow-[0px_0px_10px_black] lg:hover:shadow-[0px_0px_20px_white] lg:duration-300 lg:overflow-hidden lg:hover:cursor-pointer lg:hover:z-30 lg:border-2 lg:border-white/20 lg:group',
        contentWrapper: 'lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:p-8 lg:bg-gradient-to-t lg:from-black lg:to-transparent lg:translate-y-2 lg:group-hover:translate-y-0 lg:transition-transform lg:duration-300',
        heading: 'lg:text-4xl lg:font-bold lg:font-lobster lg:text-yellow-300',
        text: 'lg:text-3xl lg:font-cinzel',
        overlay: 'lg:absolute lg:inset-0 lg:bg-black/40 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-300'
    }

    const MobileView = {
        card: 'relative w-full h-[300px] rounded-xl shadow-lg overflow-hidden border border-white/20 bg-gradient-to-b from-gray-900 to-black',
        contentWrapper: 'absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black via-black/90 to-transparent',
        heading: 'text-xl font-bold text-yellow-300 mb-1',
        text: 'text-lg font-cinzel',
        imageWrapper: 'relative h-full w-full overflow-hidden'
    }

    const DesktopCard = () => (
        <motion.div
            initial={{ opacity: 0, x: x*1 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className={`hidden lg:block ${PcView.card}`}
        >
            <div className={PcView.overlay}></div>
            <CardContent />
        </motion.div>
    );

    const MobileCard = () => (
        <div className={`block lg:hidden ${MobileView.card}`}>
            <CardContent />
        </div>
    );

    const CardContent = () => (
        <div className="relative w-full h-full">
            <div className={MobileView.imageWrapper}>
                <img 
                    src={currentImage} 
                    alt={name} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
            </div>
            
            <div className={`${PcView.contentWrapper} ${MobileView.contentWrapper}`}>

                {/* Character Info */}
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className={`${PcView.heading} ${MobileView.heading}`}>{name}</h3>
                            <p className={`${PcView.text} ${MobileView.text} text-white/80`}>{animeName}</p>
                        </div>
                        <div className="flex flex-col items-end">
                            <div className="flex items-center gap-1 bg-black/50 px-3 py-1 rounded-full">
                                <span className="text-yellow-400 font-bold">{rate}</span>
                                <FaStar className="text-yellow-400" />
                            </div>
                            <span className="text-sm text-white/60 mt-1">Rating</span>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
                        <div className="text-white/70">
                            <div className="text-white font-bold">#1 Top Character</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="w-full h-auto">
            <DesktopCard />
            <MobileCard />
        </div>
    );
};
