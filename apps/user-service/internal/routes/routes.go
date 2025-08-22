package routes

import (
	"user-service/internal/di"

	"github.com/gin-gonic/gin"
)

const prefix string = "/api/users"

func RegisterRoutes(router *gin.Engine, container *di.Container) {
	router.POST(prefix, container.CreateUserController.Handle)
	router.GET(prefix+"/:id", container.GetUsersController.Handle)
}
