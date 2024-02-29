import Movie from "../models/Movie.js"
import Category from "../models/Category.js"

export const getAll = async (req, res) => {
  const movies = await Movie.find()
  const categories = await Category.find()

  return res.status(200).json({ movies, categories })
}

export const getMovies = async (req, res) => {
  const movies = await Movie.find()

  return res.status(200).json(movies)
}

export const createMovie = async (req, res) => {
  const movies = req.body
  
  movies.map(async movie => await Movie.create(movie))

  // const newMovie = await Movie.create(movie)

  console.log(`Items successfully created ✔`)
  return res.status(201).json("created")
}

export const deleteMovie = async (req, res) => {
  const { id } = req.params
  await Movie.findByIdAndDelete({ _id: id })

  console.log(`${id} was successfully deleted ✔`)
  return res.status(200).json({ message: "Item was deleted" })
}

export const updateMovie = async (req, res) => {
  const { id } = req.params
  const updatedMovie = req.body
  await Movie.findByIdAndUpdate({ _id: id }, updatedMovie)

  console.log(`${id} was successfully updated ✔`)
  return res.status(201).json({ message: "Item was updated" })
}