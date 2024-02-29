import Category from "../models/Category.js"

export const getCategories = async (req, res) => {
  const categories = await Category.find()

  return res.status(200).json(categories)
}

export const createCategory = async (req, res) => {
  const category = req.body
  const newCategory = await Category.create(category)

  console.log(`${newCategory.name} was successfully created ✔`)
  return res.status(201).json(newCategory)
}

export const deleteCategory = async (req, res) => {
  const { id } = req.params
  await Category.findByIdAndDelete({ _id: id })

  console.log(`${id} was successfully deleted ✔`)
  return res.status(200).json({ message: "Item was deleted" })
}

export const updateCategory = async (req, res) => {
  const { id } = req.params
  const updatedCategory = req.body
  await Category.findByIdAndUpdate({ _id: id }, updatedCategory)

  console.log(`${id} was successfully updated ✔`)
  return res.status(201).json({ message: "Item was updated" })
}