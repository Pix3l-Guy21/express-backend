import models from "../models/index.js";

const { User } = models;

export const createUser = async (req, res) => {
    try {
        const {firstName, lastName, phoneNumber} = req.body;
        const createdUser = await User.create({firstName, lastName, phoneNumber});
        res.status(201).json(createdUser);
    } catch (error) {
        res.status(400).json({
            message: "Failed to create User",
            error: error.message
        })
    }
}

export const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findByPk(id);
        if(!user) {
            return res.send({
                message: "User not found"
            });
        }
        res.json(user);        
    } catch (error) {
        res.status(400).json({
            message: "Failed to fetch User",
            error: error.message
        });
    }
}

export const updateUser = async (req, res) => {
    try {
        const {firstName, lastName, phoneNumber} = req.body;
        const id = req.params.id;
        const user = await User.findByPk(id);
        if (!user) {
            return res.send({
                message: "User not found"
            });
        }
        await user.update({firstName, lastName, phoneNumber});
        res.json(user);
    } catch (error) {
        res.status(400).json({
            message: "Failed to update User",
            error: error.message
        })
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(400).json({
            message: "Failed to fetch Users",
            error: error.message
        });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findByPk(id);
        await user.destroy();
        res.json(user);
    } catch (error) {
        res.status(400).json({
            message: "Failed to delete User",
            error: error.message
        })
    }
}