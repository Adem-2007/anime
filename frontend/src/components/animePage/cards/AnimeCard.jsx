import React from 'react';
import { GiSwordsPower, GiTreasureMap } from 'react-icons/gi';
import { FaLaughSquint } from 'react-icons/fa';

const AnimeCard = ({ anime }) => {
    // Debug: Log the individual anime prop
    console.log('Anime in AnimeCard:', anime);

    // Defensive programming to handle missing data
    const {
        name = 'Unknown Anime',
        image = 'https://via.placeholder.com/350x400',
        rating = 'N/A',
        episodes = 0
    } = anime || {};

    const genres = [
        {
            name: 'Action',
            color: 'bg-red-500/90',
            icon: GiSwordsPower
        },
        {
            name: 'Comedy',
            color: 'bg-yellow-500/90',
            icon: FaLaughSquint
        },
        {
            name: 'Adventure',
            color: 'bg-green-500/90',
            icon: GiTreasureMap
        },
    ];

    const Pcview = {
        card: 'relative group overflow-hidden transition-transform',
        image: 'w-[350px] h-[400px] object-cover m-2 rounded-xl',
        name: 'text-white text-2xl font-bold font-cinzel text-center w-full',
        geners: 'text-white text-sm mb-2 text-start w-full flex flex-col gap-2 justify-start items-start',
        rating: 'text-white text-sm mb-2 bg-black/60 text-center px-2 rounded-lg',
        episodes: 'text-white text-sm mb-2 bg-black/60 text-center px-2 rounded-lg w-[90px]',
        duration: 'text-white text-sm mb-2 bg-black/60 text-center px-2 rounded-lg w-[90px] shadow-lg',
        status: 'text-white text-sm',
        overlay: 'absolute top-0 bg-black/60 left-[8px] w-[350px] h-[400px] rounded-xl items-start justify-end flex flex-col gap-1 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300',
    };

    return (
        <div className={Pcview.card}>
            <div className='relative'>
                <img 
                    src={image} 
                    alt={name} 
                    className={Pcview.image} 
                    onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/350x400';
                    }}
                /> 
                <div className={Pcview.overlay}>
                    <h2 className={Pcview.name}>{name}</h2>
                    <div className='flex justify-center items-center w-full'>
                        <p className={Pcview.geners}>
                            {genres.map((item, index) => (
                                <span
                                    className={`${item.color} px-2 py-1 rounded-lg flex items-center mr-2`}
                                    key={index}
                                >
                                    <span className='bg-black/40 mr-1 w-5 h-5 rounded-full justify-center flex items-center'>
                                        <item.icon className='' />
                                    </span>
                                    {item.name}
                                </span>
                            ))}
                        </p>
                        <div>
                            <p className={Pcview.rating}>Rate: {rating}/10</p>
                            <p className={Pcview.episodes}>Ep: {episodes}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimeCard;