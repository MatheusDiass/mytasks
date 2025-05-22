package repos

import (
	"task-service/internal/domain/entities"
	"task-service/internal/domain/interfaces"

	"github.com/jmoiron/sqlx"
)

type FetchTasksRepo struct {
	db *sqlx.DB
}

func NewFetchTasksRepo(db *sqlx.DB) interfaces.FetchTasksRepo {
	return &FetchTasksRepo{db: db}
}

func (r *FetchTasksRepo) Execute() ([]entities.Task, error) {
	var tasks []entities.Task
	query := "SELECT id, title, description, due_date FROM tbl_task"
	rows, err := r.db.Query(query)

	if err != nil {
		return nil, err
	}

	for rows.Next() {
		var task entities.Task

		if err := rows.Scan(&task.ID, &task.Title, &task.Description, &task.DueDate); err != nil {
			return nil, err
		}
		
		tasks = append(tasks, task)
	}
	
	return tasks, nil
}