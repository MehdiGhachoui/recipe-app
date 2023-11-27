package recipe

import supa "github.com/nedpals/supabase-go"

type Service struct {
	base *supa.Client
}

func NewService(s *supa.Client) *Service {
	return &Service{
		base: s,
	}
}

func (s *Service) List() {

}
func (s *Service) Search() {

}
func (s *Service) Create() {

}
func (s *Service) Update() {

}
func (s *Service) Delete() {

}
