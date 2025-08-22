package interfaces

type GetUsersOutput struct {
	Id        string `db:"id"`
	Name      string `db:"name"`
	DateBirth string `db:"date_birth"`
	Email     string `db:"email"`
}

type GetUsersRepo interface {
	Execute(input string) ([]GetUsersOutput, error)
}
