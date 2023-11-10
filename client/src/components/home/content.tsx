import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faEye, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'
import Info from './content_info'
import { IRecipe } from '../../types/recipe'

type ContentProps = {
    recipe: IRecipe
}

export default function Content({ recipe }: ContentProps) {

    const [like, setLike] = useState(false)
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            {
                showModal && <Info setShowModal={setShowModal} recipe={recipe} />
            }
            <div key={recipe.id}>
                <div className='relative group overflow-hidden'>
                    <img className="rounded-xl "
                        src={recipe.picture}
                        alt="/"
                    />
                    <div className="absolute rounded-xl h-full w-full bg-black/10 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <button className='rounded-md bg-gray-300 px-4 py-4' onClick={() => setShowModal(!showModal)}>
                            <FontAwesomeIcon className='hover:cursor-pointer text-black' size='lg' icon={faEye} />
                        </button>
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-2 mt-2'>
                    <div className="flex justify-between">
                        <h4 className='text-xl font-serif font-semibold'>{recipe.name}</h4>
                        <FontAwesomeIcon icon={faClock} className='mt-2' style={recipe.time >= 30 ? { color: "#EF4444" } : recipe.time >= 15 ? { color: '#EAB308' } : { color: '#22c55e' }} />
                    </div>
                    <p className='font-serif'> Calories: <span className='text-lime-500'>{recipe.calories}</span> | Ingredients : <span className='text-lime-500'>{recipe.ingredients.length}</span></p>
                    <div className="flex justify-between">
                        <p className='text-lg font-bold font-mono'>${recipe.price}</p>

                        <div onClick={() => setLike(!like)}>
                            <FontAwesomeIcon className=' hover:cursor-pointer' size='lg' icon={like ? faHeart : emptyHeart} beat={like} style={{ color: "#fb923c" }} />
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}


