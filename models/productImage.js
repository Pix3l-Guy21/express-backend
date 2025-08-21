import { DataTypes } from "sequelize";

export default function(sequelize) {
    const ProductImage = sequelize.define("product_images", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    ProductImage.associate = (models) => {
        ProductImage.belongsTo(models.Product, {foreignKey: 'product_id', as:'product'});
    }

    return ProductImage;
}