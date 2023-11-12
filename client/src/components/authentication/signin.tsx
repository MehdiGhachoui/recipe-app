type SigninProps = {
    active: boolean
}
export default function Signin({ active }: SigninProps) {

    return (
        <div className={`absolute top-0 h-full  transition-all ease-in-out left-0 w-6/12 z-1 ${active ? "translate-x-full opacity-0 duration-500 " : "opacity-100 duration-1000 bg-white"}`}>
            <form className="form">
                <h1 className="h1">Sign In</h1>

                <input type="email" name="email" placeholder="Email" className="input" />
                <input type="password" name="password" placeholder="Password" className="input" />

                <button className="button">Sign In</button>
            </form>
        </div>
    )
}