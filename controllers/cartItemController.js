import models from "../models/index.js";

const { CartItem } = models;

export const createCartItem = async (req, res) => {
    try {
        const {cart_id, product_id, quantity} = req.body;
        const newCartItem = await CartItem.create({cart_id, product_id, quantity});
        res.status(201).json(newCartItem);
    } catch (error) {
        res.status(400).json({
            message: "Failed to create CartItem",
            error: error.message
        })
    }
}
export const getAllCartItems = async (req, res) => {
    try {
        const cartItems = await CartItem.findAll({
            include: [{
                model: models.Cart,
                as: 'cart'
            },{
                model: models.Product,
                as: 'product'
            }]
        });
        res.json(cartItems);
    } catch (error) {
        res.status(400).json({
            message: "Failed to fetch Carts",
            error: error.message
        })
    }
}

export const getCartItemById = async (req, res) => {
    try {
        const id = req.params.id;
        const cartItem = await CartItem.findByPk(id, {
            include: [{
                model: models.Cart,
                as: 'cart'
            },{
                model: models.Product,
                as: 'product'
            }]
        });
        if(!cartItem) {
            return res.send({
                message: "CartItem not found"
            });
        }
        res.json(cartItem);        
    } catch (error) {
        res.status(400).json({
            message: "Failed to fetch CartItem",
            error: error.message
        })
    }
}

export const updateCartItem = async (req, res) => {
    try {
        const {cart_id, product_id, quantity} = req.body;
        const id = req.params.id;
        const cartItem = CartItem.findByPk(id);
        if(!cartItem) {
            return res.send({
                message: "CartItem not found"
            });
        }
        await cartItem.update({cart_id, product_id, quantity});
        res.json(cartItem);
    } catch (error) {
        res.status(400).json({
            message: "Failed to update CartItem",
            error: error.message
        })
    }
}

export const deleteCartItem = async (req, res) => {
    try {
        const id = req.params.id;
        const cartItem = CartItem.findByPk(id);
        if(!cartItem) {
            return res.send({
                message: "CartItem not found"
            });
        }
        await cartItem.destroy();
        res.json(cartItem);
    } catch (error) {
        res.status(400).json({
            message: "Failed to delete CartItem",
            error: error.message
        })
    }
}