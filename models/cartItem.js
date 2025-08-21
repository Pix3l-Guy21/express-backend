import { DataTypes } from "sequelize";

export default function (sequelize) {
    const CartItem = sequelize.define("cart_items", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        cart_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    CartItem.associate = (models) => {
        CartItem.belongsTo(models.Product, {foreignKey: 'product_id', as:'product'});
        CartItem.belongsTo(models.Cart, {foreignKey: 'cart_id', as:'cart'});
    }

    return CartItem;
}