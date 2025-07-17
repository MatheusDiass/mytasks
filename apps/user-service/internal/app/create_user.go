package usecases

import (
	"user-service/internal/domain/entities"
	"user-service/internal/domain/interfaces"
)

type CreateUserInput struct {
	Id        string
	Name      string
	DateBirth string
	Email     string
}

type CreateUserUseCase struct {
	createUserRepo interfaces.CreateUserRepo
}

func NewCreateUserUseCase(createUserRepo interfaces.CreateUserRepo) *CreateUserUseCase {
	return &CreateUserUseCase{createUserRepo: createUserRepo}
}

func (uc CreateUserUseCase) Execute(input CreateUserInput) error {
	user, err := entities.NewUser(input.Id, input.Name, input.DateBirth, input.Email)

	if err != nil {
		return err
	}

	err = uc.createUserRepo.Execute(user)

	if err != nil {
		return err
	}

	return nil
}
