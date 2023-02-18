import React from 'react'
import PlayerControls from '../Components/PlayerControls'
import Fakedata from "../Data/Fakedata"

const Trending = () => {

  const FindArray1 = Fakedata.find(item => item.id > 3 && item.id < 7) 
  
  const handleClick = () => {
    console.log(FindArray1);
  }

  return (
    <div className='bg-neutral-900 bg-opacity-95 md:w-9/12 xl:ml-56 lg:ml-44 md:ml-32 w-screen pb-32 h-screen'>
      <h1 className='text-4xl text-center text-neutral-50'>Top Charts</h1>
      <div onClick={handleClick}>
        <h1>Testing11122</h1>
      </div>
      <PlayerControls/>
    </div>
  )
}

export default Trending