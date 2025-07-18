package di

import (
	usecases "notification-service/internal/app/use_cases"
	"notification-service/internal/domain"
)

type Container struct {
	SendTaskCreatedEmailUseCase         *usecases.SendTaskCreatedEmailUseCase
	SendAccountConfirmationEmailUseCase *usecases.SendAccountConfirmationEmailUseCase
}

func NewContainer(emailService domain.EmailService) *Container {
	// Use cases
	sendTaskCreatedEmailUseCase := usecases.NewSendTaskCreatedEmailUseCase(emailService)
	sendUserAccountConfirmationEmailUseCase := usecases.NewSendAccountConfirmationEmailUseCase(emailService)

	return &Container{
		sendTaskCreatedEmailUseCase,
		sendUserAccountConfirmationEmailUseCase,
	}
}
