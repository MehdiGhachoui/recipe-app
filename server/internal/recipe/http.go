package recipe

import (
	"github.com/go-chi/chi/v5"
	supa "github.com/nedpals/supabase-go"
)

func NewHTTP(r *chi.Mux, s *supa.Client) {

	repo := NewRepo(s)

	r.Route("/recipe", func(r chi.Router) {
		r.Get("/", repo.List)
		r.Get("/{id}", repo.Search)
		r.Get("/create", repo.Create)
		r.Get("/update/{id}", repo.Update)
		r.Get("/delete/{id}", repo.Delete)
	})
}
