import React, { useState } from 'react';
import AnimeFormat from '../CreateAnimeInfo/AnimeFormat';

const CreateAnimeButton = ({fetchAnime}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen((prev) => !prev); // Reliable toggle
    };

    return (
        <div className="flex justify-center pt-6">
            <button
                onClick={toggleModal}
                className="bg-red-500 font-cinzel text-white duration-200 hover:bg-red-600 p-3 rounded-md"
            >
                Create Anime
            </button>
            {isOpen && <AnimeFormat fetchAnime={fetchAnime}/>}
        </div>
    );
};

export default CreateAnimeButton;
