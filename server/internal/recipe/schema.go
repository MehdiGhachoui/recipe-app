package recipe

import "time"

type Recipe struct {
	ID          int8      `json:"id"`
	Name        string    `json:"name"`
	Picture     string    `json:"picture"`
	Ingredients []string  `json:"ingredients"`
	Note        string    `json:"note"`
	Calories    int       `json:"calories"`
	Protein     int       `json:"protein"`
	Time        int       `json:"time"`
	MealType    string    `json:"meal_type"`
	Price       float64   `json:"price"`
	CreatedAt   time.Time `json:"created_at"`
}
