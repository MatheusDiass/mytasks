package adapters

import "github.com/gin-gonic/gin"

func SetupHttpServer() *gin.Engine {
	router := gin.Default()

	router.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{"message": "🚀 User service is running!"})
	})

	return router
}
