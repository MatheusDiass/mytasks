package adapters

import "github.com/gin-gonic/gin"

func SetupHttpServer() *gin.Engine {
	router := gin.Default()

	router.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{"message": "🚀 Task service is running!"})
	})

	return router
}
