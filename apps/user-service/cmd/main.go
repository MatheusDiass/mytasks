package main

import (
	"encoding/json"
	"fmt"
	"log"
	usecases "user-service/internal/app"
	"user-service/internal/config"
	queue "user-service/internal/infra"
	"user-service/internal/infra/db"
	"user-service/internal/main/factories"
)

func main() {
	appConfig := config.LoadEnv()

	dsn := fmt.Sprintf(
		"postgres://%s:%s@%s:%s/%s?sslmode=disable",
		appConfig.DBUser, appConfig.DBPassword, appConfig.DBServer, appConfig.DBPort, appConfig.DBName,
	)

	db, err := db.ConnectDatabase(dsn)
	if err != nil {
		log.Fatalf("Failed to connect to DB: %v", err)
	}

	queueAdapter := queue.NewQueue(appConfig.QueueUrl)
	err = queueAdapter.SetupQueue("user_account_creation",
		"user.exchange",
		"user.created")
	if err != nil {
		log.Fatalf("Failed to connect to DB: %v", err)
	}

	createUserUseCase := factories.NewCreateUserFactory(db)
	queueAdapter.Consumer("user_account_creation", func(msg []byte) {
		var input usecases.CreateUserInput

		if err := json.Unmarshal(msg, &input); err != nil {
			log.Printf("Failed to unmarshal message: %v", err)
			return
		}

		if err := createUserUseCase.Execute(input); err != nil {
			log.Printf("Error executing use case: %v", err)
		}
	})

	fmt.Printf("🚀 User service is running!\n")
	select {}
}
