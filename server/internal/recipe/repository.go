package recipe

type Repository struct {
	service *Service
}

func NewRepository() *Repository {
	return &Repository{
		service: NewService(),
	}
}
