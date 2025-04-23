package usecases

import (
	"task-service/internal/domain"
	"task-service/internal/infra"
)

type Input struct {
	Title       string
	Description string
}

type CreateTaskUseCase struct {
	repo infra.CreateTaskRepository
}

func NewCreateTaskUseCase(repo infra.CreateTaskRepository) *CreateTaskUseCase {
	return &CreateTaskUseCase{repo: repo}
}

func (uc CreateTaskUseCase) Execute(input Input) error {
	task := domain.Task{
		Title:       input.Title,
		Description: input.Description,
	}

	return uc.repo.Create(task)
}
