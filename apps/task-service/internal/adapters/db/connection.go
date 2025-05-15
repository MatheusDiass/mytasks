package db

import (
	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
)

func ConnectDatabase(dns string) (*sqlx.DB, error) {
	db, err := sqlx.Connect("postgres", dns)

	if err != nil {
		return nil, err
	}

	err = db.Ping()

	if err != nil {
		return nil, err
	}

	return db, nil
}
