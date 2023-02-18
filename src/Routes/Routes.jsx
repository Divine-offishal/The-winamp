import React from 'react'
import { Routes, Route} from "react-router-dom"
import Home from '../Pages/Home'
import Discover from '../Pages/Discover'
import Radio from '../Pages/Radio'
import Podcasts from '../Pages/Podcasts'
import Artists from '../Pages/Artists'
import Trending from '../Pages/Trending'
import Playlists from '../Pages/Playlists'
import Artist from '../Pages/Artist'

const PageRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Discover' element={<Discover/>}/>
        <Route path='/Radio' element={<Radio/>}/>
        <Route path='/Podcasts' element={<Podcasts/>}/>
        <Route path='/Artists' element={<Artists/>}/>
        <Route path='/Trending' element={<Trending/>}/>
        <Route path='/Playlists' element={<Playlists/>}/>
        <Route path='/Artist/:name' element={<Artist/>}/>
    </Routes>
  )
}

export default PageRoutes