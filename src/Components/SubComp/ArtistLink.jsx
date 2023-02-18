import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component'
import "react-lazy-load-image-component/src/effects/opacity.css"
import "react-lazy-load-image-component/src/effects/blur.css"


export default function ArtistLink({
  item,
  index
}) {
  return <div key={index} className=" md:ml-10 ml-16 md:w-44 w-64 md:h-52 h-72 border-2 bg-pink-300/40 border-pink-900 rounded-lg my-10">
            <div className='h-32 w-32 ml-4 overflow-hidden mt-2'>
              <LazyLoadImage src={item.image}
                className="md:w-44 w-64 md:h-52 h-72 object-cover"
                PlaceholderSrc={item.image}
                effect= 'blur'
                alt="Image Alt"
            />
            </div>
            <h1 className='text-pink-300 text-xl text-center mt-6'>{item.name}</h1>
          </div>;
}
  