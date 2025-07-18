package usecases

import (
	"fmt"
	"notification-service/internal/domain"
)

type SendAccountConfirmationEmailInput struct {
	UserName         string `json:"userName"`
	UserEmail        string `json:"userEmail"`
	ConfirmationCode string `json:"confirmationCode"`
}

type SendAccountConfirmationEmailUseCase struct {
	emailService domain.EmailService
}

func NewSendAccountConfirmationEmailUseCase(emailService domain.EmailService) *SendAccountConfirmationEmailUseCase {
	return &SendAccountConfirmationEmailUseCase{emailService}
}

func (uc *SendAccountConfirmationEmailUseCase) Execute(input SendAccountConfirmationEmailInput) error {
	subject := "Account Confirmation"
	body := fmt.Sprintf(`
		<html>
			<body>
				<h2>Account Confirmation</h2>
				<p>Hello, %s!</p>
				<p>Use the following confirmation code to activate your account:</p>
				<h3>%s</h3>
				<p>If you did not request this, please ignore this email.</p>
				<p>Thank you,<br>The MyTasks Team</p>
			</body>
		</html>
	`, input.UserName, input.ConfirmationCode)

	return uc.emailService.Send(input.UserEmail, subject, body)
}
