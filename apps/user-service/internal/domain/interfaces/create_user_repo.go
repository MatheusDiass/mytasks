package interfaces

import "user-service/internal/domain/entities"

type CreateUserRepo interface {
	Execute(user *entities.User) error
}
