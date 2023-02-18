import React from 'react'
import RandomData from '../Data/RandomData'
import Card from '../Components/SubComp/Card'
import PlayerControls from "../Components/PlayerControls"

const Radio = () => {
  return (
    <div className='bg-neutral-900 bg-opacity-95 md:w-9/12 w-screen xl:ml-56 lg:ml-44 md:ml-32 pb-32'>
      <h1 className='text-3xl text-neutral-50 text-center'>Radio</h1>
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

export default Radio