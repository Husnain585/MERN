const { DataTypes, Model } = require("sequelize");
const connection = require("../../dbConnection");
const { string, types } = require("joi");
const { sequelize } = require("./users");
const {v4: uuid} = require("uuid");

class variationHasAttributes extends Model { }

variationHasAttributes.init({
    productsVariations: {
        type: DataTypes.INTEGER(),
        primaryKey: true,
        autoIncrement: true
    },
},
    {
        name: "variationHasAttributes",
        timestamps: true,
        paranoid: true,
        sequelize: connection,
    },
);

variationHasAttributes.beforeCreate(async (variationHasAttributes) => {
    variationHasAttributes.productsId = uuid();
});


module.exports = variationHasAttributes;