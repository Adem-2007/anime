import { useEffect } from "react";
import AnimeCard from "./cards/AnimeCard";

const AnimePlace = ({ fetchAnime, animeList, loading }) => {
    useEffect(() => {
        fetchAnime();
    }, [fetchAnime]);

    return (
        <div className="p-4">
            <h2 className="lg:text-7xl lg:font-bold lg:font-cinzel lg:text-yellow-300 lg:mt-24 lg:mb-6 lg:border-yellow-300 lg:border-b-2 lg:ml-2">
                Animes
            </h2>
            <div className="lg:mt-3 lg:pl-5 lg:w-[1200px] lg:h-[900px] overflow-auto lg:border-red-500 lg:border-4 scrollbar-hide">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {loading ? (
                        <div className="text-gray-400 col-span-3 text-center text-2xl">
                            Loading...
                        </div>
                    ) : animeList && animeList.length > 0 ? (
                        animeList.map((anime) => (
                            <AnimeCard key={anime._id} anime={anime} />
                        ))
                    ) : (
                        <div className="text-gray-400 col-span-3 text-center text-2xl">
                            No animes found
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AnimePlace;
