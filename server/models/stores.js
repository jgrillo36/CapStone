'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  stores.init({
    itemId: DataTypes.INTEGER,
    itemName: DataTypes.STRING,
    price: DataTypes.INTEGER,
    size: DataTypes.STRING,
    description: DataTypes.STRING,
    pic: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'stores',
  });
  return stores;
};