const { DataTypes, Model } = require("sequelize");
const connection = require("../../dbConnection");
const { string, types } = require("joi");
const { sequelize } = require("./users");
const {v4: uuid} = require("uuid");

class productsVariations extends Model { }

productsVariations.init({
    productsVariationsId: {
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
        name: "productsVariation",
        timestamps: true,
        paranoid: true,
        sequelize: connection,
    },
);

productsVariations.beforeCreate(async (productsVariations) => {
    productsVariations.productsId = uuid();
});


module.exports = productsVariations;