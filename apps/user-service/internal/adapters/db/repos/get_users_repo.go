package repos

import (
	"fmt"
	"user-service/internal/domain/interfaces"

	"github.com/jmoiron/sqlx"
)

type GetUsersRepo struct {
	db *sqlx.DB
}

func NewGetUsersRepo(db *sqlx.DB) interfaces.GetUsersRepo {
	return &GetUsersRepo{db: db}
}

func (r *GetUsersRepo) Execute(input string) ([]interfaces.GetUsersOutput, error) {
	fmt.Println(input)
	query := "SELECT id, name, date_birth, email FROM users WHERE id = $1"

	var rows []interfaces.GetUsersOutput
	err := r.db.Select(&rows, query, input)

	if err != nil {
		return nil, err
	}

	return rows, nil
}
