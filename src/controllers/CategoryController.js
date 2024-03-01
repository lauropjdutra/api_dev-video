const Category = require("../models/Category.js");

const getCategories = async (req, res) => {
  const categories = await Category.find();

  return res.status(200).json(categories);
};

const createCategory = async (req, res) => {
  const category = req.body;
  const newCategory = await Category.create(category);

  console.log(`${newCategory.name} was successfully created ✔`);
  return res.status(201).json(newCategory);
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  await Category.findByIdAndDelete({ _id: id });

  console.log(`${id} was successfully deleted ✔`);
  return res.status(200).json({ message: "Item was deleted" });
};

const updateCategory = async (req, res) => {
  const { id } = req.params;
  const updatedCategory = req.body;
  await Category.findByIdAndUpdate({ _id: id }, updatedCategory);

  console.log(`${id} was successfully updated ✔`);
  return res.status(201).json({ message: "Item was updated" });
};

module.exports = {
  getCategories,
  createCategory,
  deleteCategory,
  updateCategory,
};