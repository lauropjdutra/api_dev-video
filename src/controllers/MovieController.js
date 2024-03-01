const Movie = require("../models/Movie.js");
const Category = require("../models/Category.js");

const getAll = async (req, res) => {
  const movies = await Movie.find();
  const categories = await Category.find();

  return res.status(200).json({ movies, categories });
};

const getMovies = async (req, res) => {
  const movies = await Movie.find();

  return res.status(200).json(movies);
};

const createMovie = async (req, res) => {
  const movies = req.body;

  movies.map(async (movie) => await Movie.create(movie));

  console.log(`Items successfully created ✔`);
  return res.status(201).json("created");
};

const deleteMovie = async (req, res) => {
  const { id } = req.params;
  await Movie.findByIdAndDelete({ _id: id });

  console.log(`${id} was successfully deleted ✔`);
  return res.status(200).json({ message: "Item was deleted" });
};

const updateMovie = async (req, res) => {
  const { id } = req.params;
  const updatedMovie = req.body;
  await Movie.findByIdAndUpdate({ _id: id }, updatedMovie);

  console.log(`${id} was successfully updated ✔`);
  return res.status(201).json({ message: "Item was updated" });
};

module.exports = {
  getAll,
  getMovies,
  createMovie,
  deleteMovie,
  updateMovie,
};