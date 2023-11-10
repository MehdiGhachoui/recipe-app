import { useEffect, useState } from "react";
import Content from "../../components/home/content";
import Header from "../../components/home/header";
import Menu from "../../components/home/menu";
import rescipes from "../../data/content.json"
import { useDebounce } from "use-debounce"
import { IRecipe } from "../../types/recipe";

export default function Home() {
    const [searchValue, setSearchValue] = useState<string>()
    const [mealType, setMealType] = useState<string>("")
    const [foundRecipe, setFoundRecipe] = useState<IRecipe[]>(rescipes)
    const [debouncedValue] = useDebounce(searchValue, 300)

    useEffect(() => {
        if (debouncedValue !== undefined)
            setFoundRecipe(rescipes.filter((x) => x.name.toLowerCase().includes(debouncedValue.toLowerCase())))
    }, [debouncedValue])

    useEffect(() => {
        if (mealType == "") setFoundRecipe(rescipes)
        else setFoundRecipe(rescipes.filter((x) => x.meal == mealType))
    }, [mealType])

    return <div>
        <Header setInput={setSearchValue} />
        <Menu setType={setMealType} type={mealType} />
        <div className="mt-7 grid grid-cols-4 z-10 gap-4">
            {
                foundRecipe.map(r => <Content recipe={r} />)
            }
        </div>
    </div>
}