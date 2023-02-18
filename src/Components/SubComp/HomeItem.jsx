import React, { useContext } from 'react'
import FakeAudio from '../../Audio/FakeAudio'
import ContextInit from '../../Context/ContextInit'
import IMAGES from '../../Images/images'





const HomeItem = ({name, stream, artist, image, download, audio, id}) => {

  const {click} = useContext(ContextInit)
  const mainId = id -1

  return (
    <div className='h-32 w-full flex' onClick={() => click(mainId)}>
        <div className='h-10 w-32 mt-6'>
            <img src={image} className="p-2 object-cover h-20 w-20 "/>
        </div>


        <div className='mt-12 flex  font-semibold text-neutral-50'>
            <h1 className='lg:mx-6 text-lg'>{name}</h1>
            <h1 className='lg:ml-32 text-sm ml-10 mt-2'>{artist}</h1>
            <h1 className='lg:mx-32 hidden md:block text-sm ml-20 mt-2'>{stream}</h1>
            <h1 className='lg:mx-6 hidden md:block text-sm mx-12 mt-2'>{download}</h1>
        </div>
        <audio src={audio}/>
    </div>
  )
}

export default HomeItem