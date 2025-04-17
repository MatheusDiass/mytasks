package infra

import (
	"task-service/internal/domain"

	"github.com/jmoiron/sqlx"
)

type CreateTaskRepository struct {
	db *sqlx.DB
}

func NewCreateTaskRepository(db *sqlx.DB) *CreateTaskRepository {
	return &CreateTaskRepository{db: db}
}

func (repo *CreateTaskRepository) Create(task domain.Task) error {
	_, err := repo.db.Exec(
		"INSERT INTO tbl_task(name, description) VALUES($1, $2)",
		task.Title, task.Description,
	)

	return err
}
