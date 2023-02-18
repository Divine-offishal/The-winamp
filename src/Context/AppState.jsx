import React, {useReducer } from 'react'
import ContextInit from './ContextInit'
import AppReducer from './AppReducer'
import Fakedata from '../Data/Fakedata'
import { PLAYPAUSE, NEXT, PREV, CLICK } from './Actions'

const AppState = (props) => {

  const initialState = {
    currentSong: Fakedata[0].Audio,
    nameOfSong: Fakedata[0].name,
    nameOfArtist: Fakedata[0].artist,
    image: Fakedata[0].image,
    isPlaying: false,
    id: Fakedata[0].id
  }


  const [state, dispatch] = useReducer(AppReducer, initialState)


  const playPause = () => {
    dispatch({
      type: PLAYPAUSE
    })
  }

  const next = (id) => {
    dispatch({
      type: NEXT,
      payload: id
    })
  }

  const prev = (id) => {
    dispatch({
      type: PREV,
      payload: id
    })
  }

  const click = (id) => {
    dispatch({
      type: CLICK,
      payload: id
    })
  }

  return (
    <ContextInit.Provider value={{
      playPause: playPause,
      currentSong: state.currentSong,
      nameOfSong: state.nameOfSong,
      nameOfArtist: state.nameOfArtist,
      isPlaying: state.isPlaying,
      next: next,
      prev: prev,
      id: state.id,
      image: state.image,
      click: click
    }}>
      {props.children}
    </ContextInit.Provider>
  )
}

export default AppState