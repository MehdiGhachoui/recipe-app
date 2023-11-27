package recipe

import (
	"net/http"

	supa "github.com/nedpals/supabase-go"
)

type Repository struct {
	service *Service
}

func NewRepo(s *supa.Client) *Repository {
	return &Repository{
		service: NewService(s),
	}
}

func (repo *Repository) List(w http.ResponseWriter, r *http.Request) {

}
func (repo *Repository) Search(w http.ResponseWriter, r *http.Request) {

}
func (repo *Repository) Create(w http.ResponseWriter, r *http.Request) {

}
func (repo *Repository) Update(w http.ResponseWriter, r *http.Request) {

}
func (repo *Repository) Delete(w http.ResponseWriter, r *http.Request) {

}
