const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// Create a product (for demonstration purposes)
router.post('/', async (req, res) => {
    const { name, price, description, imageUrl } = req.body;
    const product = new Product({ name, price, description, imageUrl });
    await product.save();
    res.status(201).json(product);
});

module.exports = router;
