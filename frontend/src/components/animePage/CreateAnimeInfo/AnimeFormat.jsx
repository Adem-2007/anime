import React, { useState } from 'react';
import CloseButton from './buttons/CloseButton';

// AnimeFormat Component
const AnimeFormat = () => {
    const [isOpen, setIsOpen] = useState(true); // Tracks if the modal is open

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        rating: '',
        episodes: '',
    });

    const handleInputChange = (event) => {
        setFormData({...formData, [event.target.name] : event.target.value})
    };

    const addAnime = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const res = await fetch('http://localhost:5000/api/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await res.json();
            console.log(data);
            setFormData({
                name: '',
                description: '',
                rating: '',
                episodes: '',
            })
        } catch (error) {
            console.log('Error in Anime Formate', error);
        }
    }

    // Function to handle closing the modal
    const close = () => {
        setIsOpen(false);
    };


    return (
        <>
            {isOpen && (
                <div className={`fixed inset-0 flex items-center justify-center bg-black/60 ${isOpen ? '' : ''}`}>
                    <div
                        className="relative bg-gray-900 lg:h-[700px] text-white p-8 lg:w-[700px] w-full mx-4 rounded-lg border-4 border-red-500 shadow-xl overflow-auto"
                        style={{ scrollbarWidth: 'none' }}
                    >
                        <CloseButton onclick={close} />
                        <h1 className="text-3xl font-bold mb-6 text-center text-red-400">🎬 Create Your Anime</h1>
                        <form className="space-y-6" onSubmit={addAnime}>
                            <div>
                                <label
                                    htmlFor="animeName"
                                    className="block text-lg mb-2 font-medium"
                                >
                                    ✏️ Anime Name
                                </label>
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    type="text"
                                    id="animeName"
                                    placeholder="Enter the anime's name"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="animeDescription"
                                    className="block text-lg mb-2 font-medium"
                                >
                                    📜 Description
                                </label>
                                <textarea
                                    id="animeDescription"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    rows="4"
                                    placeholder="Provide a brief description of the anime"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    required
                                ></textarea>
                            </div>
                            <div>
                                <label
                                    htmlFor="episodeCount"
                                    className="block text-lg mb-2 font-medium"
                                >
                                    🎥 Number of Episodes
                                </label>
                                <input
                                    name="episodes"
                                    value={formData.episodes}
                                    onChange={handleInputChange}
                                    type="number"
                                    id="episodeCount"
                                    placeholder="Enter number of episodes"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    min="1"
                                    required
                                />
                            </div>
                            <div>
                                <p className="text-sm text-white mt-1">
                                    Hold <span className="font-semibold">Ctrl</span> or{' '}
                                    <span className="font-semibold">Cmd</span> to select
                                    multiple genres.
                                </p>
                            </div>
                            <div>
                                <label
                                    htmlFor="globalRate"
                                    className="block text-lg mb-2 font-medium"
                                >
                                    ⭐ Global Rating
                                </label>
                                <input
                                    name="rating"
                                    value={formData.rating}
                                    onChange={handleInputChange}
                                    type="number"
                                    id="globalRate"
                                    placeholder="Rate out of 10"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    step="0.1"
                                    max="10"
                                    required
                                />
                            </div>
                            <div>
                            </div>
                            <div>
                                <button
                                    onClick={addAnime}
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-red-500 to-red-700 py-3 rounded-lg text-lg font-bold text-white shadow-lg hover:from-red-600 hover:to-red-800 transition-all duration-300 "
                                >
                                    🚀 Create Anime
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default AnimeFormat;
