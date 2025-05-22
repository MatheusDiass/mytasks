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
	FetchTasksController *controllers.FetchTasksController
}

func NewContainer(db *sqlx.DB, queue interfaces.QueuePublish) *Container {
	// Repositories
	createTaskRepo := repos.NewCreateTaskRepo(db)
	fetchTasksRepo := repos.NewFetchTasksRepo(db)

	// Use cases
	createTaskUseCase := usecases.NewCreateTaskUseCase(createTaskRepo, queue)
	fetchTasksUseCase := usecases.NewFetchTasksUseCase(fetchTasksRepo)

	// Controllers
	createTaskController := controllers.NewCreateTaskController(*createTaskUseCase)
	fetchTasksController := controllers.NewFetchTasksController(*fetchTasksUseCase)

	return &Container{
		CreateTaskController: createTaskController,
		FetchTasksController: fetchTasksController,
	}
}
