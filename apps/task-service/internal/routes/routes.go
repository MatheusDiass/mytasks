package routes

import (
	"task-service/internal/di"

	"github.com/gin-gonic/gin"
)

const prefix string = "/api/v1/tasks"

func RegisterRoutes(router *gin.Engine, container *di.Container) {
	router.POST(prefix, container.CreateTaskController.Handle)
}
