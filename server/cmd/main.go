package main

import (
	"fmt"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/mehdighachoui/recipe-app/internal/recipe"
)

func main() {
	r := chi.NewRouter()

	r.Use(middleware.RequestID)
	r.Use(middleware.RealIP)
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)

	r.Get("/healthcheck", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
	})

	//Recipe Domain
	recipe.NewRoute(r)

	srv := &http.Server{
		Handler: r,
		Addr:    "127.0.0.1:8000",
	}

	fmt.Println("Server Starting on port :8000...")
	if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
		fmt.Println("Server startup failure...")
	}
}
