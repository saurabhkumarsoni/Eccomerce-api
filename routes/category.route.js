const express = require('express');
const router = express.Router();
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const { createCategory, updateCategory, deleteCategory, getCategory, getAllCategory } = require('../controller/category.controller');



router.post('/', authMiddleware, isAdmin, createCategory);
router.put('/:id', authMiddleware, isAdmin, updateCategory);
router.delete('/:id', authMiddleware, isAdmin, deleteCategory);
router.get('/:id', getCategory);
router.get('/', getAllCategory);


// router.put('/likes', authMiddleware, likeBlog);
// router.put('/dislikes', authMiddleware, disLikeBlog);
// router.get('/:id', getBlog);
// router.get('/', getAllBlog);



module.exports = router;
