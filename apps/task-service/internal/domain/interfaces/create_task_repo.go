package interfaces

import "task-service/internal/domain/entities"

type CreateTaskRepo interface {
	Execute(task *entities.Task) (*entities.Task, error)
}
