import models from "../models/index.js";

const { OrderItem } = models;

export const addOrderItem = async (req, res) => {
    try {
        const {order_id, product_id, quantity} = req.body;
        const newOrderItem = await OrderItem.create({order_id, product_id, quantity});
        res.status(201).json(newOrderItem);
    } catch (error) {
        res.status(400).json({
            message: "Failed to create OrderItem",
            error: error.message
        })
    }
}
export const getAllOrderItems = async (req, res) => {
    try {
        const orderItems = await OrderItem.findAll({
            include: [{
                model: models.Order,
                as: 'order'
            },{
                model: models.Product,
                as: 'product'
            }]
        });
        res.json(orderItems);
    } catch (error) {
        res.status(400).json({
            message: "Failed to fetch OrderItemss",
            error: error.message
        })
    }
}

export const getOrderItemById = async (req, res) => {
    try {
        const id = req.params.id;
        const orderItem = await OrderItem.findByPk(id, {
            include: [{
                model: models.Order,
                as: 'order'
            },{
                model: models.Product,
                as: 'product'
            }]
        });
        if(!orderItem) {
            return res.send({
                message: "OrderItem not found"
            });
        }
        res.json(orderItem);        
    } catch (error) {
        res.status(400).json({
            message: "Failed to fetch OrderItem",
            error: error.message
        })
    }
}

export const updateOrderItem = async (req, res) => {
    try {
        const {order_id, product_id, quantity} = req.body;
        const id = req.params.id;
        const orderItem = OrderItem.findByPk(id);
        if(!orderItem) {
            return res.send({
                message: "OrderItem not found"
            });
        }
        await orderItem.update({order_id, product_id, quantity});
        res.json(orderItem);
    } catch (error) {
        res.status(400).json({
            message: "Failed to update OrderItem",
            error: error.message
        })
    }
}

export const deleteOrderItem = async (req, res) => {
    try {
        const id = req.params.id;
        const orderItem = OrderItem.findByPk(id);
        if(!orderItem) {
            return res.send({
                message: "OrderItem not found"
            });
        }
        await orderItem.destroy();
        res.json(orderItem);
    } catch (error) {
        res.status(400).json({
            message: "Failed to delete OrderItem",
            error: error.message
        })
    }
}