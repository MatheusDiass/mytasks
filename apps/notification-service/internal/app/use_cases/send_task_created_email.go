package usecases

import (
	"fmt"
	"notification-service/internal/domain"
	"time"
)

type SendTaskCreatedEmailInput struct {
	To      string    `json:"to"`
	Title   string    `json:"title"`
	DueDate time.Time `json:"dueDate"`
}

type SendTaskCreatedEmailUseCase struct {
	emailService domain.EmailService
}

func NewSendTaskCreatedEmailUseCase(emailService domain.EmailService) *SendTaskCreatedEmailUseCase {
	return &SendTaskCreatedEmailUseCase{emailService}
}

func (uc *SendTaskCreatedEmailUseCase) Execute(input SendTaskCreatedEmailInput) error {
	subject := "Task Created"
	body := fmt.Sprintf(`
		<html>
			<body>
				<h2>Task Created</h2>
				<p>Title: %s</p>
				<p>Due date: %s</p>
			</body>
		</html>
	`, input.Title, input.DueDate.Format("02/01/2006 15:04:05"))

	return uc.emailService.Send(input.To, subject, body)
}
