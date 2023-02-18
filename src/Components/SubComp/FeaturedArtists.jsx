










import Card from './Card';
import React from "react";
import ArtistData from "../../Data/ArtistData";

export default function FeaturedArtists({
}) {







  return <><h1>Featured Artists</h1>
        <div className='flex overflow-x-scroll snap-x snap-mandatory snap-always'>
          {ArtistData.map((item, index) => <div key={index} className="h-64 w-64 bg-indigo-800/60 ml-6 my-6 snap-center">
                <Card item={item}/>
              </div>)}
        </div></>;
}
  