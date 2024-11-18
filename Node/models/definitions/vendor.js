const { sequelize } = require("./users");
const connection = require("../../dbConnection");
const {v4 : uuid } = require("uuid");
const { string, types } = require("joi");
const { format } = require("morgan");
const { models } = require("..");
const { Model, DataTypes } = require("sequelize");

class vendor extends Model { }

vendor.init({
    vendorId: {
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
        name: "vendor",
        timestamps: true,
        paranoid: true,
        sequelize: connection,
    }
);

vendor.beforeCreate(async (vendor) => {
    vendor.vendorId = await uuid();
});

module.exports = vendor;