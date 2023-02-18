import React from 'react'
import { NavLink } from 'react-router-dom'
import Sidebar1Data from '../Data/Sidebar1Data'
import Playlists from '../Pages/Playlists'
import SidebarItems from './SubComp/SidebarItems'




import { ReactComponent as WinLogo } from "../svg/Union.svg"

const Sidebar1 = () => {

  return (
    <div className='bg-neutral-900 2xl:w-2/12 xl:w-[14em] lg:w-[11em] md:w-2/12 h-screen pl-4 bg-opacity-90 text-neutral-50 text-opacity-70 fixed top-0 hidden md:block'>
        <div className='flex mt-10'>
            <WinLogo/>
            <h1 className='ml-4 text-2xl font-medium text-neutral-50'>winamp</h1>
        </div>
        <input placeholder='search' className='rounded-md bg-black text-neutral-50 mt-4 pl-2'/>

        <h1 className='font-medium text-xl mt-6 mb-2'>Menu</h1>
        {Sidebar1Data.map((item) => (
            <NavLink to={item.path} key={item.id} >
                <SidebarItems text={item.name} icon={item.icons}/>
            </NavLink>
        ))}

        <h1 className='font-medium text-xl mt-6 mb-2'>Playlists</h1>
        <NavLink to="/Playlists">
            <Playlists/>
        </NavLink>
    </div>
  )
}

export default Sidebar1