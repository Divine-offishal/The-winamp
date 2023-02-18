import React, {useRef, useEffect, useContext} from 'react'
import { IonIcon } from '@ionic/react'
import { playSkipForward } from "ionicons/icons"
import { playSkipBack } from "ionicons/icons"
import { playForward } from "ionicons/icons"
import { playBack } from "ionicons/icons"
import { playCircle } from "ionicons/icons"
import { pauseCircle } from "ionicons/icons"
import IMAGES from '../Images/images'
import ContextInit from '../Context/ContextInit'

const PlayerControls = () => {

    const { playPause, currentSong, nameOfSong, nameOfArtist, isPlaying, next, prev, id, image} = useContext(ContextInit)
    const AudioRef = useRef()
    // const newId = id - 1

    useEffect(() => {
        if (!isPlaying) {
            AudioRef.current.pause()
        } else {
            AudioRef.current.play()
        }
    }, [isPlaying, nameOfSong])

  return (
    <div className='w-full h-32 fixed bottom-0 left-58 flex shadow-2xl backdrop-blur-lg bg-neutral-900/30 text-3xl'>
        <div className='h-32 w-32 m-4 md:block hidden'>
            <img src={image} className="w-full h-full object-cover "/>

        </div>

        <div className='text-neutral-50 mt-4 md:ml-10 ml-2'>
            <h1 className='text-3xl'>{nameOfSong}</h1>
            <h1 className='text-lg'>{nameOfArtist}</h1>
        </div>

        <div className='flex mt-4 text-neutral-50 md:ml-56 ml-12'>
            <div className='mt-2 mx-4' onClick={() => prev(id)}>
                <IonIcon icon={playSkipBack}/>
            </div>
            <div className='h-20 text-5xl mx-4' onClick={playPause}>
                {isPlaying? <IonIcon icon={pauseCircle}/> : <IonIcon icon={playCircle}/>}
            </div>
            <div className='mt-2 mx-4' onClick={() => next(id)}>
                <IonIcon icon={playSkipForward}/>
            </div>
        </div>
        <audio src={currentSong} ref={AudioRef}/>
    </div>
  )
}

export default PlayerControls