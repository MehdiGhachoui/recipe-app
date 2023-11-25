package recipe

import supa "github.com/nedpals/supabase-go"

type Service struct {
	base *supa.Client
}

func RecipeService(s *supa.Client) *Service {
	return &Service{
		base: s,
	}
}
