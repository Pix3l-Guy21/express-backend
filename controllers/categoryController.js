import models from "../models/index.js";

const { Category } = models;

export const createCategory = async (req, res) => {
    try {
        const {name} = req.body;
        const newCategory = await Category.create({name});
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(400).json({
            message: "Failed to create Category",
            error: error.message
        })
    }
}
export const getAllCategory = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.json(categories);
    } catch (error) {
        res.status(400).json({
            message: "Failed to fetch Categories",
            error: error.message
        })
    }
}

export const getCategoryById = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await Category.findByPk(id);
        if(!category) {
            return res.send({
                message: "Category not found"
            });
        }
        res.json(category);        
    } catch (error) {
        res.status(400).json({
            message: "Failed to fetch Category",
            error: error.message
        })
    }
}

export const updateCategory = async (req, res) => {
    try {
        const {name} = req.body;
        const id = req.params.id;
        const category = Category.findByPk(id);
        if(!category) {
            return res.send({
                message: "Category not found"
            });
        }
        await category.update({name});
        res.json(category);
    } catch (error) {
        res.status(400).json({
            message: "Failed to update Category",
            error: error.message
        })
    }
}

export const deleteCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const category = Category.findByPk(id);
        if(!category) {
            return res.send({
                message: "Category not found"
            });
        }
        await category.destroy();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            message: "Failed to delete Category",
            error: error.message
        })
    }
}