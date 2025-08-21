import { DataTypes } from "sequelize";

export default function(sequelize) {
    const Cart = sequelize.define("cart", {
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
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    Cart.associate = (models) => {
        Cart.belongsTo(models.User, {foreignKey: 'user_id', as:'user'});
        Cart.hasMany(models.CartItem, {foreignKey: 'cart_id', as:'cart_items'});
    }

    return Cart;
}