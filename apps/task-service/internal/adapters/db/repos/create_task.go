package repos

import (
	"task-service/internal/domain/entities"
	"task-service/internal/domain/interfaces"

	"github.com/jmoiron/sqlx"
)

type CreateTaskRepo struct {
	db *sqlx.DB
}

func NewCreateTaskRepo(db *sqlx.DB) interfaces.CreateTaskRepo {
	return &CreateTaskRepo{db: db}
}

func (r *CreateTaskRepo) Execute(task *entities.Task) (*entities.Task, error) {
	var taskCreated entities.Task
	query := "INSERT INTO tbl_task (id, title, description, due_date) VALUES ($1, $2, $3, $4) RETURNING id, title, description, due_date"
	err := r.db.QueryRow(query, task.ID, task.Title, task.Description, task.DueDate).
		Scan(&taskCreated.ID, &taskCreated.Title, &taskCreated.Description, &taskCreated.DueDate)

	if err != nil {
		return nil, err
	}

	return &taskCreated, nil
}
