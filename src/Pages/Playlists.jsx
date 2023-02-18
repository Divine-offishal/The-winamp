import React from 'react'
import { IonIcon } from '@ionic/react'
import { musicalNotes} from "ionicons/icons"
import { trash} from "ionicons/icons"

const Playlists = () => {
  return (
    <div className='w-9/12 flex bg-opacity-95'>
        <div className='text-lg'>
          <IonIcon icon={musicalNotes}/>
        </div>
        <div className='ml-4 text-lg'>Playlists</div>
        <div className='ml-6 text-lg'>
          <IonIcon icon={trash}/>
        </div>
    </div>
  )
}

export default Playlists