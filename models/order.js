import { DataTypes, NOW } from "sequelize";

export default function(sequelize) {
    const Order = sequelize.define("order", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        order_date: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    });
    Order.associate = (models) => {
        Order.hasMany(models.OrderItem, {foreignKey: 'order_id', as: 'order_items'})
        Order.belongsTo(models.User, {foreignKey: 'user_id', as:'user'});
    }
    return Order;
}