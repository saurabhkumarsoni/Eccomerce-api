const express = require('express');
const { createCoupon, getAllCoupon, updateCoupon, deleteCoupon} = require('../controller/coupon.controller');
const router = express.Router();
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');



router.post('/', authMiddleware, isAdmin, createCoupon);
router.get('/', authMiddleware, isAdmin, getAllCoupon);
router.put('/:id', authMiddleware, isAdmin, updateCoupon)
router.delete('/:id', authMiddleware, isAdmin, deleteCoupon);


// router.put('/likes', authMiddleware, likeBlog);
// router.put('/dislikes', authMiddleware, disLikeBlog);
// router.get('/:id', getBlog);


module.exports = router;
