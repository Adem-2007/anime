import React, { useState } from 'react';
import FilterButton from './Buttons/FilterButton';
import CreateAnimeButton from './Buttons/CreateAnimeButton';
import { useSelector } from 'react-redux';

const Filter = ({ fetchAnime, onApplyFilters }) => {
    const { isAuthenticated } = useSelector(state => state.auth);
    const [search, setSearch] = useState('');
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [episodeRange, setEpisodeRange] = useState([1, 50]);
    const [sort, setSort] = useState('');

    const genres = [
        { name: '🎭 Action', color: 'bg-red-500' },
        { name: '😂 Comedy', color: 'bg-green-500' },
        { name: '👻 Horror', color: 'bg-gray-700' },
        { name: '🔮 Magic', color: 'bg-pink-500' },
    ];

    const handleGenreChange = (genre) => {
        setSelectedGenres((prev) =>
            prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
        );
    };

    const handleApplyFilters = () => {
        onApplyFilters({
            search,
            selectedGenres,
            episodeRange,
            sort
        });
    };

    return (
        <div className="p-6 bg-gray-800/60 border-2 border-red-500 mt-48 text-white rounded-lg shadow-lg h-[900px] m-2">
            {/* Search Bar */}
            <div className="mb-6">
                <label className="block text-lg font-semibold mb-2">
                    🔍 Search Anime
                </label>
                <input
                    type="text"
                    placeholder="Search by title..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Genres */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">🎨 Genres</h3>
                <div className="flex flex-wrap gap-3">
                    {genres.map((genre) => (
                        <button
                            key={genre.name}
                            onClick={() => handleGenreChange(genre.name)}
                            className={`px-4 py-2 rounded-lg font-medium shadow-md ${genre.color} ${
                                selectedGenres.includes(genre.name)
                                    ? 'ring-4 ring-yellow-300'
                                    : 'opacity-80'
                            }`}
                        >
                            {genre.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Episode Range */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">🎞️ Episodes</h3>
                <input
                    type="range"
                    min="1"
                    max="50"
                    value={episodeRange[1]}
                    onChange={(e) => setEpisodeRange([1, parseInt(e.target.value)])}
                    className="w-full"
                />
                <p className="mt-2 text-gray-300">
                    Episodes: <span className="font-bold text-blue-400">{episodeRange[0]}</span> to{' '}
                    <span className="font-bold text-blue-400">{episodeRange[1]}</span>
                </p>
            </div>

            {/* Sort Options */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">⚙️ Sort By</h3>
                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                    <option value="">Select</option>
                    <option value="popularity">🔥 Popularity</option>
                    <option value="rating">⭐ Rating</option>
                    <option value="alphabetical">🅰️ Alphabetical</option>
                </select>
            </div>

            {/* Apply Button */}
            <button 
                onClick={handleApplyFilters}
                className="w-full bg-red-500 text-white p-3 rounded-lg hover:bg-red-600 transition duration-300"
            >
                Apply Filters
            </button>

            {isAuthenticated && <CreateAnimeButton fetchAnime={fetchAnime} />}
        </div>
    );
};

export default Filter;