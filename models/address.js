import { DataTypes } from "sequelize";

export default function(sequelize) {
    const Address = sequelize.define("address", {
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
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    Address.associate = (models) => {
        Address.belongsTo(models.User, {foreignKey: 'user_id', as:'user'});
    }

    return Address;
}