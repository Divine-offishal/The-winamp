









import FeaturedSongs from '../Components/SubComp/FeaturedSongs';
import FeaturedArtists from '../Components/SubComp/FeaturedArtists';
import React from 'react'
import ArtistData from '../Data/ArtistData'
import Fakedata from '../Data/Fakedata';
import PlayerControls from '../Components/PlayerControls';

const Discover = () => {
  return (
    <div className='bg-neutral-900 bg-opacity-95 w-screen md:w-9/12 xl:ml-56 lg:ml-44 md:ml-32 pb-32'>
      <div className='text-white text-center text-2xl mt-10'>
        <FeaturedArtists />

        <FeaturedSongs />
      </div>
      <PlayerControls/>
    </div>
  )
}

export default Discover