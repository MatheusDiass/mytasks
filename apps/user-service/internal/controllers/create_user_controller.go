package controllers

import (
	"net/http"
	usecases "user-service/internal/app"

	"github.com/gin-gonic/gin"
)

type CreateUserRequest struct {
	Id        string `json:"id" binding:"required"`
	Name      string `json:"name" binding:"required"`
	Email     string `json:"email" binding:"required"`
	DateBirth string `json:"dateBirth" binding:"required"`
}

type CreateUserController struct {
	useCase usecases.CreateUserUseCase
}

func NewCreateUserController(useCase usecases.CreateUserUseCase) *CreateUserController {
	return &CreateUserController{useCase: useCase}
}

func (c *CreateUserController) Handle(ctx *gin.Context) {
	var req CreateUserRequest

	if err := ctx.ShouldBindJSON(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	input := usecases.CreateUserInput{
		Id:        req.Id,
		Name:      req.Name,
		Email:     req.Email,
		DateBirth: req.DateBirth,
	}

	err := c.useCase.Execute(input)

	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	ctx.JSON(http.StatusCreated, gin.H{"message": "User Created!"})
}
