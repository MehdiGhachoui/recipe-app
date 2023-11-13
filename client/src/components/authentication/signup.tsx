type SignupProps = {
    active: boolean
}
export default function Signup({ active }: SignupProps) {

    return (
        <div className={`absolute top-0 h-full  transition-all  left-0 w-6/12 duration-[600ms] ${active ? "translate-x-full opacity-100 z-[5]  bg-white" : "z-[1] opacity-0  "}`}>
            <form className="form">
                <h1 className="h1">Create Account</h1>

                <input type="text" name="name" placeholder="Name" className="input" />
                <input type="email" name="email" placeholder="Email" className="input" />
                <input type="password" name="password" placeholder="Password" className="input" />
                <input type="password" name="confirm_password" placeholder="Password" className="input" />

                <button className="button">Sign Up</button>
            </form>

        </div>
    )
}