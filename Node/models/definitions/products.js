const { DataTypes, Model } = require("sequelize");
const connection = require("../../dbConnection");
const { string, types } = require("joi");
const { sequelize } = require("./users");
const {v4: uuid} = require("uuid");


class products extends Model { }

products.init({
    productsId: {
        type: DataTypes.INTEGER(),
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT(),
        allowNull: true
    },
    categoryId: {
        type: DataTypes.STRING(),
        allowNull: false,
    }
},
    {
        name: "products",
        timestamps: true,
        paranoid: true,
        sequelize: connection,
    },
);

products.beforeCreate(async (products) => {
    products.productsId =  await uuid();
});


module.exports = products;