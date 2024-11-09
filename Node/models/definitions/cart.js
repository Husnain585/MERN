const { DataTypes, Model } = require("sequelize");
const connection = require("../../dbConnection");
const { string, types } = require("joi");
const { sequelize } = require("./users");

class cart extends Model { }

cart.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'active'
    },
    addedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
},
    {
        name: "cart",
        timestamps: true,
        paranoid: true,
        sequelize: connection,
    },
);

module.exports = cart;