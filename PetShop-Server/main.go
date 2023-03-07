package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
)

type User struct {
	Name     string
	Email    string
	Password string
}

var users = make(map[string]User)

func main() {
	app := fiber.New()

	// Manejar cualquier otra ruta con un controlador HTTP
	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendFile("Hola mundo!")
	})

	// Iniciar el servidor en el puerto 8000
	log.Fatal(app.Listen(":3000"))
}

/*
func handleUsers(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodGet:
		// Return a list of all users
		fmt.Fprintln(w, users)

	case http.MethodPost:
		// Add a new user
		var newUser User
		newUser.Name = r.FormValue("name")
		newUser.Email = r.FormValue("email")
		newUser.Password = r.FormValue("password")
		users[newUser.Name] = newUser
		fmt.Fprintln(w, "User added:", newUser)

	case http.MethodDelete:
		// Delete a user
		name := r.FormValue("name")
		delete(users, name)
		fmt.Fprintln(w, "User deleted:", name)

	default:
		w.WriteHeader(http.StatusMethodNotAllowed)
		fmt.Fprintln(w, "Unsupported method")
	}
}

*/
