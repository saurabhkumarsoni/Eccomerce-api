const Category = require('../models/categoryModel');
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validatemongodbId");
const ApiFeatures = require("../utils/apiFeatures");


const createCategory = asyncHandler(async(req, res) =>{
    try{
        const category = await Category.create(req.body);
        res.json(category)
    } catch(error){
        throw new Error(error)
    }
});

const updateCategory= asyncHandler(async (req, res) => {
    const id = req.params.id;
    validateMongoDbId(id)
  try {
    const result = await Category.findByIdAndUpdate(id, req.body, {new: true});
    res.json(result);
  } catch (error) {
    throw new Error(error);
  }
});

const deleteCategory = asyncHandler(async (req, res) => {
    validateMongoDbId(id)
    try{
    const id = req.params.id;
    validateMongoDbId(id)
    const result = await Category.findOneAndDelete(id)
    res.json(result);
  } catch (error) {
    throw new Error(error);
  }
});

const getCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id)
    try {
      const getBlog = await Category.findById(id);
      res.json(getBlog);
    } catch (error) {
      throw new Error(error);
    }
  });

  const getAllCategory = asyncHandler(async (req, res) => {
    try {
        const features = new ApiFeatures(Category.find(), req.query)
          .filter()
          .sort()
          .limitFields()
          .paginate();
        let category = await features.query;
        res.status(200).json({
          status: "success",
          length: category.length,
          data: { category },
        });
      } catch (error) {
    throw new Error(error);
  }
});



module.exports = {createCategory, updateCategory, deleteCategory, getCategory, getAllCategory}