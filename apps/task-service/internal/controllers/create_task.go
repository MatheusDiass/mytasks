package controllers

import (
	"net/http"
	usecases "task-service/internal/use_cases"
	"time"

	"github.com/gin-gonic/gin"
)

type Request struct {
	Title       string    `json:"title" binding:"required"`
	Description string    `json:"description" binding:"required"`
	DueDate     time.Time `json:"dueDate" binding:"required"`
}

type CreateTaskController struct {
	useCase usecases.CreateTaskUseCase
}

func NewCreateTaskController(useCase usecases.CreateTaskUseCase) *CreateTaskController {
	return &CreateTaskController{useCase: useCase}
}

func (c *CreateTaskController) Handle(ctx *gin.Context) {
	var req Request

	if err := ctx.ShouldBindJSON(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	input := usecases.Input{
		Title:       req.Title,
		Description: req.Description,
		DueDate:     req.DueDate,
	}

	err := c.useCase.Execute(input)

	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	ctx.JSON(http.StatusCreated, gin.H{"message": "Task Created!"})
}
