import { useState } from 'react'
import './App.css'
import PlayerControls from './Components/PlayerControls'
import Sidebar1 from './Components/Sidebar1'
import Sidebar2 from './Components/Sidebar2'
import AppState from './Context/AppState'
import MobileNav from './MobileNav/MobileNav'
import PageRoutes from './Routes/Routes'
import IMAGES from './Images/images'


function App() {

  return (
    <>
        <AppState>
      <MobileNav/>
      <div className='flex bg-[url(https://media.istockphoto.com/id/1396541228/photo/honeycomb-network-concept-data-transfer-digital-technological-background-3d-rendering.jpg?s=612x612&w=0&k=20&c=Y7SNDRtrraVidUss0lEwdTin8mPKSo7X1720dYpJDqo=)]'>
          <Sidebar1/>
          <PageRoutes/>
          <Sidebar2/>
      </div>
        </AppState>
    </>
  )
}

export default App
