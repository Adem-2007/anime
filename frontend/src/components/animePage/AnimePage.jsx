import React, { useEffect, useState } from 'react';
import NavBar from './Navigation';
import AnimePlace from './AnimePlace';
import Filter from './Filter';

const AnimePage = () => {
    const [animeList, setAnimeList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchAnime = async () => {
        try { 
            const response = await fetch('http://localhost:5000/api/user', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
            if (!response.ok) {
                throw new Error('Failed to fetch anime');
            }
            
            const data = await response.json();
            setAnimeList(data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching anime:', error);
            setError(error.message);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchAnime();
    }, []);

    const PcView = {
        page: 'lg:flex lg:justify-between'
    };

    return (
        <div className='flex flex-col w-full h-full p-3'>
            <NavBar />
            <div className={PcView.page}>
                <AnimePlace 
                    animeList={animeList} 
                    isLoading={isLoading}
                    error={error}
                    fetchAnime={fetchAnime}
                />
                <Filter fetchAnime={fetchAnime} />
            </div>
        </div>
    );
};
export default AnimePage;