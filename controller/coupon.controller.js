const Coupon = require('../models/couponModel');
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validatemongodbId");
const ApiFeatures = require("../utils/apiFeatures");

const createCoupon = asyncHandler(async(req, res) =>{
    try{
        const newCoupon  = await Coupon.create(req.body);
        res.json(newCoupon);
    } catch(error){
        throw new Error(error);
    }
});

const getAllCoupon = asyncHandler(async (req, res) => {
    try {
        const features = new ApiFeatures(Coupon.find(), req.query)
          .filter()
          .sort()
          .limitFields()
          .paginate();
        let coupon = await features.query;
        res.status(200).json({
          status: "success",
          length: coupon.length,
          data: { coupon },
        });
      } catch (error) {
    throw new Error(error);
  }
});

const updateCoupon= asyncHandler(async (req, res) => {
    const id = req.params.id;
    validateMongoDbId(id)
  try {
    const result = await Coupon.findByIdAndUpdate(id, req.body, {new: true});
    res.json(result);
  } catch (error) {
    throw new Error(error);
  }
});

const deleteCoupon = asyncHandler(async (req, res) => {
    try{
    const id = req.params.id;
    validateMongoDbId(id)
    const result = await Coupon.findOneAndDelete(id)
    res.json(result);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {createCoupon, getAllCoupon, updateCoupon, deleteCoupon}