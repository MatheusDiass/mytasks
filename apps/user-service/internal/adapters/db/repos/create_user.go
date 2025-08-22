package repos

import (
	"time"
	"user-service/internal/domain/entities"
	"user-service/internal/domain/interfaces"

	"github.com/jmoiron/sqlx"
)

type CreateUserRepo struct {
	db *sqlx.DB
}

func NewCreateUserRepo(db *sqlx.DB) interfaces.CreateUserRepo {
	return &CreateUserRepo{db: db}
}

func (r *CreateUserRepo) Execute(task *entities.User) error {
	query := "INSERT INTO users (id, name, date_birth, email, updated_at) VALUES ($1, $2, $3, $4, $5)"
	_, err := r.db.Exec(query, task.ID, task.Name, task.DateBirth, task.Email, time.Now())

	if err != nil {
		return err
	}

	return nil
}
