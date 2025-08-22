package main

import (
	"fmt"
	"log"
	"user-service/internal/adapters"
	"user-service/internal/adapters/db"
	"user-service/internal/config"
	"user-service/internal/di"
	"user-service/internal/routes"
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

	// Dependency Injection
	container := di.NewContainer(db)

	router := adapters.SetupHttpServer()
	routes.RegisterRoutes(router, container)
	router.Run(":" + appConfig.Port)
}
