import { actionSheetController } from '@ionic/core';
import React from 'react'
import {CLICK, PLAYPAUSE, NEXT, PREV } from './Actions';
import Fakedata from '../Data/Fakedata';



const AppReducer = (state, action) => {

    const length = Fakedata.length
  switch (action.type) {
    case PLAYPAUSE:
        return {
            ...state, 
            isPlaying: !state.isPlaying
        };
        case CLICK:
            return {
                ...state, 
                isPlaying: true,
                currentSong: Fakedata[action.payload].Audio,
                nameOfSong: Fakedata[action.payload].name,
                nameOfArtist: Fakedata[action.payload].artist,
                image: Fakedata[action.payload].image,
            };
        case NEXT:
            return {
                ...state, 
                isPlaying: true,
                currentSong: action.payload === Fakedata.length  ? Fakedata[0].Audio : Fakedata[action.payload].Audio,
                nameOfSong: action.payload === Fakedata.length  ? Fakedata[0].name : Fakedata[action.payload].name,
                nameOfArtist: action.payload === Fakedata.length  ? Fakedata[0].artist: Fakedata[action.payload].artist,
                image: action.payload === Fakedata.length  ? Fakedata[0].image : Fakedata[action.payload].image,
                id: action.payload === Fakedata.length  ? Fakedata[0].id: Fakedata[action.payload].id
            };
    case PREV:
        return {
            ...state, 
            isPlaying: true,
            currentSong: action.payload === Fakedata[0].id  ? Fakedata[length -1].Audio : Fakedata[action.payload -2].Audio,
            nameOfSong: action.payload === Fakedata[0].id  ? Fakedata[length -1].name : Fakedata[action.payload -2].name,
            nameOfArtist: action.payload === Fakedata[0].id  ? Fakedata[length -1].artist : Fakedata[action.payload -2].artist,
            image: action.payload === Fakedata[0].id  ? Fakedata[length -1].image : Fakedata[action.payload -2].image,
            id: action.payload === Fakedata[0].id  ? Fakedata[length -1].id: Fakedata[action.payload -2].id
        }
        ;
  
    default:
        break;
  }
}

export default AppReducer