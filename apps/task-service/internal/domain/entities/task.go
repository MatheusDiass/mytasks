package entities

import (
	"errors"
	"time"

	"github.com/google/uuid"
)

type Task struct {
	ID          string    `json:"id"`
	Title       string    `json:"title"`
	Description string    `json:"description"`
	DueDate     time.Time `json:"dueDate"`
}

func NewTask(title, description string, dueDate time.Time) (*Task, error) {
	if len(title) > 50 {
		return nil, errors.New("title must not exceed 50 characters")
	}

	if len(description) > 300 {
		return nil, errors.New("description must not exceed 300 characters")
	}

	id, err := uuid.NewV7()

	if err != nil {
		return nil, err
	}

	return &Task{ID: id.String(), Title: title, Description: description, DueDate: dueDate}, nil
}
