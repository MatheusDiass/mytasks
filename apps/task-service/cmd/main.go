package main

import (
	"fmt"
	"log"
	"task-service/config"
	adapter "task-service/internal/adapters"
	"task-service/internal/adapters/db"
	"task-service/internal/di"
	"task-service/internal/routes"
)

func main() {
	appConfig := config.LoadEnv()

	dsn := fmt.Sprintf(
		"postgres://%s:%s@%s:5432/%s?sslmode=disable",
		appConfig.DBUser, appConfig.DBPassword, appConfig.DBServer, appConfig.DBName,
	)

	db, err := db.ConnectDatabase(dsn)

	if err != nil {
		log.Fatalf("Failed to connect to DB: %v", err)
	}

	queue := adapter.NewQueue(appConfig.QueueUrl)

	// Dependency Injection
	container := di.NewContainer(db, queue)

	router := adapter.SetupHttpServer()
	routes.RegisterRoutes(router, container)
	router.Run(":" + appConfig.Port)
}
