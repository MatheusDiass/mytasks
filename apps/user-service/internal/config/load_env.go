package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

type AppConfig struct {
	QueueUrl   string
	DBServer   string
	DBPort     string
	DBName     string
	DBUser     string
	DBPassword string
}

func LoadEnv() *AppConfig {
	err := godotenv.Load()

	if err != nil {
		log.Fatal("Error loading .env file")
	}

	return &AppConfig{
		QueueUrl:   os.Getenv("QUEUE_URL"),
		DBServer:   os.Getenv("DB_SERVER"),
		DBPort:     os.Getenv("DB_PORT"),
		DBName:     os.Getenv("DB_NAME"),
		DBUser:     os.Getenv("DB_USER"),
		DBPassword: os.Getenv("DB_PASSWORD"),
	}
}
