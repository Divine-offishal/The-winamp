import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Scrollbar, A11y,  Navigation, Pagination, Autoplay} from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

const Carousel = () => {
  return (
    <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop= {true}
        loopedSlides= {0}
        autoplay= {true}
        navigation
        pagination={{ clickable: true}}>
            <SwiperSlide>
                <div className='bg-[url(https://media.istockphoto.com/id/1201075450/photo/happy-people-dance-in-nightclub-party-concert.jpg?s=612x612&w=0&k=20&c=KsI0rjp4rVSTCR3ErZX0-8rBa2u0UC09tW3T7BRoRL4=)] text-neutral-50 h-full'>
                <div className='h-full z-10 relative top-0 bg-gradient-to-b from-neutral-900 to-neutral-900/20'>
                <h1 className='text-5xl font-bold text-center pt-32 text-blue-900'>Discover Favourite Artists</h1>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide><div className='bg-[url(https://cdn.pixabay.com/photo/2022/06/21/21/15/audio-7276511__340.jpg)] text-neutral-50 h-full'>
                <div className='h-full z-10 relative top-0 bg-gradient-to-b from-neutral-900 to-neutral-900/20'>
                    <h1 className='text-5xl font-bold text-center pt-32 text-pink-900'>Feel the Vibes</h1>
                </div>
                </div></SwiperSlide>
            <SwiperSlide>
                <div className='bg-[url(https://img.freepik.com/premium-photo/black-music-notes-flowing-along-lines-song-melody-dark-background-copy-space-your-text-title-top-concept-music-aesthetic-rhythm-3d-illustration-rendering_34515-927.jpg)] text-neutral-50 h-full'>
                <div className='h-full z-10 relative top-0 bg-gradient-to-b from-neutral-900 to-neutral-900/20'>
                    <h1 className='text-5xl font-bold text-center pt-32 text-neutral-50'>Discover new Jams</h1> 
                </div>
                </div>
            </SwiperSlide>
        </Swiper>
  )
}

export default Carousel