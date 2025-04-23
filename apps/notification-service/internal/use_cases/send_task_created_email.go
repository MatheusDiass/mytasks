package usecases

import (
	"fmt"
	"notification-service/internal/domain"
)

type Input struct {
	To    string `json:"to"`
	Title string `json:"title"`
	EndAt string `json:"endAt"`
}

type SendTaskCreatedEmailUseCase struct {
	emailService domain.EmailService
}

func NewSendTaskCreatedEmailUseCase(emailService domain.EmailService) *SendTaskCreatedEmailUseCase {
	return &SendTaskCreatedEmailUseCase{emailService}
}

func (uc *SendTaskCreatedEmailUseCase) Execute(input Input) error {
	subject := "Task Created"
	body := fmt.Sprintf(`
		<html>
			<body>
				<h2>Task Created</h2>
				<p>Title: %s</p>
				<p>End at: %s</p>
			</body>
		</html>
	`, input.Title, input.EndAt)

	return uc.emailService.Send(input.To, subject, body)
}
