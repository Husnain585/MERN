const { sequelize } = require("./users");
const connection = require("../../dbConnection");
const {v4 : uuid } = require("uuid");
const { string, types } = require("joi");
const { format } = require("morgan");
const { models } = require("..");
const { Model, DataTypes } = require("sequelize");

class cartItem extends Model { }

cartItem.init({
    cartItemId: {
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
        name: "cartItem",
        timestamps: true,
        paranoid: true,
        sequelize: connection,
    }
);

cartItem.beforeCreate(async (cartItem) => {
    cartItem.cartItemId = await uuid();
});

module.exports = cartItem;