import { DataTypes } from "sequelize";

export default function (sequelize) {
    const User = sequelize.define("users", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    },{
        timestamps: true
    });

    User.associate = (models) => {
        User.hasMany(models.Order, {foreignKey: 'user_id', as:'orders'});
        User.hasMany(models.Cart, {foreignKey: 'user_id', as:'carts'});
        User.hasMany(models.Address, {foreignKey: 'user_id', as:'addresses'});

    }
    return User;
}
