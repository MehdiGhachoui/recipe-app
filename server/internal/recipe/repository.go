package recipe

import (
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/render"
	"github.com/mehdighachoui/recipe-app/response"
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
	result, err := repo.service.List()

	if err != nil {
		render.Render(w, r, response.ErrInvalidRequest(err, http.StatusBadRequest, "Unable To Fetch Data"))
		return
	}

	render.Status(r, http.StatusOK)
	render.Render(w, r, response.NewSuccessResponse(http.StatusOK, result))
}

func (repo *Repository) Search(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")

	result, err := repo.service.Search(id)

	if err != nil {
		render.Render(w, r, response.ErrInvalidRequest(err, http.StatusNotFound, "Unable To Fetch Data"))
		return
	}

	render.Status(r, http.StatusOK)
	render.Render(w, r, response.NewSuccessResponse(http.StatusOK, result))
}

func (repo *Repository) Create(w http.ResponseWriter, r *http.Request) {

}

func (repo *Repository) Update(w http.ResponseWriter, r *http.Request) {

}

func (repo *Repository) Delete(w http.ResponseWriter, r *http.Request) {

}
