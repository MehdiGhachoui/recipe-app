package recipe

import (
	"net/http"

	"github.com/go-chi/chi/v5"
	supa "github.com/nedpals/supabase-go"
)

func NewRoute(r *chi.Mux, s *supa.Client) {
	// repo := NewRepository(s)
	r.Route("/recipe", func(r chi.Router) {
		r.Get("/", func(w http.ResponseWriter, r *http.Request) {
			w.WriteHeader(http.StatusOK)
		})
	})
}
