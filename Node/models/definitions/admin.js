const { DataTypes, Model } = require("sequelize");
const connection = require("../../dbConnection");
const { string, types } = require("joi");
const { sequelize } = require("./users");
const {v4: uuid} = require("uuid");

class admin extends Model { }

admin.init({
    adminId: {
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
        name: "admin",
        timestamps: true,
        paranoid: true,
        sequelize: connection,
    },
);

admin.beforeCreate(async (admin) => {
        admin.adminId =  await uuid();
    });

module.exports = admin;