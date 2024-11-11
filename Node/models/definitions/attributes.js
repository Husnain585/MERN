const { DataTypes, Model } = require("sequelize");
const connection = require("../../dbConnection");
const { string, types } = require("joi");
const { sequelize } = require("./users");
const {v4: uuid} = require("uuid");



class attributes extends Model { }

attributes.init({
    attributesId: {
        type: DataTypes.INTEGER(),
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(),
        allowNull: false
    },
    value: {
        type: DataTypes.TEXT(),
        allowNull: true
    }
},
    {
        name: "attributes",
        timestamps: true,
        paranoid: true,
        sequelize: connection,
    },
);

attributes.beforeCreate(async (attributes) => {
    attributes.attributesId =  await uuid();
});


module.exports = attributes;