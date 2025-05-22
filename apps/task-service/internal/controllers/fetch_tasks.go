package controllers

import (
	"net/http"
	usecases "task-service/internal/app/use_cases"

	"github.com/gin-gonic/gin"
)

type FetchTasksController struct {
	useCase usecases.FetchTasksUseCase
}

func NewFetchTasksController(useCase usecases.FetchTasksUseCase) *FetchTasksController {
	return &FetchTasksController{useCase: useCase}
}

func (c *FetchTasksController) Handle(ctx *gin.Context) {
	tasks, err := c.useCase.Execute()

	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, tasks)
}