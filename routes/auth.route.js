const express = require('express');
const {createUser, loginUser, getAllUsers, getUserById, deleteUser, updateUser, blockUser, unblockUser, handleRefreshToken, logout, updatePassword, resetPassword, forgotPassword, loginAdmin, getWishlist, saveAddress, userCart, getUserCart, emptyCart, applyCoupon, createOrder, getOrders, getAllOrders, getOrderByUserId, updateOrderStatus} = require('../controller/user.controller');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();




router.post('/register', createUser);
router.put('/updatePassword', authMiddleware, updatePassword);
router.post("/forgotPassword", forgotPassword);
router.put("/resetPassword/:token", resetPassword);
router.put("/order/update-order/:id", authMiddleware, isAdmin, updateOrderStatus);

router.post('/login', loginUser);
router.post('/admin-login', loginAdmin);
router.post('/cart', authMiddleware, userCart);

router.get('/all-users', getAllUsers);
router.get('/refresh', handleRefreshToken);
router.get('/logout', logout);

router.get('/wishlist', authMiddleware, getWishlist);
router.get('/cart', authMiddleware, getUserCart);
router.post("/cart/applycoupon", authMiddleware, applyCoupon);
router.post("/cart/cash-order", authMiddleware, createOrder);
router.get('/get-orders', authMiddleware, getOrders);
router.get('/get-all-orders', authMiddleware, getAllOrders);
router.get('/get-order-by-user-id', authMiddleware, getOrderByUserId);

router.delete('/empty-cart', authMiddleware, emptyCart);

router.get('/:id', authMiddleware, isAdmin, getUserById);
router.delete('/:id', deleteUser);
router.put('/edit-user', authMiddleware, updateUser);
router.put('/save-address', authMiddleware, saveAddress);
router.put('/block-user/:id', authMiddleware, isAdmin, blockUser); // on;y admin can block the user
router.put('/unblock-user/:id', authMiddleware, isAdmin, unblockUser); // on;y admin can unblock the user



module.exports = router;
