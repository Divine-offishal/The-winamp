import React from 'react'
import { IonIcon } from '@ionic/react'
import { close } from 'ionicons/icons'
import { NavLink } from 'react-router-dom'
import Sidebar1Data from '../Data/Sidebar1Data'







const Items = ({open, setOpen}) => {


  return (
    <div className={` bg-neutral-900 text-neutral-50 w-56 h-screen z-50 fixed top-0 ${open? "right-0": "right-[-300px]"} transition-all ease-in-out duration-200`}>
        <div className='mt-6 ml-44 text-5xl' onClick={() => setOpen(false)}>
            <IonIcon icon={close}/>
        </div>

        <div className='ml-20'>
            {Sidebar1Data.map((item) => (
                <NavLink key={item.id} to={item.path} onClick={() => setOpen(false)} className="text-2xl font-medium mx-4">
                    <h1>{item.name}</h1>
                </NavLink>
            ))}
            
        </div>
    </div>
  )
}

export default Items