package main

import (
	"fmt"
	"notification-service/config"
	"notification-service/internal/adapters"
	"notification-service/internal/adapters/queue"
	"notification-service/internal/di"
)

func main() {
	appConfig := config.LoadEnv()
	emailService := adapters.NewEmailService(appConfig.EmailHost, appConfig.EmailPort, appConfig.EmailUser, appConfig.EmailPass, appConfig.EmailFrom)
	container := di.NewContainer(emailService)

	fmt.Println(appConfig.QueueUrl)
	queueAdapter := queue.NewQueue(appConfig.QueueUrl)
	queueAdapter.Consumer("email_notification", queue.NewEmailConsumerHandler(container))

	select {}
}
