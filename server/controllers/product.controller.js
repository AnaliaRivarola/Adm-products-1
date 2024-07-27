const Product = require('../models/product.model');

const createProduct = async (req, res) => {
    const { title, price, description } = req.body;
    try {
        const newProduct = new Product({
            title,
            price,
            description
        });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createProduct, getAllProducts };
