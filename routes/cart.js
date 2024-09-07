const express = require('express');
const User = require('../models/User');
const Product = require('../models/Product');
const router = express.Router();

// Middleware to check if the user is authenticated
function isAuthenticated(req, res, next) {
    if (req.session.userId) {
        return next();
    }
    res.status(401).json({ error: 'Unauthorized' });
}

// Add item to cart
router.post('/add', isAuthenticated, async (req, res) => {
    const { productId, quantity } = req.body;
    const user = await User.findById(req.session.userId);
    
    const itemIndex = user.cart.findIndex(item => item.productId.equals(productId));
    
    if (itemIndex > -1) {
        user.cart[itemIndex].quantity += quantity;
    } else {
        user.cart.push({ productId, quantity });
    }

    await user.save();
    res.json({ message: 'Product added to cart' });
});

// Get cart items
router.get('/', isAuthenticated, async (req, res) => {
    const user = await User.findById(req.session.userId).populate('cart.productId');
    res.json(user.cart);
});

module.exports = router;
