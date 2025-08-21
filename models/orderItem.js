import { DataTypes } from "sequelize";

export default function(sequelize) {
    const OrderItem = sequelize.define("order_items", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        order_id: {
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

    OrderItem.associate = (models) => {
        OrderItem.belongsTo(models.Product, {foreignKey: 'product_id', as:'product'});
        OrderItem.belongsTo(models.Order, {foreignKey: 'order_id', as:'order'});
    }

    return OrderItem;
}