import models from "../models/index.js";

const { Address } = models;

export const addAddress = async (req, res) => {
    try {
        const {name, user_id} = req.body;
        const newAddress = await Address.create({name, user_id});
        res.status(201).json(newAddress);
    } catch (error) {
        res.status(400).json({
            message: "Failed to create Address",
            error: error.message
        })
    }
}
export const getAllAddresses = async (req, res) => {
    try {
        const addresses = await Address.findAll({
            include: [{
                model: models.User,
                as: 'user'
            }]
        });
        res.json(addresses);
    } catch (error) {
        res.status(400).json({
            message: "Failed to fetch Addresses",
            error: error.message
        })
    }
}

export const getAddressById = async (req, res) => {
    try {
        const id = req.params.id;
        const address = await Address.findByPk(id, {
            include: [{
                model: models.User,
                as: 'user'
            }]
        });
        if(!address) {
            return res.send({
                message: "Address not found"
            });
        }
        res.json(address);        
    } catch (error) {
        res.status(400).json({
            message: "Failed to fetch Address",
            error: error.message
        })
    }
}

export const updateAddress = async (req, res) => {
    try {
        const {user_id, name} = req.body;
        const id = req.params.id;
        const address = Address.findByPk(id);
        if(!address) {
            return res.send({
                message: "Address not found"
            });
        }
        await address.update({user_id, name});
        res.json(address);
    } catch (error) {
        res.status(400).json({
            message: "Failed to update Address",
            error: error.message
        })
    }
}

export const deleteAddress = async (req, res) => {
    try {
        const id = req.params.id;
        const address = Address.findByPk(id);
        if(!address) {
            return res.send({
                message: "Address not found"
            });
        }
        await address.destroy();
        res.json(address);
    } catch (error) {
        res.status(400).json({
            message: "Failed to delete Address",
            error: error.message
        })
    }
}