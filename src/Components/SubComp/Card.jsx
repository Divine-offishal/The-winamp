







import React from "react";
export default function Card({item}) {

  return <>
  <div className='md:w-44 w-64 h-44 p-4'>
                  <img src={item.image} alt={item.name} className=" w-full h-full object-cover" />
                </div>
                <div className='mt-4'>
                  <h1>{item.name}</h1>
                  {item.genre && <h1 className="text-2xl my-4">{`${item.genre} discussions`}</h1>}
                </div></>;
}
  