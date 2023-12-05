import { useState } from "react";
import Signin from "../../components/authentication/signin";
import Signup from "../../components/authentication/signup";

export default function Auth() {
    const [active, setActive] = useState<boolean>(false)
    return (
        <div className=" bg-[url('https://assets3.thrillist.com/v1/image/3130793/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70')] bg-cover bg-center flex items-center justify-center flex-col h-[100vh]">
            <div className="  bg-white rounded-[30px] relative overflow-hidden w-[768px] max-w-full min-h-[480px] shadow-2xl">
                <Signin active={active} />
                <Signup active={active} />

                <div className={`absolute top-0 left-2/4 w-[50%] h-full overflow-hidden transition-all duration-[500ms] ease-in-out z-[1000] ${active ? "-translate-x-full rounded-r-[100px]" : "rounded-l-[100px]"}`}>
                    <div className={`relative h-full bg-gradient-to-r from-orange-400 to-orange-500 text-white  -left-full w-[200%] transition-all duration-700 ease-in-out ${active ? "translate-x-2/4" : "translate-x-0"}`}>
                        <div className={`absolute w-6/12 h-full flex items-center justify-center flex-col space-y-6 py-0 px-[30px] text-center top-0 transition-all duration-700 ease-in-out ${active ? "translate-x-0" : "-translate-x-[200%]"}`}>
                            <h1 className="h1" >Welcome to Foodie!</h1>
                            <p >Enter your personal details to use all of site features</p>
                            <button onClick={() => setActive(false)} className="button bg-transparent border-white" id="login">Sign In</button>
                        </div>
                        <div className={`absolute w-6/12 h-full flex items-center justify-center flex-col space-y-6 py-0 px-[30px] text-center top-0 transition-all duration-700 ease-in-out right-0 ${active ? "translate-x-[200%]" : "translate-x-0"}`}>
                            <h1 className="h1">Hello, Friend!</h1>
                            <p>Register with your personal details to use all of site features</p>
                            <button onClick={() => setActive(true)} className="button bg-transparent border-white" id="register">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}