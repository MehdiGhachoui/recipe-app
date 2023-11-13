import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBreadSlice, faBowlFood, faCheese, faFish, faWhiskeyGlass, faBurger } from '@fortawesome/free-solid-svg-icons'

type MealProps = {
    type: string
    setType: (val: string) => void
}
export default function Menu({ type, setType }: MealProps) {

    return (

        <div className="flex justify-between px-[1rem] py-0 mt-2 text-center ">
            <button onClick={() => setType(type == "breakfast" ? "" : "breakfast")} className={`cursor-pointer ${type == "breakfast" ? "text-black" : "text-gray-400"}`}>
                <FontAwesomeIcon icon={faBreadSlice} style={type == "breakfast" ? { color: "black", } : { color: "#4b5563", }} />
                <p className="text-xs">Breakfast</p>
            </button>
            <button onClick={() => setType(type == "lunch" ? "" : "lunch")} className={`cursor-pointer ${type == "lunch" ? "text-black" : "text-gray-400"}`}>
                <FontAwesomeIcon icon={faBowlFood} style={type == "lunch" ? { color: "black", } : { color: "#4b5563", }} />
                <p className=" text-xs">Lunch</p>
            </button>
            <button onClick={() => setType(type == "dinner" ? "" : "dinner")} className={`cursor-pointer ${type == "dinner" ? "text-black" : "text-gray-400"}`}>
                <FontAwesomeIcon icon={faFish} style={type == "dinner" ? { color: "black", } : { color: "#4b5563", }} />
                <p className="text-xs">Dinner</p>
            </button>
            <button onClick={() => setType(type == "snack" ? "" : "snack")} className={`cursor-pointer ${type == "snack" ? "text-black" : "text-gray-400"}`}>
                <FontAwesomeIcon icon={faBurger} style={type == "snack" ? { color: "black", } : { color: "#4b5563", }} />
                <p className=" text-xs">Snack</p>
            </button>

            <button onClick={() => setType(type == "dessert" ? "" : "dessert")} className={`cursor-pointer ${type == "dessert" ? "text-black" : "text-gray-400"}`}>
                <FontAwesomeIcon icon={faCheese} style={type == "dessert" ? { color: "black", } : { color: "#4b5563", }} />
                <p className=" text-xs">Dessert</p>
            </button>
            <button onClick={() => setType(type == "juice" ? "" : "juice")} className={`cursor-pointer ${type == "juice" ? "text-black" : "text-gray-400"}`}>
                <FontAwesomeIcon icon={faWhiskeyGlass} style={type == "juice" ? { color: "black", } : { color: "#4b5563", }} />
                <p className=" text-xs">Juice</p>
            </button>
        </div>
    )
}