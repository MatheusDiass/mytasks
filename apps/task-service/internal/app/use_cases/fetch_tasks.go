package usecases

import (
	"task-service/internal/domain/entities"
	"task-service/internal/domain/interfaces"
)

type FetchTasksUseCase struct {
	fetchTasksRepo interfaces.FetchTasksRepo
}

func NewFetchTasksUseCase(fetchTasksRepo interfaces.FetchTasksRepo) *FetchTasksUseCase {
return &FetchTasksUseCase{fetchTasksRepo: fetchTasksRepo}
}

func (uc FetchTasksUseCase) Execute() ([]entities.Task, error) {
	tasks, err := uc.fetchTasksRepo.Execute()

	if err != nil {
		return nil, err
	}

	return tasks, nil
}