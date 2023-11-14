import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type SignupProps = {
    active: boolean
}

const signupSchema = z.object(
    {
        name: z.string().min(5, { message: "Name is required" }),
        email: z.string().min(5, { message: "Email is required" }).email({ message: "Must be a valid email" }),
        password: z.string().min(8, { message: "Password is required" }),
        confirm_password: z.string().min(8, { message: "Confirm Password is required" })
    }
).refine((data) => data.password === data.confirm_password, {
    path: ["confirm_password"],
    message: "Password don't match"
})

type SignupSchema = z.infer<typeof signupSchema>

export default function Signup({ active }: SignupProps) {
    const { register, handleSubmit, formState: { errors } } = useForm<SignupSchema>({
        resolver: zodResolver(signupSchema)
    })

    const onSubmit: SubmitHandler<SignupSchema> = (data) => console.log(data)

    return (
        <div className={`absolute top-0 h-full  transition-all  left-0 w-6/12  ${active ? "translate-x-full opacity-100 z-[5] duration-[900ms] bg-white" : "z-[1] opacity-0  duration-[300ms]"}`}>
            <form className="form" noValidate onSubmit={handleSubmit(onSubmit)}>
                <h1 className="h1">Create Account</h1>

                <input {...register("name")} type="text" placeholder="Name" id="name" className={`input ${errors.name && "border-red-500"}`} />
                {errors.name && (<p className="text-xs italic text-left text-red-500">*{errors.name?.message}</p>)}

                <input {...register("email")} type="email" placeholder="Email" className={`input ${errors.email && "border-red-500"}`} />
                {errors.email && (<p className="text-xs italic text-left text-red-500">*{errors.email?.message}</p>)}

                <input {...register("password")} type="password" placeholder="Password" className={`input ${errors.password && "border-red-500"}`} />
                {errors.password && (<p className="text-xs italic text-left text-red-500">*{errors.password?.message}</p>)}

                <input {...register("confirm_password")} type="password" placeholder="Confirm Password" className={`input ${errors.confirm_password && "border-red-500"}`} />
                {errors.confirm_password && (<p className="text-xs italic text-left text-red-500">*{errors.confirm_password?.message}</p>)}

                <button className="button">Sign Up</button>
            </form>

        </div>
    )
}