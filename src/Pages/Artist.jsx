import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import PlayerControls from '../Components/PlayerControls'
import ArtistData from '../Data/ArtistData'
import { IonIcon } from '@ionic/react'
import { arrowBackCircle } from 'ionicons/icons'

const Artist = () => {

    const { name } = useParams()
    const FindItem = ArtistData.find(item => item.name === name)

  return (
    <div className="bg-neutral-900 text-white bg-opacity-95 md:w-9/12 w-screen xl:ml-56 lg:ml-44 md:ml-32 pb-32">
        <div className=' w-full h-64 mt-6 mb-20'>
            <NavLink to="/Artists">
              <div className='z-30 text-4xl ml-6 my-4'>
                <IonIcon icon={arrowBackCircle}/>
              </div>
            </NavLink>
            <img src={FindItem.image} className="h-full w-full object-cover"/>
            <div className='w-full h-full relative top-[-255px] right-0 bg-gradient-to-b from-neutral-800/10 to-neutral-900 z-10'></div>
        </div>
        <h1 className='text-4xl text-center my-6'>{FindItem.name}</h1>
        <h1 className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aspernatur illum quae explicabo quia, aut repellendus ratione quisquam nesciunt vel modi eveniet nulla sunt? Veniam quaerat ut unde aperiam, minima asperiores pariatur temporibus sed assumenda architecto accusamus voluptatibus voluptatem facilis voluptate aspernatur expedita nesciunt adipisci distinctio similique neque quas laborum quibusdam animi ipsam. Eligendi, dolor fugiat ex cupiditate nam id minima modi iste aliquid repellendus? Rerum officia dolore quam praesentium explicabo quis eius assumenda aspernatur expedita aperiam eveniet iste, quia sed voluptatum dolorum omnis reiciendis eum odio dicta? Necessitatibus, illo soluta. Optio tenetur in numquam debitis sunt molestiae magni deleniti, voluptates, exercitationem quo voluptatem accusamus earum dolorum maiores asperiores nemo soluta libero beatae quam rerum autem nostrum eum, amet unde? Maxime asperiores nulla quidem expedita perferendis odit tempore ab fugiat blanditiis. Debitis delectus exercitationem reiciendis, dolore esse error? Repellendus magnam nostrum neque aliquam debitis at, earum esse voluptates soluta corrupti atque voluptate non cum possimus iste autem voluptatem, harum iusto ea sit dolores maiores! Et soluta sint, officiis sapiente deserunt nemo nulla doloremque in iste, error vero voluptate maiores, facilis quos nobis facere dolorem natus commodi. Quia architecto quam sed ea magnam, reprehenderit sunt laudantium fuga sequi deserunt illo reiciendis.</h1>

        <PlayerControls/>
    </div>
  )
}

export default Artist