package di

import (
	"user-service/internal/adapters/db/repos"
	usecases "user-service/internal/app"
	"user-service/internal/controllers"

	"github.com/jmoiron/sqlx"
)

type Container struct {
	CreateUserController *controllers.CreateUserController
	GetUsersController   *controllers.GetUsersController
}

func NewContainer(db *sqlx.DB) *Container {
	// Repositories
	createUserRepo := repos.NewCreateUserRepo(db)
	getUsersRepo := repos.NewGetUsersRepo(db)

	// Use cases
	createUserUseCase := usecases.NewCreateUserUseCase(createUserRepo)
	getUsersUseCase := usecases.NewGetUsersUseCase(getUsersRepo)

	// Controllers
	createUserController := controllers.NewCreateUserController(*createUserUseCase)
	getUsersController := controllers.NewGetUsersController(*getUsersUseCase)

	return &Container{
		CreateUserController: createUserController,
		GetUsersController:   getUsersController,
	}
}
