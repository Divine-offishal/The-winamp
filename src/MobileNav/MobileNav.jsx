import React, { useState } from 'react'
import { IonIcon } from '@ionic/react'
import { reorderThreeOutline } from 'ionicons/icons'
import { closeOutline } from 'ionicons/icons'
import { ReactComponent as WinLogo } from "../svg/Union.svg"
import Items from './Items'
import { NavLink } from 'react-router-dom'

const MobileNav = () => {

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

  return (
    <div className='h-20 w-screen md:hidden sticky top-0 text-neutral-50 bg-neutral-900 z-40 flex'>
        <NavLink to="/">
            <div className='flex mt-6 ml-2'>
                    <WinLogo/>
                    <h1 className='mx-2'>winamp</h1>
            </div>
        </NavLink>

        <div className='ml-auto text-5xl mt-4 mr-2' onClick={handleClick}>
            <IonIcon icon={reorderThreeOutline}/>
        </div>
        <Items open={open} setOpen={setOpen}/>
    </div>
  )
}

export default MobileNav