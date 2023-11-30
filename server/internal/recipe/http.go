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
		r.Post("/create", repo.Create)
		r.Put("/update/{id}", repo.Update)
		r.Delete("/delete/{id}", repo.Delete)
	})
}
