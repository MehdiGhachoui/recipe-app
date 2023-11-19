package recipe

import (
	"net/http"

	"github.com/go-chi/chi/v5"
)

func NewRoute(r *chi.Mux) {
	// repo := NewRepository()
	r.Route("/recipe", func(r chi.Router) {
		r.Get("/", func(w http.ResponseWriter, r *http.Request) {
			w.WriteHeader(http.StatusOK)
		})
	})
}
