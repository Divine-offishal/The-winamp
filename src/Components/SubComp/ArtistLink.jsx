import React from "react";


export default function ArtistLink({
  item,
  index
}) {
  return <div key={index} className=" md:ml-10 ml-16 md:w-44 w-64 md:h-52 h-72 border-2 bg-pink-300/40 border-pink-900 rounded-lg my-10">
            <div className='h-32 w-32 ml-4 overflow-hidden mt-2'>
              <img src={item.image} className=" h-full w-full object-cover transition-all ease-in-out duration-300 hover:scale-125" />
            </div>
            <h1 className='text-pink-300 text-xl text-center mt-6'>{item.name}</h1>
          </div>;
}
  