import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBreadSlice, faBowlFood, faCheese, faFish } from '@fortawesome/free-solid-svg-icons'

export default function Menu() {

    return (

        <div className="flex justify-between px-[1rem] py-0 mt-3 text-center">
            <div className='cursor-pointer'>
                <FontAwesomeIcon icon={faBreadSlice} style={{ color: "#4b5563", }} />
                <p className="text-gray-400 text-sm">Breakfast</p>
            </div>
            <div className='cursor-pointer'>
                <FontAwesomeIcon icon={faBowlFood} style={{ color: "#4b5563", }} />
                <p className="text-gray-400 text-sm">Lunch</p>
            </div>
            <div className='cursor-pointer'>
                <FontAwesomeIcon icon={faCheese} style={{ color: "#4b5563", }} />
                <p className="text-gray-400 text-sm">Snack</p>
            </div>
            <div className='cursor-pointer'>
                <FontAwesomeIcon icon={faFish} style={{ color: "#4b5563", }} />
                <p className="text-gray-400 text-sm">Dinner</p>

            </div>
        </div>
    )
}