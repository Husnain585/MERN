const { DataTypes, Model } = require("sequelize");
const connection = require("../../dbConnection");
const { string, types } = require("joi");
const { sequelize } = require("./users");

class customer extends Model { }

customer.init({
    customerId: {
        primaryKey: true,
        type: DataTypes.STRING(100),
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
        name: "customer",
        timestamps: true,
        paranoid: true,
        sequelize: connection,
    },
);

module.exports = customer;