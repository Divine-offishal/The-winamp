import React, { useEffect, useState } from 'react'
import IMAGES from '../Images/images'
import Fakedata from '../Data/Fakedata'
import HomeItem from '../Components/SubComp/HomeItem'
import PlayerControls from '../Components/PlayerControls'
import Carousel from '../Components/SubComp/Carousel'

const Home = () => {

  return (
    <div className='text-center text-3xl md:w-9/12 bg-neutral-900 bg-opacity-95 xl:ml-56 lg:ml-44 md:ml-32 overflow-x-hidden'>
    <Carousel/>

      <h1>The list</h1>
      <div className='mb-32'>
        {Fakedata.map((item, index) => (
          <div key={index}>
            <HomeItem name={item.name} artist={item.name} audio={item.audio} stream={item.streams} download={item.downloads} image={item.image} id={item.id}/>
              <hr style={{color: "white", height: "2px", width: "100vw", marginRight: "100px"}}/>
          </div>
        ))}
      </div>

      <PlayerControls/>
    </div>
  )
}

export default Home