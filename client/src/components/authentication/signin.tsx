import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/auth/AuthContext"
import { useContext } from "react"

type SigninProps = {
    active: boolean
}
export default function Signin({ active }: SigninProps) {
    let navigate = useNavigate()
    let { setUser } = useContext(AuthContext)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        //let formData = new FormData(event.currentTarget)
        // let userEmail = formData.get("email") as string

        setTimeout(() => {
            if (setUser) setUser("Mehdi");
            navigate("/", { replace: true })
        }, 100)
    }
    return (
        <div className={`absolute top-0 h-full  transition-all ease-in-out left-0 w-6/12 z-[2] duration-[600ms] ${active ? "translate-x-full" : ""}`}>
            <form className="form" onSubmit={handleSubmit}>
                <h1 className="h1">Sign In</h1>

                <input type="email" name="email" placeholder="Email" className="input" />
                <input type="password" name="password" placeholder="Password" className="input" />

                <button className="button">Sign In</button>
            </form>
        </div>
    )
}