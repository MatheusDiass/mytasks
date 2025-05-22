package interfaces

import "task-service/internal/domain/entities"

type FetchTasksRepo interface {
	Execute() ([]entities.Task, error)
}