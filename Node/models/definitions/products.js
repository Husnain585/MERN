const { sequelize } = require("./users");
const connection = require("../../dbConnection");
const {v4 : uuid } = require("uuid");
const { string, types } = require("joi");
const { format } = require("morgan");
const { models } = require("..");
const { Model, DataTypes } = require("sequelize");

class products extends Model { }

products.init({
    productsId: {
        primaryKey: true,
        type: DataTypes.STRING(),
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(89),
    },
},
    {
        name: "products",
        timestamps: true,
        paranoid: true,
        sequelize: connection,
    }
);

products.beforeCreate(async (products) => {
    products.productsId = await uuid();
});

module.exports = products;