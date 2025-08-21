import models from "../models/index.js";

const { Order } = models;

export const addOrder = async (req, res) => {
    try {
        const {user_id, order_date} = req.body;
        const newCart = await Order.create({user_id, order_date});
        res.status(201).json(newCart);
    } catch (error) {
        res.status(400).json({
            message: "Failed to create Order",
            error: error.message
        })
    }
}
export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.findAll({
            include: [{
                model: models.User,
                as: 'user'
            }]
        });
        res.json(orders);
    } catch (error) {
        res.status(400).json({
            message: "Failed to fetch Orders",
            error: error.message
        })
    }
}

export const getOrderById = async (req, res) => {
    try {
        const id = req.params.id;
        const order = await Order.findByPk(id, {
            include: [{
                model: models.User,
                as: 'user'
            }]
        });
        if(!order) {
            return res.send({
                message: "Order not found"
            });
        }
        res.json(order);        
    } catch (error) {
        res.status(400).json({
            message: "Failed to fetch Order",
            error: error.message
        })
    }
}

export const updateOrder = async (req, res) => {
    try {
        const {user_id, order_date} = req.body;
        const id = req.params.id;
        const order = Order.findByPk(id);
        if(!order) {
            return res.send({
                message: "Order not found"
            });
        }
        await order.update({user_id, order_date});
        res.json(order);
    } catch (error) {
        res.status(400).json({
            message: "Failed to update Order",
            error: error.message
        })
    }
}

export const deleteOrder = async (req, res) => {
    try {
        const id = req.params.id;
        const order = Order.findByPk(id);
        if(!order) {
            return res.send({
                message: "Order not found"
            });
        }
        await order.destroy();
        res.json(order);
    } catch (error) {
        res.status(400).json({
            message: "Failed to delete Order",
            error: error.message
        })
    }
}