
type HeaderProps = {
    setInput: (val: string) => void
}

export default function Header({ setInput }: HeaderProps) {

    return (
        <div className=" grid md:grid-cols-3 gap-3 grid-cols-1 border-b-solid border-b-[1px] border-b-orange-200 w-full min-h-[80px] mt-2 py-5">
            <h2 className="text-4xl text-orange-400 text-center md:text-left">Recipe</h2>

            <div className="max-w-[400px] m-auto w-full px-2 py-3 shadow-md rounded-xl justify-self-center">
                <input name="search" type="text" onChange={(e) => setInput(e.target.value)} placeholder="search..." className="focus:outline-none border-none w-[300px] bg-transparent text-[1rem]" />
            </div>
        </div>
    )
}