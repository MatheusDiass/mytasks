package main

import (
	"fmt"
	"log"
	"notification-service/config"
	"notification-service/internal/consumers"
	"notification-service/internal/di"
	"notification-service/internal/infra"
)

func main() {
	appConfig := config.LoadEnv()
	emailService := infra.NewEmailService(appConfig.EmailHost, appConfig.EmailPort, appConfig.EmailUser, appConfig.EmailPass, appConfig.EmailFrom)
	container := di.NewContainer(emailService)

	queueAdapter := infra.NewQueue(appConfig.QueueUrl)
	err := queueAdapter.SetupQueue("notification_account_confirmation",
		"notification.exchange",
		"notification.user.created")

	if err != nil {
		log.Fatalf("Failed to setup to queue: %v", err)
	}

	// queueAdapter.Consumer("notification_task_creation", consumers.SendTaskCreatedEmailConsumer(container))
	queueAdapter.Consumer("notification_account_confirmation", consumers.SendAccountConfirmationEmailConsumer(container))

	fmt.Printf("🚀 Notification service is running!\n")
	select {}
}
