import models from "../models/index.js";

const { ProductImage } = models;

export const addProductImage = async (req, res) => {
    try {
        const {image, product_id} = req.body;
        const newProductImage = await ProductImage.create({image, product_id});
        res.status(201).json(newProductImage);
    } catch (error) {
        res.status(400).json({
            message: "Failed to create ProductImage",
            error: error.message
        })
    }
}
export const getAllImages = async (req, res) => {
    try {
        const images = await ProductImage.findAll({
            include: [{
                model: models.Product,
                as: "product"
            }]
        });
        res.json(images);
    } catch (error) {
        res.status(400).json({
            message: "Failed to fetch Images",
            error: error.message
        })
    }
}

export const getProductImageById = async (req, res) => {
    try {
        const id = req.params.id;
        const productImage = await ProductImage.findByPk(id, {
            include: [{
                model: models.Product,
                as: 'product'
            }]
        });
        if(!productImage) {
            return res.send({
                message: "ProductImage not found"
            });
        }
        res.json(productImage);        
    } catch (error) {
        res.status(400).json({
            message: "Failed to fetch ProductImage",
            error: error.message
        })
    }
}

export const updateProductImage = async (req, res) => {
    try {
        const {image, product_id} = req.body;
        const id = req.params.id;
        const productImage = ProductImage.findByPk(id);
        if(!productImage) {
            return res.send({
                message: "ProductImage not found"
            });
        }
        await productImage.update({image, product_id});
        res.json(productImage);
    } catch (error) {
        res.status(400).json({
            message: "Failed to update ProductImage",
            error: error.message
        })
    }
}

export const deleteProductImage = async (req, res) => {
    try {
        const id = req.params.id;
        const productImage = ProductImage.findByPk(id);
        if(!productImage) {
            return res.send({
                message: "ProductImage not found"
            });
        }
        await productImage.destroy();
        res.json(productImage);
    } catch (error) {
        res.status(400).json({
            message: "Failed to delete ProductImage",
            error: error.message
        })
    }
}