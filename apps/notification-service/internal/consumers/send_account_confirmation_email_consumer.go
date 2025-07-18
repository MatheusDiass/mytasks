package consumers

import (
	"encoding/json"
	"log"
	usecases "notification-service/internal/app/use_cases"
	"notification-service/internal/di"
)

func SendAccountConfirmationEmailConsumer(container *di.Container) func([]byte) {
	return func(data []byte) {

		var msg usecases.SendAccountConfirmationEmailInput
		if err := json.Unmarshal(data, &msg); err != nil {
			log.Printf("Failed to unmarshal message: %v", err)
			return
		}

		if err := container.SendAccountConfirmationEmailUseCase.Execute(msg); err != nil {
			log.Printf("Error executing use case: %v", err)
		}
	}
}
