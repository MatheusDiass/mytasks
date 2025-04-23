package adapters

import (
	"gopkg.in/gomail.v2"
)

type EmailService struct {
	dialer *gomail.Dialer
	from   string
}

func NewEmailService(host string, port int, user, pass, from string) *EmailService {
	dialer := gomail.NewDialer(host, port, user, pass)

	return &EmailService{
		dialer,
		from,
	}
}

func (s *EmailService) Send(to, subject, html string) error {
	message := gomail.NewMessage()
	message.SetHeader("From", s.from)
	message.SetHeader("To", to)
	message.SetHeader("Subject", subject)
	message.SetBody("text/html", html)

	return s.dialer.DialAndSend(message)
}
