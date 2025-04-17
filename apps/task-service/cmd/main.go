package main

import (
	"fmt"
	"log"
	"task-service/config"
	adapter "task-service/internal/adapters"
	"task-service/internal/di"
	"task-service/internal/routes"
)

func main() {
	appConfig := config.LoadEnv()

	dsn := fmt.Sprintf(
		"postgres://%s:%s@%s:5432/%s?sslmode=disable",
		appConfig.DBUser, appConfig.DBPassword, appConfig.DBServer, appConfig.DBName,
	)

	db, err := adapter.ConnectDatabase(dsn)

	if err != nil {
		log.Fatalf("Failed to connect to DB: %v", err)
	}

	// Dependency Injection
	container := di.NewContainer(db)

	router := adapter.SetupHttpServer()
	routes.RegisterRoutes(router, container)
	router.Run(":" + appConfig.Port)
}
