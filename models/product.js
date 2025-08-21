import { DataTypes } from "sequelize";

export default function(sequelize) {
    const Product = sequelize.define("product", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: true
    });

    Product.associate = (models) => {
        Product.hasMany(models.OrderItem, {foreignKey: 'product_id', as:'order_items'});
        Product.belongsTo(models.Category, {foreignKey: 'category_id', as:'category'});
        Product.hasMany(models.CartItem, {foreignKey: 'product_id', as:'cart_items'});
        Product.hasMany(models.ProductImage, {foreignKey: 'product_id', as:'product_images'});
    }

    return Product;
}