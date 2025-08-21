'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('cart_item', {
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
      },
      cart_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'cart', 
            key: 'id' 
          },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      },
      product_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'product', 
            key: 'id' 
          },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      quantity: {
          type: Sequelize.INTEGER,
          allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('cart_item');
  }
};
