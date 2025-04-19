package queue

import (
	"encoding/json"
	"log"
	"notification-service/internal/di"
	usecases "notification-service/internal/use_cases"
)

type EmailType string

const (
	TaskCreatedEmail EmailType = "task_created"
)

type EmailMessage struct {
	Type EmailType       `json:"type"`
	Data json.RawMessage `json:"data"`
}

func NewEmailConsumerHandler(container *di.Container) func([]byte) {
	return func(data []byte) {
		var msg EmailMessage
		if err := json.Unmarshal(data, &msg); err != nil {
			log.Println("Error to parse message!")
			return
		}

		switch msg.Type {
		case TaskCreatedEmail:
			var input usecases.Input

			if err := json.Unmarshal(msg.Data, &input); err != nil {
				log.Println("Error to parse message!")
				return
			}

			container.SendTaskCreatedEmailUseCase.Execute(input)

		default:
			log.Println("Unknown message type!")
		}
	}
}
