package config

import (
	"log"
	"os"
	"strconv"

	"github.com/joho/godotenv"
)

type AppConfig struct {
	QueueUrl  string
	EmailHost string
	EmailPort int
	EmailUser string
	EmailPass string
	EmailFrom string
}

func LoadEnv() *AppConfig {
	err := godotenv.Load()

	if err != nil {
		log.Fatal("Error loading .env file")
	}

	emailPortConverted, err := strconv.Atoi(os.Getenv("EMAIL_PORT"))

	if err != nil {
		log.Fatal("Error to converted email port!")
	}

	return &AppConfig{
		QueueUrl:  os.Getenv("QUEUE_URL"),
		EmailHost: os.Getenv("EMAIL_HOST"),
		EmailPort: emailPortConverted,
		EmailUser: os.Getenv("EMAIL_USER"),
		EmailPass: os.Getenv("EMAIL_PASS"),
		EmailFrom: os.Getenv("EMAIL_FROM"),
	}
}
