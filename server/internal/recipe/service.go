package recipe

import (
	supa "github.com/nedpals/supabase-go"
)

type Service struct {
	base *supa.Client
}

func NewService(s *supa.Client) *Service {
	return &Service{
		base: s,
	}
}

func (s *Service) List() ([]Recipe, error) {
	data := []Recipe{}

	if err := s.base.DB.From("recipe").Select("*").Execute(&data); err != nil {
		return []Recipe{}, err
	}

	return data, nil
}

func (s *Service) Search(id string) (Recipe, error) {
	data := Recipe{}

	if err := s.base.DB.From("recipe").Select("*").Single().Eq("id", id).Execute(&data); err != nil {
		return Recipe{}, err
	}

	return data, nil
}

func (s *Service) Create() {

}

func (s *Service) Update() {

}

func (s *Service) Delete() {

}
