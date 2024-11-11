const { DataTypes, Model } = require("sequelize");
const connection = require("../../dbConnection");
const { string, types } = require("joi");
const { sequelize } = require("./users");
const {v4: uuid} = require("uuid");


class vendor extends Model { }

vendor.init({
    vendorId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'admin'  // default role
    },
    permissions: {
        type: DataTypes.JSON,  // or DataTypes.ARRAY(DataTypes.STRING)
        allowNull: true,
        defaultValue: ['read']  // default permissions
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true  // active by default
    },
    lastLogin: {
        type: DataTypes.DATE,
        allowNull: true
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true
    }
},
    {
        name: "vendor",
        timestamps: true,
        paranoid: true,
        sequelize: connection,
    },
);

vendor.beforeCreate(async (vendor) => {
    vendor.vendorId = uuid();
})

module.exports = vendor;