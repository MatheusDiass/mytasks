package di

import (
	"notification-service/internal/domain"
	usecases "notification-service/internal/use_cases"
)

type Container struct {
	SendTaskCreatedEmailUseCase *usecases.SendTaskCreatedEmailUseCase
}

func NewContainer(emailService domain.EmailService) *Container {
	// Use cases
	sendTaskCreatedEmailUseCase := usecases.NewSendTaskCreatedEmailUseCase(emailService)

	return &Container{
		sendTaskCreatedEmailUseCase,
	}
}
