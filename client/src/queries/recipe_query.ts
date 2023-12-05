import { useQuery } from "react-query";
import { GetRecipeResponse } from "../types/recipe";
import { getRecipes } from "./recipe_http";


export const useRecipeQuery = () =>
    useQuery<GetRecipeResponse>(['getRecipes'], async () => {
        const res = await getRecipes();
        return res;
    });