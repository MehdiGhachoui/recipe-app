export interface IRecipe {
    id: number;
    name: string;
    picture: string;
    ingredients: string[];
    note: string;
    calories: number;
    time: number;
    meal: string;
    protein: number,
    price: number;
}