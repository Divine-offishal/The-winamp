import React from 'react'
import { IonIcon } from '@ionic/react'



const SidebarItems = ({icon, text}) => {
  return (
    <div className='flex my-2'>
      <div className='mt-[4px]'>
        <IonIcon icon={icon}/>
      </div>
        <h1 className='font-medium ml-4'>{text}</h1>
    </div>
  )
}

export default SidebarItems