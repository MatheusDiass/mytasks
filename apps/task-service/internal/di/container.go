package di

import (
	"task-service/internal/controllers"
	"task-service/internal/infra"
	usecases "task-service/internal/use_cases"

	"github.com/jmoiron/sqlx"
)

type Container struct {
	CreateTaskController *controllers.CreateTaskController
}

func NewContainer(db *sqlx.DB) *Container {
	// Repositories
	createTaskRepository := infra.NewCreateTaskRepository(db)

	// Use cases
	createTaskUseCase := usecases.NewCreateTaskUseCase(*createTaskRepository)

	// Controllers
	createTaskController := controllers.NewCreateTaskController(*createTaskUseCase)

	return &Container{
		CreateTaskController: createTaskController,
	}
}
