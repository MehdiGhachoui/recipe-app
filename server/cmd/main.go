package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
	"github.com/mehdighachoui/recipe-app/internal/recipe"
	"github.com/mehdighachoui/recipe-app/utils"
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
	r.Use(cors.Handler(cors.Options{
		AllowedOrigins:   []string{config.OriginURL},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Content-Type", "Access-Control-Allow-Origin"},
		ExposedHeaders:   []string{"Link"},
		AllowCredentials: true,
		MaxAge:           300,
	}))

	r.Use(middleware.RequestID)
	r.Use(middleware.RealIP)
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)

	//Health Checker
	r.Get("/healthcheck", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
	})

	//Domains
	recipe.NewHTTP(r, supabase)

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
