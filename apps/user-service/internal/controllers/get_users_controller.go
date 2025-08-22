package controllers

import (
	"fmt"
	"net/http"
	usecases "user-service/internal/app"

	"github.com/gin-gonic/gin"
)

type GetUsersRequest struct {
	Id string `uri:"id" binding:"required"`
}

type GetUsersController struct {
	useCase usecases.GetUsersUseCase
}

func NewGetUsersController(useCase usecases.GetUsersUseCase) *GetUsersController {
	return &GetUsersController{useCase: useCase}
}

func (c *GetUsersController) Handle(ctx *gin.Context) {
	var req GetUsersRequest

	if err := ctx.ShouldBindUri(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	fmt.Println(req)

	users, err := c.useCase.Execute(req.Id)

	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, users)
}
