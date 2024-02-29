import { Router } from "express"

import { createMovie, deleteMovie, getAll, getMovies, updateMovie } from "./src/controllers/MovieController.js"

import { createCategory, deleteCategory, getCategories, updateCategory } from "./src/controllers/CategoryController.js"

const routes = Router()

routes.get("/all", getAll)

// ROTAS DE FILMES
routes.get("/movies", getMovies)
routes.post("/movie", createMovie)
routes.delete("/movie/:id", deleteMovie)
routes.put("/movie/:id", updateMovie)

// ROTAS DE CATEGORIAS
routes.get("/categories", getCategories)
routes.post("/category", createCategory)
routes.delete("/category/:id", deleteCategory)
routes.put("/category/:id", updateCategory)

export default routes