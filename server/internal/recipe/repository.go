package recipe

import supa "github.com/nedpals/supabase-go"

type Repository struct {
	service *Service
}

func RecipeRepository(s *supa.Client) *Repository {
	return &Repository{
		service: RecipeService(s),
	}
}
