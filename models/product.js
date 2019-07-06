module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("Product", {
        product: {
            type: DataTypes.STRING
        },
        department: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.DECIMAL
        },
        quantity: {
            type: DataTypes.INTEGER
        },
        img: {
            type: DataTypes.STRING
        }
    });

    return Product;
}