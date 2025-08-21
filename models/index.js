import sequelize from "../config/db.js";
import address from "./address.js";
import cart from "./cart.js";
import cartItem from "./cartItem.js";
import category from "./category.js";
import order from "./order.js";
import orderItem from "./orderItem.js";
import product from "./product.js";
import productImage from "./productImage.js";
import user from "./user.js";

const models = {
    User: user(sequelize),
    Order: order(sequelize),
    OrderItem: orderItem(sequelize),
    Product: product(sequelize),
    ProductImage: productImage(sequelize),
    Cart: cart(sequelize),
    Address: address(sequelize),
    Category: category(sequelize),
    CartItem: cartItem(sequelize)
}

Object.values(models).forEach((model) => {
    if (model.associate) {
        model.associate(models);
    }
});

export {sequelize}

export default models;