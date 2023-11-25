package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/mehdighachoui/recipe-app/cmd/utils"
	"github.com/mehdighachoui/recipe-app/internal/recipe"
	supa "github.com/nedpals/supabase-go"
)

func main() {
	//Loading .env File
	config, err := utils.LoadConfig(".")
	if err != nil {
		log.Fatal("cannot load config:", err)
	}

	//DB Connection - SUPABASE
	supabase := supa.CreateClient(config.SupabaseURL, config.SupabaseKEY)

	//INIT Chai
	r := chi.NewRouter()
	r.Use(middleware.RequestID)
	r.Use(middleware.RealIP)
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)
	//Health-Check
	r.Get("/healthcheck", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
	})
	//Recipe Domain
	recipe.NewRoute(r, supabase)

	// Server Config
	srv := &http.Server{
		Handler: r,
		Addr:    config.ServerAddress,
	}
	fmt.Println("Server Starting on port :8080...")
	if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
		fmt.Println("Server startup failure...")
	}
}
