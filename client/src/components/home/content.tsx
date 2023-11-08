import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faEye, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'
import Info from './content_info'

export default function Content() {

    const [like, setLike] = useState(false)
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            {
                showModal && <Info setShowModal={setShowModal} />
            }
            <div className="mt-7 grid md:grid-cols-4 z-10 gap-4">

                <div>
                    <div className='relative group overflow-hidden'>
                        <img className="rounded-xl "
                            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
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
                            <h4 className='text-xl font-serif font-semibold'>Chiken Salad</h4>
                            <FontAwesomeIcon icon={faClock} className='mt-2' style={{ color: "red" }} />
                        </div>
                        <p className='font-serif'> Calories: <span className='text-lime-500'>425</span> | Ingredients : <span className='text-lime-500'>12</span></p>
                        <div className="flex justify-between">
                            <p className='text-lg font-bold font-mono'>$30</p>

                            <div onClick={() => setLike(!like)}>
                                <FontAwesomeIcon className=' hover:cursor-pointer' size='lg' icon={like ? faHeart : emptyHeart} beat={like} style={{ color: "#fb923c" }} />
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}


