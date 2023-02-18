






import React from "react";
import Fakedata from "../../Data/Fakedata";
import Card from "./Card";

export default function FeaturedSongs({
}) {
  return <><h1>Featured Songs</h1>
        <div className='overflow-x-scroll snap-x snap-mandatory snap-always flex'>
          {Fakedata.map((item, index) => <div key={index} className="h-64 w-64 bg-indigo-800/60 ml-6 my-6 snap-center">
                  <Card item={item}/>
              </div>)}

        </div></>;
}
  