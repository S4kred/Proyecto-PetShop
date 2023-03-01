package main

import (
	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	// Servir archivos estáticos de la carpeta de construcción de React
	app.Static("/", "../PetShop-Client/client/src/")

	// Manejar cualquier otra ruta con un controlador HTTP
	app.Get("*", func(c *fiber.Ctx) error {
		return c.SendFile("../PetShop-Client/client/src/App.jsx")
	})

	// Iniciar el servidor en el puerto 8000
	app.Listen(":8000")
}
