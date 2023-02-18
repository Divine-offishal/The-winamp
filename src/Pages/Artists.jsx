


import ArtistLink from '../Components/SubComp/ArtistLink';
import React from 'react'
import ArtistData from '../Data/ArtistData'
import { NavLink } from 'react-router-dom'
import PlayerControls from '../Components/PlayerControls';
import { IonIcon } from '@ionic/react'
import { arrowBackCircle } from 'ionicons/icons'

const Artists = () => {
  return (
    <>
      <div className='bg-neutral-900 bg-opacity-95 md:w-9/12 w-screen lg:h-auto md:h-screen xl:ml-56 lg:ml-44 md:ml-32 md:grid grid-cols-3 pb-24'>
        <div className='text-5xl text-neutral-50 fixed top-30 left-0 md:hidden'>
          <NavLink to="/">
            <IonIcon icon={arrowBackCircle}/>
          </NavLink>
        </div>
        {ArtistData.map((item, index) => (
          <NavLink to={`/Artist/${item.name}`} key={index}>
            <ArtistLink item={item}  index={index}  />
          </NavLink>
        ))}
        <PlayerControls/>
      </div>
      
    </>
  )
}

export default Artists