export interface GetRecipeResponse {
    status: {
        AppStatusCode: number,
        Message: string
    };
    data: IRecipe[];
}

export interface IRecipe {
    id: number;
    name: string;
    picture: string;
    ingredients: string[];
    note: string;
    calories: number;
    time: number;
    meal_type: string;
    protein: number,
    price: number;
}