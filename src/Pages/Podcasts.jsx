import React from 'react'
import Card from '../Components/SubComp/Card'
import RandomData from '../Data/RandomData'
import PlayerControls from "../Components/PlayerControls"

const Podcasts = () => {
  return (
    <div className=' md:w-9/12 bg-neutral-900 bg-opacity-95 xl:ml-56 lg:ml-44 md:ml-32 w-screen pb-32'>
      <h1 className='text-3xl text-neutral-50 text-center'>Podcasts</h1>
      {
        RandomData.map((item, index) => (
          <div key={index} className="h-64 w-11/12 bg-indigo-800/60 ml-6 my-6 snap-center flex text-5xl text-neutral-50 pt-5">
            <Card item={item}/>
          </div>
        ))
      }

      <PlayerControls/>
    </div>
  )
}

export default Podcasts