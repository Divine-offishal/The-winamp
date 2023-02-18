







import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component'
import "react-lazy-load-image-component/src/effects/opacity.css"
import "react-lazy-load-image-component/src/effects/blur.css"

export default function Card({item}) {

  return <>
  <div className='md:w-44 w-64 h-44 p-4'>
                  <LazyLoadImage src={item.image}
                      className="w-64 h-32 object-cover "
                      PlaceholderSrc={item.image}
                      effect= 'blur'
                      alt={item.name}
                  />

                </div>
                <div className='mt-4'>
                  <h1>{item.name}</h1>
                  {item.genre && <h1 className="text-2xl my-4">{`${item.genre} discussions`}</h1>}
                </div></>;
}
  