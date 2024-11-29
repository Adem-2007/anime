import React from 'react'
import Hero from '../components/Home/Hero'
import TopAnime from '../components/Home/TopAnime'
import Geners from '../components/Home/Geners'
import TopCharecters from '../components/Home/TopCharecters'
import Footer from '../components/Home/Footer'

const Home = () => {
  return (
    <div className='text-red-600 flex flex-col gap-5'>
      <Hero />
      <TopAnime />
      <Geners />
      <TopCharecters />
      <Footer />
    </div>
  )
}

export default Home