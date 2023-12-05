import { api } from "../lib/api";
import { type GetRecipeResponse } from "../types/recipe";

export const getRecipes = async (): Promise<GetRecipeResponse> => {
    const { data } = await api.get<GetRecipeResponse>("/recipe");
    return data;
};