package usecases

import (
	"user-service/internal/domain/interfaces"
)

type GetUsersOutput struct {
	Id        string `json:"id"`
	Name      string `json:"name"`
	DateBirth string `json:"dateBirth"`
	Email     string `json:"email"`
}

type GetUsersUseCase struct {
	getUsersRepo interfaces.GetUsersRepo
}

func NewGetUsersUseCase(getUsersRepo interfaces.GetUsersRepo) *GetUsersUseCase {
	return &GetUsersUseCase{getUsersRepo: getUsersRepo}
}

func (uc GetUsersUseCase) Execute(input string) ([]GetUsersOutput, error) {
	users, err := uc.getUsersRepo.Execute(input)

	if err != nil {
		return nil, err
	}

	out := make([]GetUsersOutput, 0, len(users))
	for _, user := range users {
		out = append(out, GetUsersOutput{
			Id:        user.Id,
			Name:      user.Name,
			DateBirth: user.DateBirth,
			Email:     user.Email,
		})
	}

	return out, nil
}
