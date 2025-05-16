package di

import (
	"task-service/internal/adapters/db/repos"
	usecases "task-service/internal/app/use_cases"
	"task-service/internal/controllers"
	"task-service/internal/domain/interfaces"

	"github.com/jmoiron/sqlx"
)

type Container struct {
	CreateTaskController *controllers.CreateTaskController
}

func NewContainer(db *sqlx.DB, queue interfaces.QueuePublish) *Container {
	// Repositories
	createTaskRepo := repos.NewCreateTaskRepo(db)

	// Use cases
	createTaskUseCase := usecases.NewCreateTaskUseCase(createTaskRepo, queue)

	// Controllers
	createTaskController := controllers.NewCreateTaskController(*createTaskUseCase)

	return &Container{
		CreateTaskController: createTaskController,
	}
}
