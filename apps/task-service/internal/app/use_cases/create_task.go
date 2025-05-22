package usecases

import (
	"encoding/json"
	"task-service/internal/app/dtos"
	"task-service/internal/domain/entities"
	"task-service/internal/domain/interfaces"
	"time"
)

type CreateTaskInput struct {
	Title       string
	Description string
	DueDate     time.Time
}

type CreateTaskUseCase struct {
	createTaskRepo interfaces.CreateTaskRepo
	queue          interfaces.QueuePublish
}

func NewCreateTaskUseCase(createTaskRepo interfaces.CreateTaskRepo, queue interfaces.QueuePublish) *CreateTaskUseCase {
	return &CreateTaskUseCase{createTaskRepo: createTaskRepo, queue: queue}
}

func (uc CreateTaskUseCase) Execute(input CreateTaskInput) error {
	task, err := entities.NewTask(input.Title, input.Description, input.DueDate)

	if err != nil {
		return err
	}

	taskCreated, err := uc.createTaskRepo.Execute(task)

	if err != nil {
		return err
	}

	taskCreatedMessage := dtos.TaskCreatedMessage{
		Type: "task_created",
		Data: dtos.TaskMessage{
			To:      "dias.math0@gmail.com",
			Title:   taskCreated.Title,
			DueDate: task.DueDate.Format(time.RFC3339),
		},
	}

	serializedTask, err := json.Marshal(taskCreatedMessage)

	if err != nil {
		return err
	}

	err = uc.queue.Publish("email_notification", serializedTask)

	return err
}
