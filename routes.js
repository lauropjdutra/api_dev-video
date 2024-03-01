const express = require("express");

const {
  createMovie,
  deleteMovie,
  getAll,
  getMovies,
  updateMovie,
} = require("./src/controllers/MovieController.js");

const {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} = require("./src/controllers/CategoryController.js");

const routes = express.Router();

// ROTA GERAL
routes.get("/all", getAll);

// ROTAS DE FILMES
routes.get("/movies", getMovies);
routes.post("/movie", createMovie);
routes.delete("/movie/:id", deleteMovie);
routes.put("/movie/:id", updateMovie);

// ROTAS DE CATEGORIAS
routes.get("/categories", getCategories);
routes.post("/category", createCategory);
routes.delete("/category/:id", deleteCategory);
routes.put("/category/:id", updateCategory);

module.exports = routes;