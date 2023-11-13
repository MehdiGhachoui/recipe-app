import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom"
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/auth/AuthContext'

type HeaderProps = {
    setInput: (val: string) => void
}

export default function Header({ setInput }: HeaderProps) {
    const [hidden, setHidden] = useState(true)
    const navigate = useNavigate()
    const { user, setUser } = useContext(AuthContext)

    const handleSignout = () => {
        setTimeout(() => {
            if (setUser) setUser("");
            navigate("/auth", { replace: true })
        }, 400)
    }
    return (
        <div className=" flex justify-between  border-b-solid border-b-[1px] border-b-orange-300 w-full min-h-[80px] mt-2 py-5">
            <h2 className="text-4xl text-orange-500 text-center md:text-left hover:cursor-pointer">Recipe</h2>

            <div className="max-w-[400px] m-auto w-full px-2 py-3 shadow-md rounded-xl justify-self-center">
                <input name="search" type="text" onChange={(e) => setInput(e.target.value)} placeholder="search..." className="focus:outline-none border-none w-[300px] bg-transparent text-[1rem]" />
            </div>

            <div className="mt-3 ">
                <button onClick={() => setHidden(!hidden)} className="block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600">
                    <FontAwesomeIcon icon={faUser} />
                </button>

                <div className={`absolute xl:right-28 right-0 hover:cursor-pointer text-gray-600 bg-white w-48 mt-2 shadow-xl rounded-lg py-2 text-sm ${hidden ? "hidden" : ""}`}>
                    <p className="block px-4 py-2  hover:bg-orange-400 hover:text-white">{user}</p>
                    <hr></hr>
                    <p onClick={() => handleSignout()} className="block px-4 py-2 hover:bg-orange-400 hover:text-white">Sign out</p>
                </div>
            </div>
        </div>
    )
} 