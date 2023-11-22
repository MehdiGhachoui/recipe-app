package recipe

type Repository struct {
	service *Service
}

func RecipeRepository() *Repository {
	return &Repository{
		service: RecipeService(),
	}
}
