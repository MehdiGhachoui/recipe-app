import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../context/auth/AuthContext"

type SigninProps = {
    active: boolean
}
const signinSchema = z.object(
    {
        email: z.string().min(5, { message: "Email is required" }).email({ message: "Must be a valid email" }),
        password: z.string().min(8, { message: "Password is required" }),
    }
)
type SigninSchema = z.infer<typeof signinSchema>

export default function Signin({ active }: SigninProps) {
    let navigate = useNavigate()
    let { setUser } = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors } } = useForm<SigninSchema>({
        resolver: zodResolver(signinSchema)
    })

    const onSubmit: SubmitHandler<SigninSchema> = (data) => {
        setTimeout(() => {
            if (setUser) setUser("Mehdi");
            navigate("/", { replace: true })
        }, 100)
    }

    return (
        <div className={`absolute top-0 h-full  transition-all ease-in-out left-0 w-6/12 z-[2]  ${active ? "translate-x-full duration-[300ms] opacity-0" : "opacity-100 duration-[700ms]"}`}>
            <form className="form" noValidate onSubmit={handleSubmit(onSubmit)}>
                <h1 className="h1">Sign In</h1>

                <input {...register("email")} type="email" placeholder="Email" className={`input ${errors.email && "border-red-500"}`} />
                {errors.email && (<p className="text-xs italic text-left text-red-500">*{errors.email?.message}</p>)}

                <input {...register("password")} type="password" placeholder="Password" className={`input ${errors.password && "border-red-500"}`} />
                {errors.password && (<p className="text-xs italic text-left text-red-500">*{errors.password?.message}</p>)}

                <button className="button">Sign In</button>
            </form>
        </div>
    )
}