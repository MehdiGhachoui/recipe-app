import { IRecipe } from "../../types/recipe"

type InfoProps = {
    recipe: IRecipe,
    setShowModal: (type: boolean) => void
}

export default function Info({ recipe, setShowModal }: InfoProps) {

    return (
        <div className="fixed z-20 inline-flex items-center mx-auto inset-0  bg-black bg-opacity-30 max-w-full ">
            <div className="container bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-xl shadow-xl mx-auto max-w-4xl ">
                <button className="inline-flex items-center rounded-full ml-[880px]  -mt-4   w-9 h-9 hover:cursor-pointer bg-red-500 hover:bg-red-600 focus:outline-none shadow-lg" onClick={() => setShowModal(false)}>
                    <span className='text-[22px] text-center text-white ml-2 '>&#10007;</span>
                </button>

                <div className="p-8 grid grid-cols-3 gap-2 -mt-8 ">
                    <div className="col-span-1 ">
                        <div className="relative group overflow-hidden">
                            <img className="rounded-xl shadow-lg max-h-[272px] max-w-[272px] h-full w-full"
                                src={recipe.picture}
                                alt="/"
                            />
                            <p className={`absolute top-2 right-2 font-serif text-sm rounded-md hover:cursor-pointer text-center w-14 max-w-14 p-1 ${recipe.time >= 30 ? "bg-red-500" : recipe.time >= 15 ? "bg-yellow-500" : "bg-green-500"}`} ><span className='text-white text-xs'>{recipe.time} min</span>  </p>
                        </div>

                        <div className="grid grid-row-1 gap-4 shadow-lg text-xs bg-gray-100 px-2 py-3 mt-2 col-span-3 rounded-xl">
                            <div className="flex justify-between">
                                <p className='font-serif text-sm'>Calories: <span className='text-lime-500'>{recipe.calories}</span></p>
                                <p className='font-serif text-sm'>Protein(g): <span className='text-lime-500'>{recipe.protein}</span></p>
                            </div>

                            <p className=' font-serif text-sm'>Price: <span className='text-base font-bold font-mono'>${recipe.price}</span></p>
                        </div>

                    </div>

                    <div className="bg-gray-50 py-2 px-3 shadow-lg col-span-2 rounded-xl max-h-[365px] overscroll-auto overflow-auto">
                        <h4 className='text-xl font-serif underline font-semibold'>{recipe.name} :</h4>
                        <p className='p-2 font-serif'>

                            <h1 className="text-lg underline"> Ingredients :</h1>

                            <ul className="max-w-md text-sm px-2 mt-2 space-y-1 text-gray-700 list-disc list-inside ">
                                {
                                    recipe.ingredients.map(i => {
                                        return (
                                            <li>{i}</li>
                                        )
                                    })
                                }
                            </ul>

                            {
                                recipe.note && <>
                                    <h1 className="text-lg underline pt-4"> Notes :</h1>
                                    <p className="text-sm px-2 mt-2">
                                        {recipe.note}
                                    </p>
                                </>
                            }
                        </p>

                    </div>

                </div>

            </div>

        </div >
    )

}