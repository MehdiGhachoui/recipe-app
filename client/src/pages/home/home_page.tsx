import { useEffect, useState } from "react";
import Content from "../../components/home/content";
import Header from "../../components/home/header";
import Menu from "../../components/home/menu";

import { IRecipe } from "../../types/recipe";
import { useRecipeQuery } from "../../queries/recipe_query";
import useDebounce from "../../hooks/useDebounce";

export default function Home() {
    const { isLoading, data: recipes } = useRecipeQuery()

    const [searchValue, setSearchValue] = useState<string>()
    const [mealType, setMealType] = useState<string>("")
    const [foundRecipe, setFoundRecipe] = useState<IRecipe[] | undefined>()
    const debouncedValue = useDebounce(searchValue, 300)

    useEffect(() => {
        if (debouncedValue !== undefined)
            setFoundRecipe(recipes?.data.filter((x) => x.name.toLowerCase().includes(debouncedValue.toLowerCase())))
    }, [debouncedValue])

    useEffect(() => {
        if (mealType === "") setFoundRecipe(recipes?.data)
        else setFoundRecipe(recipes?.data.filter((x) => x.meal_type === mealType))
    }, [mealType])

    useEffect(() => {
        setFoundRecipe(recipes?.data)
    }, [recipes])

    return (
        <main className="max-w-[1100px] m-auto px-0 py-2">
            <Header setInput={setSearchValue} />
            <Menu setType={setMealType} type={mealType} />
            <div className="mt-7 grid grid-cols-4 z-10 gap-4">
                {
                    isLoading ? <div>....Loading</div> : foundRecipe?.map(i => <Content recipe={i} />)
                }
            </div>
        </main>
    )
}