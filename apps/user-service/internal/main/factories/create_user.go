package factories

import (
	usecases "user-service/internal/app"
	"user-service/internal/infra/db/repos"

	"github.com/jmoiron/sqlx"
)

func NewCreateUserFactory(db *sqlx.DB) *usecases.CreateUserUseCase {
	createUserRepo := repos.NewCreateUserRepo(db)
	return usecases.NewCreateUserUseCase(createUserRepo)
}
