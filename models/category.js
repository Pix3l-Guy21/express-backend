import { DataTypes } from "sequelize";

export default function(sequelize) {
    const Category = sequelize.define("category", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Category.associate = (models) => {
        Category.hasMany(models.Product, {foreignKey: 'category_id', as:'products'});
    }

    return Category;
}