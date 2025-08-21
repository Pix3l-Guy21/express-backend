import models from "../models/index.js";

const { Cart } = models;

export const createCart = async (req, res) => {
    try {
        const {user_id, quantity} = req.body;
        const newCart = await Cart.create({user_id, quantity});
        res.status(201).json(newCart);
    } catch (error) {
        res.status(400).json({
            message: "Failed to create Cart",
            error: error.message
        })
    }
}
export const getAllCarts = async (req, res) => {
    try {
        const carts = await Cart.findAll({
            include: [{
                model: models.User,
                as: 'user'
            }]
        });
        res.json(carts);
    } catch (error) {
        res.status(400).json({
            message: "Failed to fetch Carts",
            error: error.message
        })
    }
}

export const getCartById = async (req, res) => {
    try {
        const id = req.params.id;
        const cart = await Cart.findByPk(id, {
            include: [{
                model: models.User,
                as: 'user'
            }]
        });
        if(!cart) {
            return res.send({
                message: "Cart not found"
            });
        }
        res.json(cart);        
    } catch (error) {
        res.status(400).json({
            message: "Failed to update Cart",
            error: error.message
        })
    }
}

export const updateCart = async (req, res) => {
    try {
        const {user_id, quantity} = req.body;
        const id = req.params.id;
        const cart = await Cart.findByPk(id);
        if(!cart) {
            return res.send({
                message: "Cart not found"
            });
        }
        await cart.update({user_id, quantity});
        res.json(cart);
    } catch (error) {
        res.status(400).json({
            message: "Failed to update Cart",
            error: error.message
        })
    }
}

export const deleteCart = async (req, res) => {
    try {
        const id = req.params.id;
        const cart = await Cart.findByPk(id);
        if(!cart) {
            return res.send({
                message: "Cart not found"
            });
        }
        await cart.destroy();
        res.json(cart);
    } catch (error) {
        res.status(400).json({
            message: "Failed to delete Cart",
            error: error.message
        })
    }
}