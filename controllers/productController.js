import models from '../models/index.js';

const {Product} = models;

export const addProduct = async (req, res) => {
    try {
        const {name, description, price, quantity, category_id} = req.body;
        const product = await Product.create({name, description, price, quantity, category_id});
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({
            message: "Failed to add Product",
            error: error.message
        })
    }
}
export const updateProduct = async (req, res) => {
    try {
        const {name, description, price, quantity, category_id} = req.body;
        const id = req.params.id;
        const product = await Product.findByPk(id);
        if (!product) {
            return res.send({
                message: "Product not found"
            });
        }
        await product.update({name, description, price, quantity, category_id});
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Failed to update Product",
            error: error.message
        })
    }
}

export const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findByPk(id, {
            include: [{
                model: models.Category,
                as: 'category'
            }]
        });
        if(!product) {
            return res.send({
                message: "Product not found"
            });
        }
        res.json(product);        
    } catch (error) {
        res.status(400).json({
            message: "Failed to fetch Product",
            error: error.message
        })
    }
}

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll({
            include: [{
                model: models.Category,
                as: 'category'
            }]
        });
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Failed to fetch Products",
            error: error.message
        })
    }
}
export const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findByPk(id);
        if (!product) {
            return res.send({
                message: "Product not found"
            });
        }
        await product.destroy();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Failed to delete Product",
            error: error.message
        })
    }
}